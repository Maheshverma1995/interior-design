import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './About.css'

export const About = () => {
  return (
    <div>
      <section className='section1'>
        <div className='container  '>
          <div className='row'>
            <h1>ABOUT US.</h1>
            <div className='col-md-4 col-lg-6 col-sm-12 section1-col-1'>

              <img className='img-fluid' src="image/2-1-900x551.jpg" alt="" />
            </div>

          </div>

        </div>
      </section>
      {/* end of section */}
      <section className='section2'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>How it all started</h1>
              <p>It all started in the year 2012 when Rohit remodeled and
                designed his first house in New Delhi. He decided to design,
                document, and post everything on Instagram and soon AMU Design
                Studio became a community. We officially launched in 2014 with
                the name Amusing Interior and since then we have been creating
                the most comfortable yet stylish homes for customers all across
                the country. Our aspirational design ideas make us one of the
                leading interior design brands in Delhi NCR. We have one of the
                best teams of Interior designers who with their effortless creative
                approach assures a happier experience for our clients. We are currently
                doing projects in Delhi, Noida, Faridabad, Gurugram, Haridwar, Dehradun,
                Mumbai, Goa, Guwahati, Mukteshwar, Hyderabad, and Ahmadabad. Our team of
                experienced designers, craftsmen, and project managers has built over a hundred
                luxurious homes in India to date.</p>


            </div>
          </div>
        </div>
      </section>
      {/* Hear is  section3 */}
      <section>
        <div className="container-fluid section-3 ">
          <div className="row">
            <div className="col-md-4 col-lg-6 col-sm-12">
              <h1 className='h1'><span>Through the Years</span></h1>
            </div>
            <div className="col-md-4 col-lg-6 col-sm-12">
                  <div class="col-sm">
                    <li><div><h2>10</h2>
                      <span>Awards gained</span></div>
                    </li>
                  </div>
                  <div class="col-sm">
                    <li><div><h2>10</h2>
                      <span>Awards gained</span></div>
                    </li>
                  </div>
                  <div class="col-sm">
                    <li><div><h2>10</h2>
                      <span>Awards gained</span></div>
                    </li>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hear is  section4 */}
      <section>
        <div className="container mt-5 mb-5 p-3">
          <div className="row">
            <div className="col-md-6" id='section-col1-image'>
              <img src="./image/img6.jpg" alt="no" />
            </div>
            <div className="col-md-6 section-3-p">
              <h4>Rohit Chaudhary
                <h6 className='m-1'>(Founder & Principal Designer)</h6>
              </h4>
              <p> Rohit Chaudhary has gained a reputation as a perfectionist for his
                unique approach to creating and reflecting his client’s vivid design
                interests. With a diverse portfolio of residential and commercial projects
                in his account, he has well presented his skills in space planning & project
                management. He has always believed that universal design practices
                and sustainable construction are the future of Architecture and Design in India.
                Rohit has more than ten years of experience in the industry. He founded
                AMU Design Studio in 2014 to offer unique design solutions to clients
                across the country. Right from the time he started working on his first
                home, he knew interior designing is more than just home remodeling and
                space planning. It is the art of putting together one’s knowledge, inspiration,
                and requirement in the most innovative way.
                Rohit is an autodidact, with no formal training in design. He has built his business
                with inspiration from the architectural world which is expanding beyond any traditional
                business model. Rohit has always maintained a cordial relationship with his clients and
                won their trust through a dedicated and enduring approach. Apart from his professional behavior,
                Rohit is known for his loyalty, patience, and fun-loving spirit.</p>
            </div>
          </div>
        </div>
      </section>
      {/* hear section 5 start  */}
      <section>
        <div className="container mt-5 mb-5 section3">
          <div className="row  " id='section3-row' >

            <h1>Its easy to book us</h1>



            <div className='col-md-3' id='section3-row-col1'>
              <div>
                <img src="./image/Interior-Design.webp" alt="" />
              </div>
              <div>
                <h4>Meet Designer</h4>
                <p>Book an appointment and we will plan a meeting for you with the designer</p>
              </div>
            </div>
            <div className='col-md-3' id='section3-row-col2'>
              <div>
                <img src="./image/interior2nd-1.webp" alt="" />
              </div>
              <div>
                <h4>Discuss Ideas</h4>
                <p>Share your floor plan to discuss the budget, design, color & more.</p>
              </div>
            </div>
            <div className='col-md-3' id='section3-row-col3'>
              <div>
                <img src="./image/3rd-1.webp" alt="" />
              </div>
              <div>
                <h4>Get free quote</h4>
                <p>After reviewing your requirement we will give you a tentative budget.</p>
              </div>
            </div>
            <div className='col-md-3' id='section3-row-col4'>
              <div>
                <img src="./image/interior-1st.webp" alt="" />
              </div>
              <div>
                <h4>Book Us!</h4>
                <p>Pay 10% of the final budget to book us & we will start the work.</p>
              </div>
            </div>
            <div className="col-md-6" id='section-col1-image'>
            </div>
          </div>
        </div >
      </section >
      {/* Hear is  section6 */}
      <section>
        <div className="container mt-5 mb-5 section-6">
          <div className="row">
            <div className="col-md-6">
              <div class="card" >
                <img src="./image/img7.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Our In-House Carpentry Unit</h5>
                  <p class="card-text">We are well-equipped to design all the loose furniture here!</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card" >
                <img src="./image/img9.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Our In-House Modular Furniture Unit</h5>
                  <p class="card-text">We have the latest machinery to design fixed furniture here!</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

