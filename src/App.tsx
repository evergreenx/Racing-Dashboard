import { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Logo from './image/logo.svg'

import './App.css'
import MainContent from './MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">





      <div className="
hidden lg:block">

        <Sidebar />
        <MainContent />

      </div>


      <div className="block lg:hidden">


        <h2>
          {/* best view on desktop */}

          <div className="flex justify-center items-center w-full h-screen flex-col">
            <div className="">
              <img src={Logo} className="App-logo animate-pulse" alt="logo" width={200} />

              </div>

              <h2 className='text-[#3629B7] font-bold text-xl'>

                Dashboard is optimized for desktop only
              </h2>
          </div>

        </h2>
      </div>

    </div>
  )
}

export default App
