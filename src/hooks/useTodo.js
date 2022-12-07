import { useState } from 'react';

export const useTodo = initialTodo => {
	const [todos, setTodos] = useState(initialTodo);
	const addTodo = newTodo => {
		setTodos([...todos, { id: Date.now(), ...newTodo }]);
	};

	const deleteTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	return [todos, addTodo, deleteTodo];
};
