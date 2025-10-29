import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/global.css'
import Sidebar from './components/common/Sidebar'
import Header from './components/common/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Header />
    </>
  )
}

export default App
