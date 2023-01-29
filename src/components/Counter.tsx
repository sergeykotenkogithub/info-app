import { FC, useState } from 'react'
import './Counter.module.scss'

const Counter: FC = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>increment</button>
		</div>
	)
}

export default Counter
