import React from 'react';
import Header from '../src/containers/Header';
import renderer from 'react-test-renderer';

describe('Header', () => {
	it('correctly renders the Header', () => {
		const tree = renderer.create(<Header />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
