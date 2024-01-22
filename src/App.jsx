import { useState } from 'react'
import Ticket from "./Ticket.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ticket />
    </>
  )
}

export default App
