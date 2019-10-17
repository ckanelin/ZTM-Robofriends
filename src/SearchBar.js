import React from 'react';

const SearchBar = ({searchField, searchChange}) => {
	return(
		<div className='pa2' >
			<input 
				type='Search'
				placeholder='Search'
				className='pa3 ba b--pink br3'
				onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBar;