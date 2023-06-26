import React from 'react'
import { Footer } from '../Footer/Footer'

export const Studio = () => {
  return (
    <div>
      <div className="container-fluid m-5 ">
        <div className="row ">
          <div className="col">
            <h1>Our Studio.</h1>
            <p>AMU Design Studio is a collection of furniture, lighting, and décor that embodies beauty, harmony, and inspiration. It is created by Rohit Chaudhary to give a glimpse into the elegant life of the AMU Design family. Born with the belief that ‘Design is for everyone’, the studio focuses on residential as well as commercial spaces. AMU Design is known for its attention to detail and longevity, and so the studio was established to cater to our vast and varied clientele all across India.
              AMU Design Studio reflects designs that are sophisticated, elegant yet functional. It resonates with people looking for fine craftsmanship and luxurious designs. “We emphasize on clean lines, texture, & quality and create a space that suits the personality of our clients and fulfill their dreams,” – Rohit Chaudhary, Founder, and Principal Designer.</p>
          </div>
        </div>
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
  )
}

