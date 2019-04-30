import React from "react";
import './SearchField.css';

function SearchField({onInput}) {

	return(
		<div className="search-block">
			<input  
				onChange={onInput}
				type="search" 
				placeholder="Beautiful photo?" 
				/>
			<div className="icon"></div>
		</div>
	);
}

export default SearchField;