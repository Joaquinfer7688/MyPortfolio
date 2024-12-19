import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src='/logo2.png' alt="Logo" className='logo'/>
    <div className='desktop'>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Technologies</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
    </div>
    <button className='desktopbutton' onClick={() => window.scrollTo({ top: document.getElementById("contact").offsetTop - 70, behavior: 'smooth' })}>
  <img src='' alt='' className='desktopimg' /> Contact Me
</button>

    </nav>
  )
}

export default Navbar