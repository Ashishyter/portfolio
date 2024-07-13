import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { TbMenuDeep } from "react-icons/tb"
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <nav className='navbar'>
        <img src={logo} alt="ashish" className='logo'/>
        <div className="nav-menu">

            <Link className='menu' activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500}>About</Link>
            <Link className='menu' activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500}>Portfolio</Link>
            <Link className='menu' activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
             
        </div>

        <TbMenuDeep className='menu-icon' onClick={()=>{setShowMenu(!showMenu)}}/>
        <div className="mobile-menu" style={{display : showMenu? 'flex' : 'none'}}>
        
            <Link className='menu m-menu' activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{setShowMenu(false)}}>About</Link>
            <Link className='menu m-menu' activeClass='active' to='portfolio' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{setShowMenu(false)}}>Portfolio</Link>
            <Link className='menu m-menu' activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>{setShowMenu(false)}}>Contact</Link>
             
        </div>
      
    </nav>
  )
}

export default Navbar
