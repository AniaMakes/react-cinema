import React from 'react';

class FilmDetails extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<div className='film-details'
				className={this.props.detailsShown ? 'display-details' : 'hide-details'}
			>
				<p className='film-runtime'> <b>Runtime:</b> {this.props.data.Runtime} </p>
				<p className='film-genre'> <b> Genre:</b> {this.props.data.Genre} </p>
				<p className='film-plot'> {this.props.data.Plot}</p>
			</div>
		)
	}
}



export default FilmDetails;