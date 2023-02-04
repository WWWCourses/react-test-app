import React from 'react'

function CounterDetails(props){
	function clilckHandler(e){
		console.dir(e);
	}

	return <div>
		<button onClick={clilckHandler}>Click</button>
		<hr />
		<button onClick={props.incCount}>+</button>
		<div className="output">{props.count}</div>
	</div>
}

function Counter(props) {
	const incCount = e=>{
		count++;
		console.log(`count: ${count}`);
	}

	let count = 1;
	let x = 5;
	return <CounterDetails incCount={incCount} count={count}/>
}

class CounterClassComponent extends React.Component{
	constructor(props){
		super(props)
		this.x = 5;
		this.state = {
			count : 1
		}

		// this.incCount = this.incCount.bind(this)

		console.log(`count @@@@: ${this.state.count}`);
	}
	incCount=(e)=>{
		// this.state.count++;
		// this.setState( {count: this.state.count+1} )
		this.setState( (state, props) => {return {count:state.count+1}} )

		// view current state
		console.log(`count: ${this.state.count}`);

	}
	render(){
		return <CounterDetails incCount={this.incCount} count={this.state.count}/>
	}
}

export {Counter, CounterClassComponent}