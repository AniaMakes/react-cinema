import React from 'react';
import Search from '../components/Search';
import Results from '../components/Results';

class Main extends React.Component{
	render(){
		return(
			<div>
				<Search />
				<Results />
			</div>
		)
	}
}

export default Main;