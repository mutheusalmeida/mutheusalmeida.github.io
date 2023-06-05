import { useState } from 'react'

export const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
  )
}
