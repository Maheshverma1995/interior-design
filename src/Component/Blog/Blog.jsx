import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'
export const Blog = () => {
  return (
    <div>
      {/* Hear is  section-1*/}
      <div className="container-fluid m-5 ">
        <div className="row section-1 ">
          <div className="col">
            <h1>BLOG.</h1>
            <div className="col">
            <img src="./image/img10.jpg" alt="no" />
            </div>
          </div>
        </div>
      </div>
      {/* Hear is  section-2*/}
      < section >
        <div className="container-fluid">
          <div className="row">
            <h1>Our Blogs</h1>
            <div className="col-sm-6  col-md-4 col-lg-4 p-5 " id='section5-col1-image'>
              <img src="./image/49.webp" alt="no" />
              <span>Blog, Interior design</span>
              <h5>6 Inspiring Interior Design Trends 2023</h5>
              <p>They say Change is the only thing constant. This is especially true in the world…</p>
              <Link to="">View more</Link>
            </div>
            <div className="col-sm-6  col-md-4 col-lg-4 p-5 " id='section5-col1-image'>
              <img src="./image/img12.jpg" alt="no" />
              <span>Blog, Interior design</span>
              <h5>6 Inspiring Interior Design Trends 2023</h5>
              <p>They say Change is the only thing constant. This is especially true in the world…</p>
              <Link to="">View more</Link>
            </div>
            <div className="col-sm-6  col-md-4 col-lg-4 p-5" id='section5-col1-image'>
              <img src="./image/img13.jpg" alt="no" />
              <span>Blog, Interior design</span>
              <h5>6 Inspiring Interior Design Trends 2023</h5>
              <p>They say Change is the only thing constant. This is especially true in the world…</p>
              <Link to="">View more</Link>
            </div>
            <div className="col-sm-6  col-md-4 col-lg-4 p-5 " id='section5-col1-image'>
              <img src="./image/img14.jpg" alt="no" />
              <span>Blog, Interior design</span>
              <h5>6 Inspiring Interior Design Trends 2023</h5>
              <p>They say Change is the only thing constant. This is especially true in the world…</p>
              <Link to="">View more</Link>
            </div>
            <div className="col-sm-6  col-md-4 col-lg-4 p-5 " id='section5-col1-image'>
              <img src="./image/50.webp" alt="no" />
              <span>Blog, Interior design</span>
              <h5>6 Inspiring Interior Design Trends 2023</h5>
              <p>They say Change is the only thing constant. This is especially true in the world…</p>
              <Link to="">View more</Link>
            </div>
            <div className="col-sm-6  col-md-4 col-lg-4 p-5" id='section5-col1-image'>
              <img src="./image/51.webp" alt="no" />
              <span>Blog, Interior design</span>
              <h5>6 Inspiring Interior Design Trends 2023</h5>
              <p>They say Change is the only thing constant. This is especially true in the world…</p>
              <Link to="">View more</Link>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  )
}
