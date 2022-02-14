import { useState } from 'react'
import logo from './logo.svg'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

import './App.css'
import MainContent from './MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">



      <Sidebar />

      <MainContent />

    </div>
  )
}

export default App
