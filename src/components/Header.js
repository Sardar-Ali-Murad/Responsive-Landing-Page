import React from 'react'
import Logo from "./logo.png"
import "./index.css"
import {GiCrossMark} from "react-icons/gi"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose}  from "react-icons/ai"

const Header = () => {
    let [ham,setHam]=React.useState(true)
  return (

    <div>

    <div className='header-main'>
        <div className='image'>
          <img src={Logo}/>
        </div>

        <nav>
           <ul>
               <li><a className='links'>Pricing</a></li>
               <li><a className='links'>Product</a></li>
               <li><a className='links'>About Us</a></li>
               <li><a className='links'>Contact</a></li>
               <li><a className='links'>Community</a></li>
           </ul>
        </nav>

        <button className='header-btn front-btn'>Gets Started</button>
        
        {!ham?
            <GiCrossMark className='cross' onClick={()=>setHam(true)}/>:
             <GiHamburgerMenu className='ham' onClick={()=>setHam(false)}/>
            }

    </div>

    {/* Small Screen Navbar */}
     <div className={`smal-screen-nav ${!ham?"small-screen-nav-active":""}`}>
      <AiOutlineClose onClick={()=>setHam(true)} className='small-screen-close'/>
     <nav>
           <ul>
               <li><a className='links' onClick={()=>setHam(true)}>Pricing</a></li>
               <li><a className='links' onClick={()=>setHam(true)}>Product</a></li>
               <li><a className='links' onClick={()=>setHam(true)}>About Us</a></li>
               <li><a className='links' onClick={()=>setHam(true)}>Contact</a></li>
               <li><a className='links' onClick={()=>setHam(true)}>Community</a></li>
           </ul>
        </nav>

     </div>
       
    </div>
  )
}

export default Header
