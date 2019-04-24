import React from "react";

function SearchField({onInput, onButtonSubmit}) {

	

	
	function onFormSubmit(e) {
		e.preventDefault();
	}

	return(
		<div>
			<form onSubmit={onFormSubmit}>
				<input 
					type='Search'
					placeholder='Search for that beautiful photo'
					onChange={onInput}
				/>
				<button 
					onClick={onButtonSubmit} 
					type="submit">Click
				</button>
			</form>
		</div>
	);
}

export default SearchField;