import React from 'react'
import './Contact.css'
import { Google_map } from '../../Google-map/Google_map'

export const Contact = () => {
  return (
    <div> {/* Start to first section  */}
      <section>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <div id='Text'>
                <h1>Contact us!</h1>
                <p>Any questions or suggestions?</p>
                <p>Write us a message and we will contact you!</p>
              </div>
            </div>
            <div class="col-md-6">
              <div className='Image1'>
                <img src="./image/img.jpg" alt="no" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End to first section  */}
      {/* Start to Sec section  */}
      <section>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div id='contact-main'>
                <h1>Contact us</h1>
                <p>106, First floor, A -21 Sector 67 Noida - 201301</p>

              </div>
            </div>
            <div class="col-md-8" >
              <form action="">
                <div className='contact-main-form' id='contact-main-form'>
                  <div className='row'id='form-row'>
                    <div className='col-sm-6'>
                      <label htmlFor="">Enter your name</label>
                      <input type="text" required maxLength={40} minLength={3} placeholder='Enter your Name' />
                    </div>
                    <div className='col-sm-6'>
                      <label htmlFor="">Enter your name</label>
                      <input type="text" required maxLength={40} minLength={3} placeholder='Enter your Name' />
                    </div>
                    <div className='col-sm-6'>
                      <label htmlFor="">Enter your name</label>
                      <input type="text" required maxLength={40} minLength={3} placeholder='Enter your Name' />
                    </div>
                    <div className='col-sm-6'>
                      <label htmlFor="">Enter your name</label>
                      <input type="text" required maxLength={40} minLength={3} placeholder='Enter your Name' />
                    </div>
                    <div className='col-sm-8'>
                      <label htmlFor="">Enter your name</label>
                      <input type="text" required maxLength={40} minLength={3} placeholder='Enter your Name' />
                    </div>
                    <div className='col-sm-2'>
                      <button>submit</button>
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
        <div className='container-fluid'>
          <div className='row'id='section-row-three'>
            <div className='col-md-3'>
              <span>Subscribe :</span>
            </div>
            <div className='col-md-9'>
             <ul>
              <li>
                <a href=""><i>1</i></a>
              </li>
              <li>
                <a href=""><i>1</i></a>
              </li>
              <li>
                <a href=""><i>1</i></a>
              </li>
              <li>
                <a href=""><i>1</i></a>
              </li>
              <li>
                <a href=""><i>1</i></a>
              </li>
             </ul>
            </div>

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
            <Google_map></Google_map>
          </div>
        </div>
    </div>
      </section >

      </div >
  )
}

