// import JSX_Demo from "./JSX_Demo";
import TodoList from "./todoList";
import PropsAndState from "./propsAndState";

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


function App(props) {
	return <div>
		<TodoList todos={todos}/>
		<PropsAndState todos={todos}/>

	</div>
}

export default App;
// export {App}

// HTML 5=> <br>
// XML   => <br/>, <pesho/>
// XML   => <br><br/>
