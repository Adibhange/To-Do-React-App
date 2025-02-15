import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, addTodo, editTodo, deleteTodo, toggleComplete }) => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputValue.trim()) return; // If input is empty, do not add todo
		addTodo(inputValue.trim()); // Add todo to the list and remove empty spaces if there are any
		setInputValue("");
	};

	return (
		<div className='w-96 bg-white p-6 shadow-md rounded-lg'>
			<form
				onSubmit={handleSubmit}
				className='flex mb-4 space-x-1'>
				<input
					type='text'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder='Add new task...'
					className='grow p-2 border rounded-lg focus:outline-blue-500'
				/>
				<button
					type='submit'
					className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
					Add
				</button>
			</form>
			<ul>
				{todos.map((todo) => (
					<ToDoItem
						key={todo.id}
						todo={todo}
						deleteTodo={deleteTodo}
						toggleComplete={toggleComplete}
						editTodo={editTodo}
					/>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;
