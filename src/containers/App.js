import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import './App.css';

import {setSearchField} from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event => dispatch(setSearchField(event.target.value)))
	}
}

class App extends Component{

	constructor(){
		super()
		this.state = {
			robots: [],
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}))
	}

	render(){

		const {robots} = this.state;
		const {searchField, onSearchChange} = this.props;

		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		if (robots.length === 0){
			return(
				<div className='tc'>
					<h1 className='f1 blue'>Loading...</h1>
				</div>
			);
		}

		return(
			<div className='tc'>
				<h1 className='f1 blue'>Robo Friends</h1>
				<SearchBar searchChange={onSearchChange}/>
				<Scroll>
					<CardList robots={filterRobots} />
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);