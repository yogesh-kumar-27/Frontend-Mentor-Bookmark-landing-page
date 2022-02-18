import React, { useEffect } from 'react'
import logo from '../assets/images/logo-bookmark.svg'
const Header = () => {

    const toggleMenu = () => {
        let navbar = document.querySelector(".header .navbar");

        let menu = document.querySelector("#menu-btn");
    
        menu.onclick = () => {
          menu.classList.toggle("fa-times");
          navbar.classList.toggle("active");
        };
    
        window.onscroll = () => {
          menu.classList.remove("fa-times");
          navbar.classList.remove("active");
        };
    }

    useEffect(() => {
      toggleMenu();
      return () => {
        toggleMenu();
      }
    }, [])
    
  return (
   <header className="header">
       <img src={logo} alt="logo" />
    <nav className='navbar'>
        <a href="#features">features</a>
        <a href="#pricing">pricing</a>
        <a href="#contact">contact</a>
        <a id='show' href="#login">login</a>
        <a id='hide' href="#login">login</a>
    </nav>
    <div id="menu-btn" className="fas fa-bars"></div>
   </header>
  )
}

export default Header