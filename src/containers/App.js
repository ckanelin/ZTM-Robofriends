import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import './App.css';

import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event => dispatch(setSearchField(event.target.value))),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component{


	componentDidMount(){
		this.props.onRequestRobots();
	}

	render(){
		const {searchField, onSearchChange, robots, isPending} = this.props;

		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		if (isPending === true){
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