import { useState } from 'react'
import './App.css'

function App() {
  const [toogle, setToogle] = useState(true);
  const handleToggle = () => {
    setToogle(!toogle);
  };

  return (
  <main 
  style={(toogle) ? {backgroundColor: "#fff", color: "black"} : {backgroundColor: "#000"}}>
    <h2>Theme Switcher</h2>
    {(toogle) 
    ?<p>Light theme</p>
    :<p>Dark theme</p>
    }
    <button onClick={handleToggle}>Toogle Theme</button>
  </main>
  )
}

export default App
