import { useEffect } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import { Outlet } from 'react-router'

function App() {
  useEffect(()=>{
    setTimeout(()=>{
      alert("Open this site in laptop or pc for better experience");
    },3000);
  },[])
  
  return (
  
    <>
      <Navbar/>  
      <Outlet/>
    </>
  
  )
}

export default App
