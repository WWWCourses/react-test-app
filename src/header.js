import React from 'react';

// Function Declaration Syntax
// function Header(props) {
// 	return 	<header>
// 				<h1>{props.appTitle}</h1>
// 			</header>
// }

// Arrow Function Syntax
// const Header = props=>{
// 	console.dir(props.appTitle);
// 	return (
// 		<header>
// 			<h1>{props.appTitle}</h1>
// 		</header>
// 	);
// }
class Header extends React.Component{
	constructor(props){
		super(props)
		this.props = props
	}
	render(){
		return <header>
				<h1>{this.props.appTitle}</h1>
			</header>
	}
}


export default Header;