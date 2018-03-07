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
		const outputText = wrapper.find('.search-input').instance().value
		console.log(wrapper.find('.search-input').instance());

		expect(outputText).toEqual('cat');
	})
})