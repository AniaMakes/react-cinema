import React from 'react';
import FilmDetails from './FilmDetails';

class ResultsItem extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			filmData: '',
			detailsShown: false
		}

		this.getMoreData = this.getMoreData.bind(this);
		this.checkDetailsShown = this.checkDetailsShown.bind(this);
	}

	checkDetailsShown(event) {
		if (!this.state.filmData) {
			this.getMoreData(this.props.imdbID);
		} else {
			if (this.state.detailsShown) {
					this.setState({detailsShown: false})
				}
				else{
					this.setState({detailsShown: true})
				}
		}

	}

	getMoreData(imdbid) {
		fetch('http://www.omdbapi.com/?apikey=674ff9&i=' + imdbid)
		.then(results => results.json())
		.then(data => {
			this.setState({
				filmData: data,
				detailsShown: true
			})
		})
		.catch(err => console.log(err))
		
	}

	render(){


		const {title, imdbID, year, posterURL} = this.props;

		return(
			<article className='results-item' id={imdbID}>
				<div className='results-wrapper'>
					<img className='item-poster' src={posterURL} />
					<div className='item-info-wrapper'>
						<h3 className='item-title'>{title}</h3>
						<p className='item-year'>{year}</p>
						</div>
					<button
						onClick={this.checkDetailsShown}
					> More </button> 
				</div>
				<FilmDetails detailsShown={this.state.detailsShown} data={this.state.filmData}/>
			</article>
		);
	}
}

export default ResultsItem;