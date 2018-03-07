import React from 'react';

class ResultsItem extends React.Component{
	constructor(props){
		super(props)
	}

	render(){

		const {title, imdbID, year, posterURL} = this.props;

		return(
			<article className='results-item' id={imdbID}>
				<img src={posterURL} />
				<h3 className='item-title'>{title}</h3>
				<p className='item-year'>{year}</p>
			</article>
		);
	}
}

export default ResultsItem;