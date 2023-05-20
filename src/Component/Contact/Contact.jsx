import React from 'react'
import './Contact.css'

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
                <div className='row'>
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
          <div className='row'>
            <div className='col-md-3'>Subscribe :</div>
            <div className='col-md-9'>
              <span>
                <i>1</i>
              </span>
              <span>
                <i>2</i>
              </span>
              <span>
                <i>3</i>
              </span>
              <span>
                <i>4</i>
              </span>
              <span>
                <i>5</i>
              </span>
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
            <div className='col'>
            {/* <iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56033.922022744!2d77.34063106396309!3d28.626161593737308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f8db0936a3%3A0x45b6d2df27348a89!2sDucat%20IT%20Training%20School%20Noida%20Sector-63!5e0!3m2!1sen!2sin!4v1674290342981!5m2!1sen!2sin"
							 allowfullscreen="" loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </div>
        </div>
      </section>

      </div>
  )
}

