import './App.css'
import Eighteen from './components/Eighteen'
import Eleven from './components/Eleven'
import Fifteen from './components/Fifteen'
import Fourteen from './components/Fourteen'
import Seven from './components/Seven'
import Seventeen from './components/Seventeen'
import Six from './components/Six'
import Sixteen from './components/Sixteen'
import Ten from './components/Ten'
import Thrteen from './components/Thrteen'
import Twelve from './components/Twelve'

function App() {

  const items = ['Item1', 'Item2', 'Laptop', 'Refrigrator','Another Item','LG TV']
  return (
    <>
      {/* <Six/> */}
      {/* <Seven/> */}
      {/* <Ten/> */}
      {/* <Eleven/> */}
      {/* <Twelve/> */}
      {/* <Thrteen /> */}
      {/* <Fourteen /> */}
      {/* <Fifteen items = {items} /> */}
      {/* <Sixteen items={items} itemsPerPage={2}/> */}
      {/* <Seventeen/> */}
      <Eighteen/>
    </>
  )
}

export default App
