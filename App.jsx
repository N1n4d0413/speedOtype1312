import { useState , useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'


function App() {
  let [darkMode,setDarkMode] = useState(localStorage.getItem("keyword")==="true" ? true : false || false);
  let [best,setBest] = useState(Number(localStorage.getItem("best")) || 0);

  useEffect(()=>localStorage.setItem("keyword",darkMode),[darkMode])
  useEffect(()=>{localStorage.setItem("best",best),[best]});
  function changeTheme()
  {
    setDarkMode((prev)=>!prev);
  }
 
  return (
    <>
      <Navbar darkMode={darkMode} changeTheme={changeTheme} best={best}/>
      <Home darkMode={darkMode} setBest={setBest} best={best}/>
      <footer style={{margin: "20px auto", textAlign: "center"}}> Made with ❤️ by Ninad</footer>
    </>
  )
}

export default App;
