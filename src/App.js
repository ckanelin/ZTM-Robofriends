import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';

class App extends Component{

	render(){
		return(
			<div>
				<CardList robots = {robots} />
			</div>
		);
	}
}

export default App;