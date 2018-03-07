import React from 'react';
import FilmDetails from '../src/components/FilmDetails';
import renderer from 'react-test-renderer';

describe('Film Details Item', () => {
	it('films details item with \'display-details\' classname is rendered', () => {

		const data1 = {
			Runtime: '106m',
			Genre: 'comedy',
			Plot: 'plot here'
		}
		
		const mock = renderer.create(<FilmDetails 
			detailsShown={true}
			data={ data1}
			/>).toJSON();

		expect(mock).toMatchSnapshot();

	})
})

describe('Film Details Item', () => {
	it('films details item with \'hide-details\' classname is rendered', () => {

		const data1 = {
			Runtime: '106m',
			Genre: 'comedy',
			Plot: 'plot here'
		}
		
		const mock = renderer.create(<FilmDetails 
			detailsShown={false}
			data={ data1}
			/>).toJSON();

		expect(mock).toMatchSnapshot();

	})
})

