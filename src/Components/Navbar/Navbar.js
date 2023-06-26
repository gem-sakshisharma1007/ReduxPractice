import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h3 className="navbar-brand">Login_Using_Redux</h3>
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item px-2" >
            <Link to="/">Login</Link>
        
        </li>
        <li className="nav-item">
            <Link to="/about">About</Link>
    
        </li>
  
      </ul>
    
    </div>
  </div>
</nav>
  

      
    
  )
}

export default Navbar
