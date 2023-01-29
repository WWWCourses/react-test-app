
// [
// 	<li>{todo.title}</li> ,
// 	<li>{todo.title}</li> ,
// 	<li>{todo.title}</li>
// ]

function TodoListLongAndUgly({todos}) {
	// const todo = todos[0];
	let todoElements = [];
	todos.forEach(todo=>{
		todoElements.push( <li>{todo.title}</li> )
	})

	console.dir(todoElements);

	return <ul>
		{todoElements}
	</ul>
}

function TodoList({todos}) {
	let arr = todos.map(todo=><TodoItem key={todo.id} todo={todo} className="red-border"></TodoItem>)
	console.dir(arr);
	return <ul>
		{arr}
	</ul>
}


function TodoItem(props){
	let todo = props.todo;
	return <li className={props.className} data-id={todo.id}>{todo.id}.
	{todo.title} <span>X</span></li>
}

export default TodoList;