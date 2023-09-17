import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom' /*Site Navigation*/ 

import {styles} from '../styles'
import { navLinks } from '../constants'
import {logo,menu, close} from '../assets'


//window.scrollTo(0,0) is going to scroll to the top of the page (look into syntax deff) 
const Navbar = () => {
const [active, setActive] = useState("")
const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        <Link className="flex items-center gap-2" onClick={() => {setActive(""); window.scrollTo(0,0);}}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'> Joseph &nbsp; <span className='sm:block hidden'>| &nbsp;Clay</span></p>
        </Link>
        

        {/*Render list dynamically*/}
        {/*call .map() method on {navlinks} obj*/}
        <ul className='list-none hidden sm:flex flex-rom gap-10'>
          {navLinks.map((link) => {
            return(
              <li 
              key={link.id} className={`${
                active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] 
                 font-medium cursor-pointer`} onClick= {() => setActive(link.title)}>
                <a href={`#${link.id}`} className=''>{link.title}</a>
              </li>
            )
          })}
          </ul>
        
                
          {/**
         * Mobile Navigation Bar (hamburger for when the viewport is reduced on smaller devices)
         * links will not show on smaller devices, so we will use this div to display menu nav-link selection
        */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/*we want to close it if it currently open(true), and we want to open the toggle if its currently close (false)**/}
          <img src={toggle ? close: menu } alt='menu' className=' w-[28px] h-[28px] object-contain cursor-pointer'
          onClick ={() => setToggle(!toggle)}/>
        </div>
       
        
        {/*When toggle is active we need to show the corresponding nav-links*/}
        {/*The styling and positioning will be different, 
      but we can reuse the (<ul>(line:22)</ul>) as long as we render different elements*/}
        <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute
        top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        
        
        
        {/*toggle (ul) with additonal toggle state*/}
        <ul className='list-none flex  justify-end items-start flex-col gap-4'>
          {/*call .map() method on {links} obj*/}
          {navLinks.map((link) => {
            return(
              <li 
              key={link.id} className={`${
                active === link.title ? "text-white" : "text-secondary"} 
                font-poppins font-medium cursor-pointer text-[15px]`} 
                onClick= {() =>{
                  setToggle(!toggle);
                  setActive(link.title);
                }}>
        
                <a href={`#${link.id}`} className=''>{link.title}</a>
              </li>
            )
          })}
          </ul>

        </div>
      </div>
    </nav>
  )
}
  
export default Navbar

