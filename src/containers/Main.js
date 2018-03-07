import React from 'react';
import Search from '../components/Search';
import Results from '../components/Results';

class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			resultsDisplayed: false,
		}

		this.getData = this.getData.bind(this);
	}

	getData(searchQuery) {
		console.log(searchQuery);
		console.log(typeof(searchQuery));
		fetch(`http://www.omdbapi.com/?apikey=674ff9&s=${searchQuery}`)
			.then(results => results.json())
			.then(data => {
				this.setState({
					data: data.Search
				})
				console.log(this.state.data);
			})
			.catch(err => console.log(err))
	}

	render(){
		return(
			<div className="main-content">
				<Search receiver={this.getData}/>
				<Results results={this.state.data}/>
			</div>
		)
	}
}

export default Main;