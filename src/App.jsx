import { useState } from 'react'
import './App.css'
import Tabs from './components/Tabs/Tabs'
import Gallery from './components/Gallery/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tabs />
      <Gallery />
    </>
  )
}

export default App
