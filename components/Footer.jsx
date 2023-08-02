import React from 'react'
import '../CSS/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'
import Logo from '../Images/logo.svg'

function Footer() {
  return (
    <div className='footerContainer'>
      <img src={Logo}></img>
      <div className='Icons'>
        <a href='https://www.instagram.com/'><InstagramIcon className='Icon'></InstagramIcon></a>
        <a href='https://cs-cz.facebook.com/'><FacebookIcon className='Icon'></FacebookIcon></a>
        <a href='https://twitter.com/?lang=cs'><TwitterIcon className='Icon'></TwitterIcon></a>
      </div>
    </div>
  )
}

export default Footer
