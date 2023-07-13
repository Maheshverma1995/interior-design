import React from 'react'
import './Portfolio.css'
// import { Link } from 'react-router-dom'

export const Portfolio = () => {
  return (
    <div>
      {/* Hear is  section-1*/}
      <div className="container-fluid">
        <div className="row section-1  ">

          <div className="col-12">
          <h2>PORTFOLIO.</h2>  
            <div className="col-12">
            <img className='img-fluid' src="./image/img11.jpg" alt="no"  />
            </div>
          </div>
        </div>
        {/* Hear is  section-gallary*/}
        <div className="row gallary">
          <div className="col-sm-6  col-md-4 col-lg-3 gallary-col"><img src="./image/22.webp" alt="" /></div>
          <div className="col-sm-6  col-md-4 col-lg-3 gallary-col"><img src="./image/23.webp" alt="" /></div>
          <div className="col-sm-6  col-md-4 col-lg-3 gallary-col"><img src="./image/24.webp" alt="" /></div>
          <div className="col-sm-6  col-md-4 col-lg-3 gallary-col"><img src="./image/25.webp" alt="" /></div>
          <div className="col-sm-6 gallary-col col-md-4 col-lg-3 "><img src="./image/26.webp" alt="" /></div>
          <div className="col-sm-6 gallary-col col-md-4 col-lg-3 "><img src="./image/27.webp" alt="" /></div>
          <div className="col-sm-6 gallary-col col-md-4 col-lg-3 "><img src="./image/28.webp" alt="" /></div>
          <div className="col-sm-6 gallary-col col-md-4 col-lg-3 "><img src="./image/29.webp" alt="" /></div>
          <div className="col-sm-6 gallary-col col-md-4 col-lg-3 "><img src="./image/30.webp" alt="" /></div>
        </div>
        
      </div>
    </div>
  )
}

