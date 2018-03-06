import React from 'react';
import ResultsItem from './ResultsItem';

class Results extends React.Component{
	render(){
		return(
			<section className='results'>
				<h2>Results</h2>
				<ResultsItem />
			</section>
		);
	}
}

export default Results;