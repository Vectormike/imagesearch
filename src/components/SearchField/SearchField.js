import React from "react";

function SearchField({onInput, onButtonSubmit}) {

	return(
		<div>
			<input
				type='Search'
				placeholder='Search for that beautiful photo'
				onChange={onInput}
			/>
			<button
				onClick={onButtonSubmit}
				type="submit">Click
			</button>
		</div>
	);
}

export default SearchField;