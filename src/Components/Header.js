import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constant";

const Header = () => {
  return (
    <>
      <header id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="logo-wrapper">
                <Link to="/">
                  <img src={logo} className="img-fluid" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mennu-wrapper">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Exchange">
                      Exchange
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn" to="/About">
                      Connect Wallet
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
