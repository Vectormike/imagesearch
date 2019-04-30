import React from "react";
import './SearchField.css';

function SearchField({onPress}) {

	return(
		<div className="search-block">
			<input  
				onKeyPress={onPress}
				type="search" 
				placeholder="Beautiful photo?" 
				/>
			<div className="icon"></div>
		</div>
	);
}

export default SearchField;