import React from 'react';
import 'tachyons';

const Card = () => {
	return(
		<div className='tc bg-light-pink washed-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={'https://robohash.org/0?200x200'} alt='...'></img>
			<div>
				<h2>Candy Lin</h2>
				<p>lincandy.yite@gmail.com</p>
			</div>
		</div>
	);
}

export default Card;

