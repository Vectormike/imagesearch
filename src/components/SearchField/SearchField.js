import React from "react";

function SearchField() {

	const [term, setTerm] = useState('');

	// Function to setTerm when user inputs
	function onInput(e){
		setTerm(e.target.value)
		console.log(term)
	}
  
	return(
		<div>
			<input 
				type='Search'
				placeholder='Search for that beautiful photo'
				onChange={onInput}
			/>
			<button type="submit">Click</button>
		</div>
	);
}

export default SearchField;