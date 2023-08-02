import React, { createContext } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../Images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import '../CSS/Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';



function Navbar() {



  const [active, setActive] = useState(false)

  return (
    <div>
    <div className='Navbar'>
      <div className='Logo'>
        <img src={Logo}></img>
      </div>
      <div className='Right'>
        <div className='Text'>
            <Link to="#home">Home</Link>
            <Link to="#skills">Skills</Link>
            <Link to="#projects">Projects</Link>
            <Link to="#contact">Contact</Link>
        </div>
        <div className='Icons'> 
        <a href='https://www.instagram.com/'><InstagramIcon className='Icon'></InstagramIcon></a>
        <a href='https://cs-cz.facebook.com/'><FacebookIcon className='Icon'></FacebookIcon></a>
        <a href='https://twitter.com/?lang=cs'><TwitterIcon className='Icon'></TwitterIcon></a>
        </div>
        
      </div>
      <div className='menuIcon'>
      <MenuIcon className="menu" onClick={() => (setActive(!active))}/>
      </div>
      
    </div>
    <div className='PreDropDown'>
    <div className={active == true ? 'dropDownMenuActive' : 'dropDownMenu'}>
          <div className='Text'>
              <Link to="#home">Home</Link>
              <Link to="#skills">Skills</Link>
              <Link to="#projects">Projects</Link>
              <Link to="#contact">Contact</Link>
          </div>
          <div className='Icons'> 
            <a href='https://www.instagram.com/'><InstagramIcon className='Icon'></InstagramIcon></a>
            <a href='https://cs-cz.facebook.com/'><FacebookIcon className='Icon'></FacebookIcon></a>
            <a href='https://twitter.com/?lang=cs'><TwitterIcon className='Icon'></TwitterIcon></a>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
