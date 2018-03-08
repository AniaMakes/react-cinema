import React from "react";
import ResultsItem from "../src/components/ResultsItem"
import renderer from 'react-test-renderer'

describe("Results Item", () =>{
	it("results item is rendered", ()=>{

		const mock = renderer.create(<ResultsItem
			title="Random movie"
				year="2010"
				imdbID="i237hf"
				posterURL="../img/cat-image.jpeg"
				key="i237hf" />).toJSON();

		expect(mock).toMatchSnapshot();

	})
})
