import React from 'react'
import { Footer } from '../Footer/Footer'
import './Portfolio.css'
// import { Link } from 'react-router-dom'

export const Portfolio = () => {
  return (
    <div>
      {/* Hear is  section-1*/}
      <div className="container-fluid mt-5 mb-5 ">
        <div className="row section-1  ">

          <div className="col">
            <h1>PORTFOLIO.</h1>
            <div className="col">
            <img src="./image/img8.jpg" alt="no" />
            </div>
          </div>
        </div>
        {/* Hear is  section-gallary*/}
        <div class="row gallary">
          <div class="col-sm-6  col-md-4 col-lg-3 gallary-col"><img src="./image/Asset-1@3x-3-900x771.webp" alt="" /></div>
          <div class="col-sm-6 gallary-col col-md-4 col-lg-3 "><img src="./image/Asset-1@3x-3-900x771.webp" alt="" /></div>
          <div class="col-sm-6 gallary-col col-md-4 col-lg-3 "><img src="./image/Asset-1@3x-3-900x771.webp" alt="" /></div>
          <div class="col-sm-6 gallary-col col-md-4 col-lg-3 "><img src="./image/Asset-1@3x-3-900x771.webp" alt="" /></div>
          <div class="col-sm-6 gallary-col col-md-4 col-lg-3 "><img src="./image/Asset-1@3x-3-900x771.webp" alt="" /></div>
          <div class="col-sm-6 gallary-col col-md-4 col-lg-3 "><img src="./image/Asset-1@3x-3-900x771.webp" alt="" /></div>
        </div>
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className='col'>
                <Footer />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

