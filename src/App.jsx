import './App.css'
import Navbar from './Components/Header/Navbar'
import { Outlet } from 'react-router'


function App() {
  
  return (
  
    <>
      <Navbar/>
      <Outlet/>
    </>
  
  )
}

export default App
