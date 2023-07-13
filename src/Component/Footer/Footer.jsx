import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { AiFillFacebook, AiFillGoogleCircle, AiFillHome, AiFillInstagram, AiFillPhone, AiFillTwitterCircle } from "react-icons/ai";
import{BsFillEnvelopeFill} from "react-icons/bs";

export const Footer = () => {
  return (
    <div>
      {/* <div className="container-fluid mt-5 mb-5 bg-dark">
        <footer className="py-5">
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-4">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      FAQs
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 text-muted">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col-12 offset-1">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label for="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top text-white">
            <p> © 2023 Mahesh, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div> */}
       <section class="footer-wrapper wrapper" id="contact">
        <div class="container">
            <div class="row footer-row">
                <div class="col-lg-3 col-md-6 mb-4 ">
                    <h5>Clinic Location</h5>
                    <p class="ps-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quae fuga quas repellendus
                    </p>
                    <div class="contact-info">
                        <div class="list-unstyled">
                            <ul>
                                <li><Link to="#"><AiFillHome/> No. 96, South City, Noida</Link></li>
                                <li><Link to="#"><AiFillPhone/> +91 674 374 6637</Link></li>
                                <li><Link to="#"><BsFillEnvelopeFill/> infoabhishek@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5>More Links</h5>
                    <ul class="link-widget p-0">
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Our Office</Link></li>
                        <li><Link to="#">Delivery</Link></li>
                        <li><Link to="#">Our Store</Link></li>
                        <li><Link to="#">Guarantee</Link></li>
                        <li><Link to="#">Buy Gift Card</Link></li>
                        <li><Link to="#">Return Policy</Link></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <h5>More Links</h5>
                    <ul class="link-widget p-0">
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Our Office</Link></li>
                        <li><Link to="#">Delivery</Link></li>
                        <li><Link to="#">Our Store</Link></li>
                        <li><Link to="#">Guarantee</Link></li>
                        <li><Link to="#">Buy Gift Card</Link></li>
                        <li><Link to="#">Return Policy</Link></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                    <h5>Newsletter</h5>
                    <div class="form-group mb-4">
                        <input type="email" class="form-control bg-transparent" placeholder="Enter Your Email"/>
                        <button type="submit" class="main-btn rounded-2 mt-3 border-white text-white">Subscribe</button>
                    </div>
                    <h5>stay Connected</h5>
                    <ul class="social-network d-flex align-items-center p-0">
                        <li><Link to="#"><AiFillFacebook/></Link></li>
                        <li><Link to="#"><AiFillTwitterCircle/></Link></li>
                        <li><Link to="#"><AiFillGoogleCircle/></Link></li>
                        <li><Link to="#"><AiFillInstagram/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright-section">
            <p class="p-0">Copyright <Link to="#">BOOTSTRAP AND JAVASCRIPT</Link>All Right Reserved</p>
        </div>
    </section>
    </div>
  );
};
