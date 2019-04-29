import React from "react";
import './SearchField.css';

function SearchField({onInput}) {

	return(
		<div>
			<input className="balloon" 
				onChange={onInput}	
				id="galaxy" 
				type="text" 
				placeholder="Beautiful photo?" 
				/>
				<label for="galaxy">Image</label>
			</div>
	);
}

export default SearchField;