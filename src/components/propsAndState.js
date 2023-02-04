import React from "react";

function Parent(props) {
	return <div>
		<Child id="1" tmp="TMP">Hello</Child>
	</div>
}

function Child({id}) {
	// console.dir(props);
	return <div>I'm the child with id: {id}</div>
}

class ChildAsClass extends React.Component{
	constructor(props){
		super(props)
		this.id = props.id
	}
	render(){
		return <div>I'm the child with id: {this.id}</div>
	}
}

export default function PropsAndState(props) {
	return <Parent/>
}