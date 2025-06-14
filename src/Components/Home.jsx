// Imports
import LocomotiveScroll from 'locomotive-scroll'
import { useEffect, useRef } from 'react'
import React from 'react'
import {easeInOut, motion} from 'motion/react'
import { ChevronDown } from 'lucide-react';
import { Link } from 'lucide-react';
import About from './About';


// Component
function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true }
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (

    <div ref={scrollRef} data-scroll-container className='relative'>
      {/* Container split in two parts */}
      <div className='w-screen md:flex md:p-20 p-5 gap-10  md:flex-row relative'>

        
        
        {/* Left Box */}
        <div className='md:order-1 order-2 md:w-6/12 md:h-full h-6/10 flex flex-col md:text-start text-center  md:pt-30 pt-20 '>
          <h1 className='md:text-6xl text-6xl font-bold font-sans'>Hi, I'm</h1>
          <h2 className='md:text-6xl text-3xl font-bold font-sans pt-2'>Sharwan Jung Kunwar</h2>
          <br/>
          <h3 className='md:text-4xl text-2xl font-sans'>Full-Stack Developer</h3>
          <br/>
          <p className='text-[18px]'>I build exceptional digital experiences with clean code and modern technologies.</p>
          <br/>
          <section className='w-full flex gap-5 pt-5'>
            <button className='md:px-[40px] px-[45px] py-3 bg-cyan-400 border-1 border-sky-400/30 text-[#231] rounded-sm shadow-md font-bold'>Contact Me</button>
            <button className='md:px-[40px] px-[45px] py-3 bg-cyan-400 border-1 border-sky-400/30 text-[#231] rounded-sm shadow-md font-bold'>View Work</button>
          </section>
        </div>

        {/* Right Box - Styled like a code editor */}
        <div className='md:order-2 order-1 [perspective::1000px] [transform-style:preserve-3d]  md:w-6/12 md:h-full flex justify-center p-3 md:mt-0 mt-10'>
          <motion.div 
          initial={{
            x:300,
            scale:0,
            rotate:100,
            opacity:0
          }}
          animate={{
            x:0,
            scale:1,
            rotate:0,
            opacity:1
          }}
           whileHover={{
        rotateX:20,
        rotateY:20,
        boxShadow: "0px 20px 50px rgba(8,112,184,0.7)"
      }}
      transition={{
        duration: 0.3,
        ease: easeInOut,
      }}
      style={{
        translateZ:1000
      }}
          className='bg-gray-800 md:w-[80%] md:h-[90%] rounded-lg'>
            <div className='w-full h-[20px] flex gap-1 items-center pl-4 py-5'>
              <div className='bg-red-400 w-[15px] h-[15px] rounded-full'></div>
              <div className='bg-green-400 w-[15px] h-[15px] rounded-full'></div>
              <div className='bg-blue-400 w-[15px] h-[15px] rounded-full'></div>
            </div>
            <div>
              <pre className="text-emerald-400 font-mono text-sm overflow-x-auto px-10 py-6">
                <span class="text-blue-400">const</span> <span class="text-yellow-300">developer</span> = {`{\n`}
                  &nbsp;&nbsp;name: <span class="text-green-300">"Sharwan jung kunwar"</span>,{'\n'}
                  &nbsp;&nbsp;title: <span class="text-green-300">"Full-Stack Developer"</span>,{'\n'}
                  &nbsp;&nbsp;skills: [{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">"JavaScript"</span>,{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">"React"</span>,{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">"Tailwindcss"</span>,{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">"Motion"</span>,{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">"PostgreSQL"</span>{'\n'}
                  &nbsp;&nbsp;],{'\n'}
                  &nbsp;&nbsp;contact: <span class="text-green-300">
                  <a href="mailto:sharwankunwar07@gmail.com" class="underline">"sharwankunwar07@gmail.com"</a>
                </span>{'\n'}
                {'};\n\n'}
                <span class="text-blue-400">function</span> <span class="text-yellow-300">createProject</span>(<span class="text-orange-300">idea</span>) {`{\n`}
                  &nbsp;&nbsp;<span class="text-blue-400">return</span> {`{\n`}
                  &nbsp;&nbsp;&nbsp;&nbsp;concept: idea,{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;execution: <span class="text-yellow-300">developer</span>.skills,{'\n'}
                  &nbsp;&nbsp;&nbsp;&nbsp;result: <span class="text-green-300">"Amazing web experience"</span>{'\n'}
                  &nbsp;&nbsp;{'}'}{'\n'}
                {'}'}
              </pre>
            </div>
          </motion.div>
        </div>

        {/* ////////// */}
        <div className='absolute bottom-0  z-10 w-[90%] h-[100px] flex justify-center items-center'>
          <div className='w-[60px] h-[60px] flex justify-center items-center'>
            <a href="about"><ChevronDown size={52} strokeWidth={1} className="text-gray-700 border rounded-full animate-bounce" /></a>
          </div>
        </div>

      
        
      </div>
      <About/>
    </div>
  );
}

export default Home;
