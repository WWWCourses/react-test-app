import React from "react";

class LifeCycle extends React.Component{
	constructor(props){
		super(props)
		console.log(`Constructor`);
		this.state = {
			count:1
		}
	}

	componentDidMount(){
		console.log(`componentDidMount`);
	}

	componentDidUpdate(props, state){
		console.log(`componentDidUpdate`);
		console.log(state);
	}

	render(){
		console.log(`Render`);
		return <div>
			<button onClick={(e)=>{
				this.setState((state,_)=>({count: state.count+1}))
			}}>+</button>
			<div>{this.state.count}</div>
		</div>
	}
}

export {LifeCycle}