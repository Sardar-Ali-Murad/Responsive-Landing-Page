import React from 'react'
import Logo from "./logo.png"
import {AiOutlineFacebook} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {CiLinkedin}  from "react-icons/ci"
import {CiTwitter} from "react-icons/ci"
const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-front'>
         <h2>Simply how our team works</h2>
         <button className='header-btn footer-btn dark'>Explore</button>
      </div>

      <div className='footer-bottom'>

        <div className='p1'>
          <img className='footer-logo' src={Logo} style={{width:"60px"}}/>
          <div className='icons-main'>
            <AiOutlineFacebook className='icons'/>
            <BsGithub className='icons'/>
            <BsInstagram className='icons'/>
            <CiLinkedin className='icons'/>
            <CiTwitter className='icons'/>
          </div>
        </div>

        <div className='p2'>
            <h5>Home</h5>
            <h5>About</h5>
            <h5>Contact</h5>
            <h5>Manage</h5>
            <h5>Blogs</h5>
        </div>


        <div className='p3'>
            <h5>Pricing</h5>
            <h5>Pro</h5>
            <h5>Seek</h5>
        </div>

        <div className='p4'>
            <div style={{display:"flex"}}>
              <input className='footer-input light' placeholder='Search Here' />
              <button className='header-btn'>See</button>
            </div>
            <p className='right'>All Copy Right Reserved</p>
        </div>


      </div>
    </div>
  )
}

export default Footer
