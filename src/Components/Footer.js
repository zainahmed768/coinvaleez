import React from "react";
import { footer_binance, footer_hand, logo } from "../constant";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-hand">
          <img src={footer_hand} className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget-1">
                <div className="footer-logo-wrapper">
                  <a href="/">
                    <img src={logo} className="img-fluid" />
                  </a>
                </div>
                <p>
                  Coinvaleez
                </p>
                <div className="social-wrapper">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-youtube-play"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-widget-2">
                <div className="footer-links">
                  <h5>Quick Links</h5>

                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-angle-right"></i>About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-angle-right"></i>Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-angle-right"></i>Pricing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-angle-right"></i>FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-angle-right"></i>Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget-3">
                <div className="footer-links">
                  <h5>Contact Info</h5>

                  <ul>
                    <li>
                      <i className="fa-map-marker"></i>JI. Sample Road No.815,
                      Kuta,
                    </li>
                    <li>
                      <i className="fa-phone"></i> (+12) 345 678 9
                    </li>
                    <li>
                      <i className="fa-envelope"></i> support@domain.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-widget-4">
                <div className="footer-links">
                  <h5>Newsletter</h5>
                  {/*<p>*/}
                  {/*  Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. In*/}
                  {/*  sollii sn erat vel n <br/>  erat n erat vel rhoncus n erat vel  <br/>*/}
                  {/*  rhoncus sollicitudin.*/}
                  {/*</p>*/}
                  <p>
                    Coinvaleez
                  </p>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email Addrress"
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-theme" type="submit">
                        <i className="fa-envelope"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright">
                <p>© Copyright 2022. All Right Reserved.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-coin">
          <img src={footer_binance} className="img-fluid" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
