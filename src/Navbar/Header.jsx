import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
   

   <div className="header">
      <div className="container-fluid px-0">
        <div className="row gx-0 wow fadeIn" data-wow-delay="0.1s">
          <div className="col-lg-3  d-none d-lg-block navbar-dark bg-green-800">
            <NavLink
              to="/"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <h1 className="m-0 p-4 display-4 ">Website</h1>
            </NavLink>
          </div>
          <div className="col-lg-9">
            <nav
              className="navbar navbar-expand-lg navbar-dark p-3 p-lg-0 px-lg-5"
              style={{ background: "#3b5d50" }}
            >
              <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="d-flex p-5 justify-content-end text-lg"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <NavLink to="/" className="nav-item nav-link ">
                    Home
                  </NavLink>
                
                  <NavLink to="/about" className="nav-item nav-link">
                    About Us
                  </NavLink>
                  
                  
                  <NavLink to="/contact" className="nav-item nav-link">
                    Contact Us
                  </NavLink>

                </div >
                
                  
                
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
