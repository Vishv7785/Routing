import React from 'react'
import { NavLink } from 'react-router-dom'

function Naav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <NavLink class="nav-item active">
        <a class="nav-link" to="/">Home </a>
      </NavLink>
      <NavLink class="nav-item active">
        <a class="nav-link" to="/about">about </a>
      </NavLink>
      <NavLink class="nav-item active">
        <a class="nav-link" to="/contact">contact </a>
      </NavLink>
     
      
    </ul>
    
  </div>
</nav>
  )
}

export default Naav
