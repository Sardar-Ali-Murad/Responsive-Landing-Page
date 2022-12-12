import React from 'react'
import Img1 from "./img/8.png"
import Img2 from "./img/2.png"
import Img3 from "./img/5.png"

const BringEveryOne = () => {
  return (
    <div className='bring-main div-center-80 grid-even-2 bring-main'>
        <div className='bring-content'>
          <h1>Bring everyone together to make  better projects</h1>
          <p>MaryLou wore the tiara with pride. There was something that made doing anything she didn't really want to do a bit easier when she wore it.</p>
          <button className='header-btn'>Gets Started</button>
        </div>

        <div className='bring-images'>
            <img className='Img1' src={Img1}/>
            <img className='Img2' src={Img2}/>
            <img className='Img3' src={Img3}/>
        </div>
    </div>
  )
}

export default BringEveryOne
