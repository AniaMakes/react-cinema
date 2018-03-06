import React from 'react';

class Search extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		console.log(this.state);
		event.preventDefault();
		const searchQuery = this.state;
		this.props.receiver(searchQuery);
	}


	render(){
		return(
			<form 	
				className='search-form'
				onSubmit={this.handleSubmit}
			>
				<label htmlFor='search-input'>Search By Name</label>
				<input 
					onChange={this.handleChange}
					value={this.state.value}
					type='text' 
					id='search-input'
					className='search-input'
					name='search-input' 
				/>
				<button className='submit-btn' type='submit'>
					Find
				</button>
			</form>
		);
	}
}

export default Search;