import './App.css'
import Navbar from './Components/Header/Navbar'
import { Outlet } from 'react-router'
import LocomotiveScroll from 'locomotive-scroll'
import { useEffect, useRef } from 'react'


function App() {

  const scrollRef = useRef(null);
  
    useEffect(() => {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smartphone:{
          smooth: false
        }
      });
      return () => {
        if (scroll) scroll.destroy();
      };
    }, []);
  
  
  return (
  
    <>
      <Navbar/>
      <div id='main' ref={scrollRef} data-scroll-container className='relative'>
      <Outlet/>
      </div>
    </>
  
  )
}

export default App
