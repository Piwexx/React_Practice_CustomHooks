import { CounterApp } from './components/CustomHooks/CounterApp';
import { MouseApp } from './components/CustomHooks/MouseApp';
import { TodoApp } from './components/CustomHooks/TodoApp';

function App() {
	return (
		<>
			<h1>App</h1>
			{/* <CounterApp /> */}
			{/* <TodoApp /> */}
			<MouseApp />
		</>
	);
}

export default App;
