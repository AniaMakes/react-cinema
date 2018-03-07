import React from 'react';
import ResultsItem from './ResultsItem';

class Results extends React.Component{
	constructor(props){
		super(props);


	}
	render(){

		const results = this.props.results;

		let resultsComponentsArray = results.map(function(filmInfo){
			return <ResultsItem 
				title={filmInfo.Title}
				year={filmInfo.Year}
				imdbID={filmInfo.imdbID}
				posterURL={filmInfo.Poster}
				key={filmInfo.imdbID}

			/>
		})

		return(
			<section className='results'>
				<h2>Results</h2>

				{resultsComponentsArray}

			</section>
		);
	}
}

export default Results;