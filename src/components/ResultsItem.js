import React from 'react';

class ResultsItem extends React.Component{
	render(){
		return(
			<article className='results-item'>
				<img src='http://via.placeholder.com/150x150' />
				<h3 className='item-title'>Title</h3>
				<p className='item-year'>2007</p>
			</article>
		);
	}
}

export default ResultsItem;