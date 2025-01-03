import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>investor Relations</li>
        <li>Jobs</li>
        <li>Terms of us</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preference</li>
        <li>Corporate information</li>
        <li>Contact us</li>
      </ul>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
      </div>
      <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer