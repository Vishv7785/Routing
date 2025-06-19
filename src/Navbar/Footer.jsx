import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container-fluid px-0">
        <footer className="footer-section">
          <div className="container-relative">
               {/* <div class="sofa-img">
                      <img
                        src="images/sofa.png"
                        alt="Image"
                        class="img-fluid"
                      />
                    </div> */}
            <div className="container">
              
              <div className="row">
                <div className="col-lg-8">
                  <div className="subcription-form">
                    <h3 className="d-flex align-item-center">
                      <span class="me-1">
                        <img
                          src="images/envelope-outline.svg"
                          alt="Image"
                          class="img-fluid"
                        />
                      </span>
                      <span>Subscribe to Newsletter</span>
                    </h3>

                 

                    <form action="" className="row g-3">
                      <div className="col-auto">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="col-auto">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="col-auto">
                        <button className="btn btn-primary">
                          <span className="fa fa-paper-plane"></span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <br />

            <div className="container">
              <div className="row g-5 mb-5">
                <div className="col-lg-4">
                  <div className="mb-4 footer-logo-wrap">
                    <a href="#" className="footer-logo">
                      Furni <span>.</span>
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugit aut nostrum, temporibus officia praesentium error at
                    quis reprehenderit laudantium ratione perspiciatis corrupti
                    amet? Earum et rem dolorem impedit temporibus mollitia?
                  </p>

                  <ul class="list-unstyled custom-social">
                    <li>
                      <a href="#">
                        <span class="fa fa-brands fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-brands fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-brands fa-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-brands fa-linkedin"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-8">
                  <div className="row links-wrap">
                    <div className="col-6 col-sm-6 col-md-3">
                      <ul className="list-unstyled">
                        <li>
                          <Link to="/about" >About us</Link>
                        </li>
                        <li>
                          <Link to="/service" >Services</Link>
                        </li>
                        <li>
                          <Link to="/blog" >Blog</Link>
                        </li>
                        <li>
                          <Link to="/contact" >Contact us</Link>
                        </li>
                      </ul>
                    </div>
                    <div class="col-6 col-sm-6 col-md-3">
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Support</a>
                        </li>
                        <li>
                          <a href="#">Knowledge base</a>
                        </li>
                        <li>
                          <a href="#">Live chat</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-6 col-sm-6 col-md-3">
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Jobs</a>
                        </li>
                        <li>
                          <a href="#">Our team</a>
                        </li>
                        <li>
                          <a href="#">Leadership</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-6 col-sm-6 col-md-3">
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Nordic Chair</a>
                        </li>
                        <li>
                          <a href="#">Kruzo Aero</a>
                        </li>
                        <li>
                          <a href="#">Ergonomic Chair</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-top copyright">
                <div className="row pt-4">
                  <div className="col-lg-6">
                    <p className="mb-2 text-center text-lg-start">
                      Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script>
                    </p>
                  </div>

                  <div className="col-lg-6 text-center text-lg-end">
                    <ul class="list-unstyled d-inline-flex ms-auto">
                      <li class="me-4">
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  );
}

export default Footer;
