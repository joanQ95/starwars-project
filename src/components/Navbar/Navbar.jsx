import React from "react";
import { Link } from "react-router-dom";
import logoNavbar from '../../assets/img/STARWARSLOGO.png'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2 ">
            <ul className="navbar-nav me-auto div-ul">
              <li className="nav-item active">
                <Link className="link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="link" to="/story">Historia</Link>
              </li>
            </ul>
          </div>

          <div className="mx-auto order-0">
            <a className="navbar-brand mx-auto" href="#">
                <img className="logo" src={logoNavbar} alt="logo"/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".dual-collapse2"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PERSONAJES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACTO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
