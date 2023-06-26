// import React from 'react'
// import { Link } from 'react-router-dom'
// import ".//Navbar.css";
// export const Rightnav = () => {
 // 
//  return (
//     <ul>
//         <li className="nav-item">
//           <Link className="nav-link" to="">
//             Home
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="about">
//             About Us
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="services">
//             Services
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="portfolio">
//             Portfolio
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="studio">
//             Studio
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="blog">
//             Blog
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="contact">
//             Contact
//           </Link>
//         </li>
//       </ul>
//   )
// }
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ".//Navbar.css";
export const Rightnav = () => {
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container-fluid ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav navbar">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="studio">
                Studio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
=======

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <input type="checkbox" id="menu-toggle" checked={isOpen} onChange={toggleMenu} />
        <label htmlFor="menu-toggle" className="menu-button">
          <span className="hamburger-icon"></span>
          <span className="cross-icon"></span>
        </label>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li className="nav-item">
      <Link className="nav-link" to="">
        Home
      </Link>
    </li>        
    <li className="nav-item">
         <Link className="nav-link" to="about">
           About Us
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="services">
           Services
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="portfolio">
           Portfolio
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="studio">
           Studio
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="blog">
           Blog
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="contact">
           Contact
         </Link>
       </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> b25aea69acb9cdfa078ad02f2ae07739ff9af280
