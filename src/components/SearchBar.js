import React from 'react';

const SearchBar = ({searchField, searchChange}) => {
	return(
		<div className='pa3' >
			<input 
				type='Search'
				placeholder='Search'
				className='pa2 ba b--pink br3'
				onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBar;