import { useState } from 'react';

export const useCounter = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	const reset = () => {
		setCounter(0);
	};

	return [counter, increment, reset];
};
