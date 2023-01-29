// function foo({id}) {
// 	console.log(id);
// }
// foo( {id:1, tmp:'TMP'} );


// let obj = {id:1, tmp:'TMP'};

// let id,tmp;
// {id, tmp} = {obj}
// console.log(id);
// console.log(tmp);


function bar(x) {
	return x**2
}

function foo() {
	return bar(1),bar(2)
}
console.log( foo() );

