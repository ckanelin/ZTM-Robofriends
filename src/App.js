import React, {Component} from 'react';
import SearchBar from './SearchBar';
import CardList from './CardList';
import {robots} from './robots';

class App extends Component{

	constructor(){
		super();
		this.state = {
			robots: robots,
			searchField: '',
		}
	}

	onSearchChange(event){
		console.log(event.target.value);
	}

	render(){
		return(
			<div className='tc'>
				<h1>Robo Friends</h1>
				<SearchBar searchChange={this.onSearchChange}/>
				<CardList robots={this.state.robots} />
			</div>
		);
	}
}

export default App;