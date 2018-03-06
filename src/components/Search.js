import React from 'react';

class Search extends React.Component{
	render(){
		return(
			<form className='search-form'>
				<label htmlFor='search-input'>Search By Name</label>
				<input 
					type='text' 
					id='search-input'
					className='search-input'
					name='search-input' 
				/>
				<button className='submit-btn'>Find</button>
			</form>
		);
	}
}

export default Search;