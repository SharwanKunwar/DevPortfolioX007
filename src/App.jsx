import { useEffect } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import { Outlet } from 'react-router'

function App() {
  useEffect(()=>{
    alert("Open this site in laptop or pc for better experience");
  },[])
  
  return (
  
    <>
      <Navbar/>  
      <Outlet/>
    </>
  
  )
}

export default App
