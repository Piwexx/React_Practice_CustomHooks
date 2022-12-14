import { useEffect, useState } from 'react';

const initialPosition = { x: null, y: null };

export const useMouse = () => {
	const [position, setPosition] = useState(initialPosition);

	useEffect(() => {
		const handleMouseMove = e => {
			const { clientX, clientY } = e;
			setPosition({
				x: clientX,
				y: clientY,
			});
		};
		// Hay que remover este evento
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	return { position };
};
