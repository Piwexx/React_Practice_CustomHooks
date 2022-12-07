import React from 'react';
import { useBackground } from '../../hooks/useBackground';

export const MouseApp = () => {
	const { position, background } = useBackground();
	return (
		<>
			<div style={{ background, height: '100vh' }}>
				<pre>{JSON.stringify(position)}</pre>
			</div>
		</>
	);
};
