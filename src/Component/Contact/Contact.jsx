
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import './/Contact.css'

export const Contact = () => {
  return (
    <div> {/* Start to first section  */}
      <section id='section1'>
        <div class="container-fluid ">
          <div class="row  ">
            <div class="col-md-6 col-sm-12 ">
              <div>
                <h1>Contact us!</h1>
                <p>Any questions or suggestions?<br />
                Write us a message and we will contact you!</p>
              </div>
            </div>
            <div class="col-md-6">
              <div className='Image1'>
                <img src="./image/contact.jpg" alt="no" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End to first section  */}
      {/* Start to Sec section  */}
      <section id='section2'>
        <div class="container-fluid  "id='section2-row'>
          <div class="row"  >
            <div class="col-md-4" id='section2-col1'>
              <div id='contact-main'>
                <h1>Contact us</h1>
                <p>106, First floor, A -21 Sector 67 Noida - 201301</p>

              </div>
            </div>
            <div class="col-md-8 " id='form' >
              <form action="">
                <div className='contact-main-form' id='contact-main-form'>
                  <div className='row' id='form-row'>
                    <div className=' col-sm-6' >
                      <label >Name</label>
                      <input type="text" required maxLength={40} minLength={3} placeholder='Enter your Name' />
                    </div>
                    <div className=' col-sm-6' >
                      <label >What city are you from?</label>
                      <input type="text" required maxLength={40} minLength={3} placeholder='Enter your Name' />
                    </div>
                    <div className=' col-sm-6' >
                      <label >E-mail</label>
                      <input type="text" required maxLength={40} minLength={3} placeholder='Enter your Name' />
                    </div>
                    <div className=' col-sm-6' >
                      <label >Phone Number</label>
                      <input type="text" required maxLength={40} minLength={3} placeholder='Enter your Name' />
                    </div>
                    <div className=' col-sm-8' >
                      <label >Message </label>
                      <textarea name="" id="" cols="10" rows="10"></textarea>
                    </div>
                    <div className=' col-sm-2' id='form-submit' >
                      <button type='submit'><AiOutlineArrowRight /></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End to sec section  */}
      {/* Start to Third section  */}
      <section>
        
          <div className='row' id='section-row-three'>
            <div className='col-md-3'>
              <span>Subscribe :</span>
            </div>
            <div className='col-md-9'>
              <ul>
                <li>
                  <link rel="stylesheet" to="" />
                </li>
                <li>
                  <link rel="stylesheet" to="" />
                </li>
                <li>
                  <link rel="stylesheet" to="" />
                </li>
                <li>
                  <link rel="stylesheet" to="" />
                </li>
                <li>
                  <link rel="stylesheet" to="" />
                </li>
              </ul>
            </div>

          </div>

        
      </section>
      {/* End to sec section  */}
      {/* Start to Four section  */}
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <h1>Find us on map</h1>
            </div>
          </div></div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0076779223896!2d77.37483897469342!3d28.6295319842184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f8db0936a3%3A0x45b6d2df27348a89!2sDucat%20IT%20Training%20School%20Noida%20Sector-63!5e0!3m2!1sen!2sin!4v1687604683472!5m2!1sen!2sin"  width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Example iframe"></iframe>
            </div>
          </div>
        </div>
      </section >
     
    </div >

  )

}
