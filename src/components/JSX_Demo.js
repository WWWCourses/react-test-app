function OddEven(props) {
	console.dir(props);
	return props.x%2?<b>Odd</b>:<i>Even</i>
}

function JSX_Demo(props) {
	let userName= 'Ada Byron';
	let x = 6;

	let className = x%2?'red':'blue';

	return <div>
		<div>{userName?userName:'Anonymous'}</div>
		<div>X is: <OddEven x="3"></OddEven> </div>
		<div className={className}>Class test</div>
		<div className="{className}">Class test</div>
		<div className={x%2?'red':'blue'}>Class test</div>
		<ul>
			<li tabIndex="2">Item 1</li>
			<li tabIndex="3">Item 2</li>
			<li tabIndex="1">Item 3</li>
		</ul>
	</div>
}

export default JSX_Demo;
