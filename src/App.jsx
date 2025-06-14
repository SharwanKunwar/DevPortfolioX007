import { useEffect } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import { Outlet } from 'react-router'

function App() {
  useEffect(() => {
  const isMobileDevice = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
    navigator.userAgent.toLowerCase()
  );
  const isSmallScreen = window.innerWidth <= 768;

  if (isMobileDevice || isSmallScreen) {
    setTimeout(() => {
      alert("Open this site on a laptop or PC for a better experience.");
    }, 3000);
  }
}, []);

  
  return (
  
    <>
      <Navbar/>  
      <Outlet/>
    </>
  
  )
}

export default App
