import { useState } from "react";

function TodoAdd(props) {
	const [inputValue, setInputValue] = useState("Hi")
	const clickHandler=e=>{
		console.log(`clickHandler called`);
	}

	return <div>
		<input type="text" value={inputValue}/>
		<button onClick={clickHandler}>Add</button>
	</div>
};

export {TodoAdd};