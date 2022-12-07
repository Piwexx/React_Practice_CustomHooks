import { useMemo } from 'react';
import { useMouse } from './useMouse';

export const useBackground = () => {
	const { position } = useMouse();

	const background = useMemo(() => {
		return position.x < window.innerWidth / 2 ? 'orange' : 'pink';
	}, [position]);

	return { position, background };
};
