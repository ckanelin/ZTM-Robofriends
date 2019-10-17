import React from 'react';

const Card = ({id, name, email}) => {
	return(
		<div className='tc bg-light-pink washed-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`} alt='...'></img>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;

