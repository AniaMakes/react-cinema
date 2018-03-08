import React from 'react';
import Search from '../src/components/Search';
import {shallow} from 'enzyme';

describe('Search input', () => {
	it('State is changed accordingly', () => {
		const event = {
			target: {
				value: 'cat'
			}
		}
		const wrapper = shallow(<Search />);
		const inputBox = wrapper.find('.search-input').simulate('change', event);
		const outputText = wrapper.find('.search-input').props().value

		expect(outputText).toEqual('cat');
	})

	it("calls receiver prop funciton with value state", () => {
		const receiver = jest.fn();
		const event = {preventDefault: jest.fn()};

		const wrapper = shallow(<Search receiver={receiver}/>);
		wrapper.setState({value: "Harry Potter"});
		wrapper.find("form").simulate("submit", event);

		expect(receiver.mock.calls).toEqual([
			["Harry Potter"]
		]);

		expect(event.preventDefault.mock.calls).toEqual(
			[[	]]
		);
	})

})
