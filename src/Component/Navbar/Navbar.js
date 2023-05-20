import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="about">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="services">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="portfolio">
                  Portfolio
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="studio">
                  Studio
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
