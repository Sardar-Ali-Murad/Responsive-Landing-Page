import React from 'react'
import P1 from "./img/p1.webp"
import P2 from "./img/p2.jpg"
import P3 from "./img/p3.jpg"
import P4 from "./img/p4.webp"
import P5 from "./img/p5.jpg"

const Reviews = () => {
  return (
    <div className='div-center-80 review-main'>
      <h2 className='text-center'>What they Say</h2>

      <div className='review-grid'>
         <div className='single-review R1'>
            <img className='image-circle' src={P1}/>
            <h4>Susan</h4>
            <p>It was the best compliment that he'd ever received although the person who gave it likely never knew</p>
         </div>
         <div className='single-review R2'>
            <img className='image-circle' src={P2}/>
            <h4>Peter</h4>
            <p>It was the best compliment that he'd ever received although the person who gave it likely never knew</p>
         </div>
         <div className='single-review R3'>
            <img className='image-circle' src={P3}/>
            <h4>John</h4>
            <p>It was the best compliment that he'd ever received although the person who gave it likely never knew</p>
         </div>
         <div className='single-review R4'>
            <img className='image-circle' src={P4}/>
            <h4>Mitchell</h4>
            <p>It was the best compliment that he'd ever received although the person who gave it likely never knew</p>
         </div>
         <div className='single-review R5'>
            <img className='image-circle' src={P5}/>
            <h4>Johnson</h4>
            <p>It was the best compliment that he'd ever received although the person who gave it likely never knew</p>
         </div>
      </div>

    </div>
  )
}

export default Reviews
