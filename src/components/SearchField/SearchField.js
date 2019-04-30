import React from "react";
import './SearchField.css';

function SearchField({onInput, onPress}) {

	return(
		<div className="search-block">
			<input  
				onChange={onInput}
				onKeyPress={onPress}
				type="search" 
				placeholder="Beautiful photo?" 
				/>
			<div className="icon"></div>
		</div>
	);
}

export default SearchField;