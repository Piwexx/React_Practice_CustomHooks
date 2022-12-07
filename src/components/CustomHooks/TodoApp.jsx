import React from 'react';
import { useTodo } from '../../hooks/useTodo';

const initialTodo = [
	{ id: 1, title: 'Learn react' },
	{ id: 2, title: 'Learn Js' },
];
export const TodoApp = () => {
	const [todos, addTodo, deleteTodo] = useTodo(initialTodo);
	return (
		<>
			<div>
				<button
					onClick={() => {
						addTodo({ title: 'Nueva Tarea' });
					}}>
					Add Task
				</button>
				<ul>
					{todos.map(todo => (
						<li key={todo.id}>
							{todo.title}
							<button
								onClick={() => {
									deleteTodo(todo.id);
								}}>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
