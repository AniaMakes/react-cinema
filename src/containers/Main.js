import React from 'react';
import Search from '../components/Search';
import Results from '../components/Results';

class Main extends React.Component{
	constructor(props) {
		super(props);

		this.getData = this.getData.bind(this);
	}

	getData(searchQuery) {
		fetch('http://www.omdbapi.com/?apikey=674ff9&s=day')
			.then(results => results.json())
			.then(data => console.log(data))
			.catch(err => console.log(err))
	}

	render(){
		return(
			<div>
				<Search receiver={this.getData}/>
				<Results />
			</div>
		)
	}
}

export default Main;