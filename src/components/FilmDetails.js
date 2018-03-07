import React from 'react';

class FilmDetails extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<div className='film-details'
				style={this.props.detailsShown ? {display: 'block'} : {display: 'none'}}
			>
				<p className='film-runtime'> {this.props.data.Runtime} </p>
				<p className='film-genre'> {this.props.data.Genre} </p>
				<p className='film-plot'> {this.props.data.Plot}</p>
			</div>
		)
	}
}



export default FilmDetails;