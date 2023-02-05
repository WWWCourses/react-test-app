import React from 'react';

class Item extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			checked: false
		}
		this.itemRef = React.createRef();
	}
	render(){
		return <div
				// beter to do it with state...
				onClick={(e)=>{this.itemRef.current.checked=!this.itemRef.current.checked}}>

				<input
				className="item"
				type="checkbox"
				ref={this.itemRef}
				/>
			{this.props.itemText}
		</div>
	}

}

class FormsDemo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items : ['Item 1', 'Item 2', 'Item 3'],
			userNameValue:'',
			outputValue:'',
		}
		this.itemRef = React.createRef();
	}

	clickHandler(e){
		console.log(e.target);
		console.log(e.currentTarget);
	}

	render(){
		let key = 1;
		// let outputValue = "";

		return <div>
			<div>user name:
				<input
				autoFocus={true}
				type="text"
				id="userName"
				value={this.state.userNameValue}
				onChange={(e)=>{this.setState({userNameValue: e.target.value})}}
				/>
			</div>
			<button onClick={(e)=>this.setState({outputValue:this.state.userNameValue}) }>Get</button>
			<div className="output">Name: {this.state.outputValue}</div>

			<hr />
			{this.state.items.map(
				el=><Item key={key++} itemText={el}/>
			)}
		</div>
	}
}

export {FormsDemo};