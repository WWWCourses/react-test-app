// import JSX_Demo from "./JSX_Demo";
import TodoList from "./components/todoList";
import PropsAndState from "./components/propsAndState";
import { TodoAdd } from "./components/todoAdd";
// import { Counter,CounterClassComponent } from "./components/counter";
import { CheckboxesDemo } from "./components/checkboxesDemo";

const todos = [
	{
		"title": "Todo 1",
		"completed": false,
		"id": 1
	},
	{
		"title": "Todo 2",
		"completed": true,
		"id": 2
	},
	{
		"title": "Todo 3",
		"completed": false,
		"id": 8
	}
]

function addTodo(title){
	// todos = [...todos, {title:title, completed:false}]
	console.log(`Add Todo is Called: ${title}`);
}

// addTodo();

function App(props) {
	return <div>
		{/* <TodoList todos={todos}/> */}
		{/* <PropsAndState/> */}
		{/* <TodoAdd/> */}
		{/* <CounterClassComponent/> */}
		<CheckboxesDemo/>

	</div>
}

export default App;
// export {App}

// HTML 5=> <br>
// XML   => <br/>, <pesho/>
// XML   => <br><br/>
