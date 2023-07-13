import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      {/* Hear is video section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12" id="video1">
              <video
                id="video2"
                controls
                autoPlay
                loop 
                muted
                src="image/video.mp4.mp4"
              ></video>
            </div>
          </div>
        </div>
      </section>

      {/* Hear is  section2 */}
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-6" id="section-col1-image">
              <img src="./image/img8.jpg" alt="no" />
            </div>
            <div className="col-md-6" id="section-col2-paragrap">
              <h4>We design your space</h4>
              <p>
                {" "}
                AMU Design Studio offers unique design solutions for your space.
                All you need to do is show us your place and we can help you
                make it your dream home. Our designers are here to assist you
                throughout your journey and give you solutions for your
                residential or commercial spaces. Book us today to help us
                become your one-on-one guide and create a space that's both
                stylish and comfortable. We are based in Noida. Tell us your
                requirement and we will take care of everything. It's that
                simple really
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hear is  section3 */}
      <section>
        <div className="container section3">
          <div className="row  " id="section3-row">
            <h1>Its easy to book us</h1>

            <div className="col-md-3" id="section3-row-col1">
              <div>
                <img src="./image/Interior-Design.webp" alt="" />
              </div>
              <div>
                <h4>Meet Designer</h4>
                <p>
                  Book an appointment and we will plan a meeting for you with
                  the designer
                </p>
              </div>
            </div>
            <div className="col-md-3" id="section3-row-col2">
              <div>
                <img src="./image/interior2nd-1.webp" alt="" />
              </div>
              <div>
                <h4>Discuss Ideas</h4>
                <p>
                  Share your floor plan to discuss the budget, design, color &
                  more.
                </p>
              </div>
            </div>
            <div className="col-md-3" id="section3-row-col3">
              <div>
                <img src="./image/3rd-1.webp" alt="" />
              </div>
              <div>
                <h4>Get free quote</h4>
                <p>
                  After reviewing your requirement we will give you a tentative
                  budget.
                </p>
              </div>
            </div>
            <div className="col-md-3" id="section3-row-col4">
              <div>
                <img src="./image/interior-1st.webp" alt="" />
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

      {/* hear section4 start  */}
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-6" id="section-col2-paragrap">
              <h4>We design your space</h4>
              <p>
                {" "}
                AMU Design Studio offers unique design solutions for your space.
                All you need to do is show us your place and we can help you
                make it your dream home. Our designers are here to assist you
                throughout your journey and give you solutions for your
                residential or commercial spaces. Book us today to help us
                become your one-on-one guide and create a space that's both
                stylish and comfortable. We are based in Noida. Tell us your
                requirement and we will take care of everything. It's that
                simple really
              </p>
            </div>
            <div className="col-md-6" id="section-col1-image">
              <img src="./image/img1.jpg" alt="no" />
            </div>
          </div>
        </div>
      </section>
      {/* hear section5 start  */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <h1>Our Blogs</h1>
            <div className="col-md-4 p-5 " id="section5-col1-image">
              <img src="./image/img2.jpg" alt="no" />
              <span>Blog, Interior design</span>
              <h5>6 Inspiring Interior Design Trends 2023</h5>
              <p>
                They say Change is the only thing constant. This is especially
                true in the world…
              </p>
              <Link to="">View more</Link>
            </div>
            <div className="col-md-4 p-5 " id="section5-col1-image">
              <img src="./image/img4.jpg" alt="no" />
              <span>Blog, Interior design</span>
              <h5>6 Inspiring Interior Design Trends 2023</h5>
              <p>
                They say Change is the only thing constant. This is especially
                true in the world…
              </p>
              <Link to="">View more</Link>
            </div>
            <div className="col-md-4 p-5" id="section5-col1-image">
              <img src="./image/img3.jpg" alt="no" />
              <span>Blog, Interior design</span>
              <h5>6 Inspiring Interior Design Trends 2023</h5>
              <p>
                They say Change is the only thing constant. This is especially
                true in the world…
              </p>
              <Link to="">View more</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
