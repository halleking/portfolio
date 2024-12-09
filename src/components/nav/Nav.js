import React from "react";
import { useState } from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
      
       <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active': ''}><AiOutlineHome/></a>
       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><BiUser/></a>
       <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active': ''}><FaLaptopCode/></a>
       <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active': ''}><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default Nav