import React from "react";
import Header from "../../Components/Header";
import "../../assets/css/selectwallet.css";
import { GiUsbKey } from "react-icons/gi";

const selectWallet = () => {
  return (
    <>
      <Header />
      {/* select Wallet starts here */}
      <section className="selectWallet">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="signup-heading-wrapper">
                <h2>Select Wallets Types :</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
            <div className="col-lg-4 pt-4">
              <div className="wallets-list-wrapper">
                <ul className="wallets-list">
                  <li className="wallet">
                    <label className="wallet-container">
                      <input type="checkbox" defaultChecked />
                      <div className="wallet-card-wrapper">
                        <div className="wallet-img-wrapper">
                          <GiUsbKey fontSize={50} />
                        </div>
                        <div className="wallet-content-wrapper">
                          <h3>Hardware</h3>
                          <span>
                            Connect <i className="fa fa-angle-right"></i>
                          </span>
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* select Wallet ends here */}
    </>
  );
};

export default selectWallet;
