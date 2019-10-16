import React, {Component} from 'react';
import 'tachyons';


class TestComponent extends Component{
	render(){
		return(
			<div className="flex justify-center items-center" >
				<h1 className="absolute f-headline lh-solid avenir pinks">Black Cats</h1>
				<img className="w-100" src={'https://resize.hswstatic.com/w_907/gif/tesla-cat.jpg'} alt='...'></img>
			</div>
		)
	}
}

export default TestComponent;