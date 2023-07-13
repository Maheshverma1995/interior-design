import React from "react";
import "./services.css";

export const Services = () => {
  return (
    <div>
      {/* Hear is  section-1*/}
      <section>
        <div className="container ">
          <div className="row section-1">
            <div className="col-12">
              <h2>SERVICES</h2>
              <div className="col-12">
                <img  className='img-fluid' src="./image/53.webp" alt="no" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hear is  section-2*/}
      <section>
        <div className="container section3">
          <div className="row" id="section3-row">
            <h1>Its easy to book us</h1>

            <div className="col-md-3" id="section3-row-col1">
              <div>
                <img className='img-fluid'  src="./image/Interior-Design.webp" alt="" />
              </div>
              <div>
                <h4>Meet Designer</h4>
                <p>
                  Book an appointment and we will plan a meeting for you with
                  the designer
                </p>
              </div>
            </div>
            <div className="col-md-3 " id="section3-row-col2">
              <div>
                <img className='img-fluid'  src="./image/interior2nd-1.webp" alt="" />
              </div>
              <div>
                <h4>Discuss Ideas</h4>
                <p>
                  Share your floor plan to discuss the budget, design, color &
                  more.
                </p>
              </div>
            </div>
            <div className="col-md-3 " id="section3-row-col3">
              <div>
                <img className='img-fluid'  src="./image/3rd-1.webp" alt="" />
              </div>
              <div>
                <h4>Get free quote</h4>
                <p>
                  After reviewing your requirement we will give you a tentative
                  budget.
                </p>
              </div>
            </div>
            <div className="col-md-3 " id="section3-row-col4">
              <div>
                <img className='img-fluid'  src="./image/interior-1st.webp" alt="" />
              </div>
              <div>
                <h4>Book Us!</h4>
                <p>
                  Pay 10% of the final budget to book us & we will start the
                  work.
                </p>
              </div>
            </div>
            <div className="col-md-6" id="section-col1-image"></div>
          </div>
        </div>
      </section>
      {/* Hear is  section-3*/}
      <section>
        <div className="container p-3">
          <div className="row">
            <h1>How we work</h1>
            <div className="row m-3">
              <div className="col-md-4">
                <div class="card m-3">
                  <img className='img-fluid'  src="./image/23.webp" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Meet Designer</h5>
                    <p class="card-text">
                      Meet us to share your requirements and allow us to know
                      you better.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card m-3">
                  <img className='img-fluid'  src="./image/24.webp" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Meet Designer</h5>
                    <p class="card-text">
                      Meet us to share your requirements and allow us to know
                      you better.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card m-3">
                  <img className='img-fluid'  src="./image/25.webp" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Meet Designer</h5>
                    <p class="card-text">
                      Meet us to share your requirements and allow us to know
                      you better.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-3">
              <div className="col-md-4">
                <div class="card m-3">
                  <img className='img-fluid'  src="./image/26.webp" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Meet Designer</h5>
                    <p class="card-text">
                      Meet us to share your requirements and allow us to know
                      you better.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card m-3">
                  <img className='img-fluid'  src="./image/27.webp" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Meet Designer</h5>
                    <p class="card-text">
                      Meet us to share your requirements and allow us to know
                      you better.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card m-3">
                  <img className='img-fluid'  src="./image/28.webp" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Meet Designer</h5>
                    <p class="card-text">
                      Meet us to share your requirements and allow us to know
                      you better.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hear is  section-4*/}
      <section>
        <div className="container p-3">
          <h2>Payment Cycle</h2>
          <div className="row section-4">
            {/* <Chart/> */}
            <div className="col-md-6">
              <h4>Stage 1</h4>
              <img className='img-fluid'  src="./image/Asset-1@3x-3-900x771.webp" alt="img" style={{width:'80%'}}/>
            </div>
            <div className="col-md-6">
              <h4>Stage 2</h4>
              <img className='img-fluid'  src="./image/Asset-2@3x-900x747.webp" alt="img" style={{width:'80%'}} />
            </div>
          </div>
          <div className="row section-4">
            <div className="col-md-6">
              <h4>Stage 3</h4>
              <img className='img-fluid'  src="./image/Asset-3@3x-900x747.webp" alt="img" style={{width:'80%'}}/>
            </div>
            <div className="col-md-6">
              <h4>Stage 4</h4>
              <img className='img-fluid'  src="./image/Asset-4@3x-900x720.webp" alt="img" style={{width:'80%'}} />
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};
