import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterApp = () => {
	const [counter, increment, reset] = useCounter();
	return (
		<>
			<h1>Clicks : {counter}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={reset}>Reset</button>
		</>
	);
};
