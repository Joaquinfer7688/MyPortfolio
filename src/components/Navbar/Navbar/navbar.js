import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src='/logo.png' alt="Logo" className='logo'/>
    <div className='desktop'>
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Techical Tools</Link>
        <Link className='desktopMenuListItem'>Portfolio</Link>
    </div>
    <button className='desktopbutton'>
        <img src='' alt='' className='desktopimg' /> Contact Me</button>
    </nav>
  )
}

export default Navbar