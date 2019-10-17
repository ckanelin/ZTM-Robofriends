import React, {Component} from 'react';
import SearchBar from './SearchBar';
import CardList from './CardList';
import {robots} from './robots';

class App extends Component{

	render(){
		return(
			<div className='tc'>
				<h1>Robo Friends</h1>
				<SearchBar />
				<CardList robots = {robots} />
			</div>
		);
	}
}

export default App;