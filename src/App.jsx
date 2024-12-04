import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
	const [todos, setTodos] = useState([]);

	// Function to add a new todo
	const addTodo = (text) => {
		setTodos([...todos, { id: Date.now(), text, completed: false }]);
	};

	// Function to edit a todo
	const editTodo = (id, newText) => {
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
		);
	};

	// Function to delete a todo
	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	// Function for toggle complete status of a todo
	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	return (
		<div className='min-h-screen bg-slate-100 flex flex-col items-center'>
			<Header />
			<ToDoList
				todos={todos}
				addTodo={addTodo}
				editTodo={editTodo}
				deleteTodo={deleteTodo}
				toggleComplete={toggleComplete}
			/>
		</div>
	);
}

export default App;
