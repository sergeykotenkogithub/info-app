import { FC, useState } from 'react'
import styles from './Counter.module.scss'

const Counter: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className={styles.add}>{count}</h1>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        increment
      </button>
    </div>
  )
}

export default Counter
