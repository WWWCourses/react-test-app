import { useState } from 'react';

function CheckboxesDemo(props) {
	const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

	return <div>
		{items.map(el=><Item key={Math.random()} itemText={el}/>
	)}
	</div>
}

function Item(props){
	const [checked, setChecked] = useState(false)

	return <div onClick={(e)=>setChecked(!checked)}>
			<input
			className="item"
			type="checkbox"
			checked={checked}
			onChange={(e)=>setChecked(!checked)}
			/>
		{props.itemText}
	</div>
}

export {CheckboxesDemo}