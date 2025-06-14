import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { easeInOut, motion } from 'motion/react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const MenuList = ['Home', 'About', 'Education', 'Projects', 'Contact'];

  return (
    <div className="sticky top-0 bg-gray-400/30 backdrop-blur-lg w-full md:h-[100px] flex justify-center md:items-center items-start shadow-sm z-40">
      <nav className="bg-white/30 drop-shadow-2xl border-2 border-white/30 md:w-[90%] md:h-[70%] h-[70px] py-10 md:py-0 md:rounded-full flex justify-between items-center shadow-md">

        {/* Logo */}
        <div className="md:w-[10%] w-[20%] h-full flex justify-center items-center">
          <section className="w-full h-full flex justify-start pl-3 items-center">
            <Link to="/">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{ duration: 1, ease: easeInOut }}
                className="md:w-[55px] w-[80%] hover:rotate-360 transition-all duration-300 cursor-pointer"
                src="icons/logo01.png"
                alt="logo"
              />
            </Link>
            <h1 className="pl-1 text-2xl md:block hidden">EV</h1>
          </section>
        </div>

        {/* Desktop Menu */}
        <div className="w-full h-full md:flex justify-end items-center hidden">
          <ul className="flex justify-evenly w-[50%] h-full items-center">
            {MenuList.map((item, index) => {
              const path = '/' + item.toLowerCase();
              const isActive = location.pathname === path || (location.pathname === '/' && item === 'Home');
              return (
                <Link
                  key={index}
                  to={path}
                  className={`px-3 py-1 transition duration-300 ${
                    isActive
                      ? 'text-white text-[18px]'
                      : 'text-black text-[18px] hover:border-b border-black/30'
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </ul>
        </div>

        {/* Desktop Social Icons + Mobile Menu Button */}
        <div className="md:w-[25%] w-[20%] h-full flex justify-center items-center">
          <section className="hidden w-full h-full md:flex justify-center items-center gap-5 text-white">
            <a className="hover:border-b py-2 cursor-pointer" href="#facebook" aria-label="Facebook"><FaFacebook size={23} color="#1877F2" /></a>
            <a className="hover:border-b py-2 cursor-pointer" href="#instagram" aria-label="Instagram"><FaInstagram size={23} color="#E1306C" /></a>
            <a className="hover:border-b py-2 cursor-pointer" href="#github" aria-label="GitHub"><FaGithub size={23} color="#333" /></a>
          </section>
          <section className="md:hidden pr-2 w-full h-full flex justify-center items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={30} /> : <Menu size={40} />}
            </button>
          </section>
        </div>
      </nav>

      {/* Mobile Menu Popup */}
      {isOpen && (
        <div
          className="bg-black/30 backdrop-blur-sm fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ease: easeInOut }}
            className="bg-white w-6/7 h-6/10 flex flex-col gap-1 rounded-lg shadow-lg"
          >
            <div className="bg-gray-50 w-full h-[20%] flex justify-between items-center px-5 border-b border-black/30">
              <h1 className="font-bold text-2xl">Menu</h1>
              <button onClick={() => setIsOpen(false)}><X size={30} /></button>
            </div>

            <div className="w-full h-full">
              <ul className="flex flex-col gap-1 text-[20px] w-full h-full items-center border-b border-black/30 py-5">
                {MenuList.map((item, index) => {
                  const path = '/' + item.toLowerCase();
                  const isActive = location.pathname === path || (location.pathname === '/' && item === 'Home');
                  return (
                    <Link
                      key={index}
                      to={path}
                      className={`px-[30%] py-3 rounded-sm transition ${
                        isActive ? 'bg-blue-500 text-white' : 'text-black hover:bg-gray-200'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div className="w-full h-[15%] flex justify-center items-center gap-10">
              <a href="#facebook" aria-label="Facebook"><FaFacebook size={25} color="#1877F2" /></a>
              <a href="#instagram" aria-label="Instagram"><FaInstagram size={25} color="#E1306C" /></a>
              <a href="#github" aria-label="GitHub"><FaGithub size={25} color="#333" /></a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
