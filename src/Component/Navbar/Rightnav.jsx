import React from 'react'
import { Link } from 'react-router-dom'
import ".//Navbar.css";
export const Rightnav = () => {
  return (
    <ul>
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
  )
}
