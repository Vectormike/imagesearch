import React from "react";
import './SearchField.css';

function SearchField({onInput}) {

	return(
		<div>
			<span>
				<input className="balloon" 
					onChange={onInput}	
					id="galaxy" 
					type="text" 
					placeholder="Beautiful photo?" 
					/>
					<label for="galaxy">Image</label>
				</span>
			
			</div>
	);
}

export default SearchField;