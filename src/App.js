import React, {Component} from 'react';
import SearchBar from './SearchBar';
import CardList from './CardList';
import {robots} from './robots';
import './App.css';

class App extends Component{

	constructor(){
		super()
		this.state = {
			robots: robots,
			searchField: '',
		}
	}

	onSearchChange = (event) =>{
		
		this.setState({searchField: event.target.value})
	}

	render(){

		const filterRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})


		return(
			<div className='tc'>
				<h1 className='f1 blue'>Robo Friends</h1>
				<SearchBar searchChange={this.onSearchChange}/>
				<CardList robots={filterRobots} />
			</div>
		);
	}
}

export default App;