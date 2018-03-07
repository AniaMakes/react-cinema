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
				<p> {this.props.data.Runtime} </p>
				<p> {this.props.data.Genre} </p>
				<p> {this.props.data.Plot}</p>
			</div>
		)
	}
}



export default FilmDetails;