import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const ToDoItem = ({ todo, editTodo, deleteTodo, toggleComplete }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(todo.text);

	const handleEdit = () => {
		editTodo(todo.id, editText);
		setIsEditing(false);
	};

	return (
		<>
			<li className='flex justify-between items-center mb-2 p-2 border rounded-lg'>
				{isEditing ? (
					<input
						type='text'
						value={editText}
						onChange={(e) => setEditText(e.target.value)}
						className='grow p-1 border rounded-lg focus:outline-hidden'
					/>
				) : (
					<span
						className={`grow cursor-pointer ${
							todo.completed ? "line-through text-gray-500" : ""
						}`}
						onClick={() => toggleComplete(todo.id)}>
						{todo.text}
					</span>
				)}

				<div className='flex space-x-2'>
					{isEditing ? (
						<button
							onClick={handleEdit}
							className='bg-green-500 text-white px-2 py-1 rounded-sm'>
							Save
						</button>
					) : (
						<button
							onClick={() => setIsEditing(true)}
							className='bg-yellow-500 text-white px-2 py-1 rounded-sm'>
							Edit
						</button>
					)}
					<button
						onClick={() => deleteTodo(todo.id)}
						className='bg-red-500 text-white px-2 py-1 rounded-sm'>
						<FaTrash />
					</button>
				</div>
			</li>
		</>
	);
};

export default ToDoItem;
