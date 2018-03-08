import React from "react";
import Main from "../src/containers/Main"
import {shallow} from "enzyme";
import fetchMock from 'fetch-mock';
import renderer from "react-test-renderer";

describe("Main", () =>{
	it("Main is rendered", ()=>{
		const mock = renderer.create(<Main />).toJSON();
		expect(mock).toMatchSnapshot();
	})

	describe("fetch and display", () => {
		beforeEach(() => {
				fetchMock.get("*", {Search:["alpha", "bravo", "charlie"]})
		})

		it("fetches and displays", done => {
				const wrapper = shallow(<Main />);

				wrapper.instance().getData()

				setTimeout(()=>{
					const updated = wrapper.update();
					const mainComponent = updated.find("Results");

					expect(mainComponent.get(0).props.results).toEqual(["alpha", "bravo", "charlie"]);

				done();
				}, 0);

				afterEach(()=> {
					fetchMock.restore();
			})
		})
	})
})
