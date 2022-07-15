import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import {
  Liquality,
  MetaMask,
  Portis,
} from "../../constant";

const BrowserWallet = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (e) => {
    setIsChecked(e.target.checked);
  };
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
                      <input
                        name="Hardware"
                        type="radio"
                        onClick={handleOnChange}
                      />
                      <div className="wallet-card-wrapper">
                        <div className="wallet-img-wrapper">
                          <img
                            src={Liquality}
                          />
                        </div>
                        <div className="wallet-content-wrapper">
                          <h3>Liquality</h3>
                          <span>
                            Connect <i className="fa fa-angle-right"></i>
                          </span>
                        </div>
                      </div>
                    </label>
                  </li>
                  <li className="wallet">
                    <label className="wallet-container">
                      <input
                        name="Hardware"
                        type="radio"
                        onClick={handleOnChange}
                      />
                      <div className="wallet-card-wrapper">
                        <div className="wallet-img-wrapper">
                          <img
                            src={MetaMask}
                          />
                        </div>
                        <div className="wallet-content-wrapper">
                          <h3>MetaMask</h3>
                          <span>
                            Connect <i className="fa fa-angle-right"></i>
                          </span>
                        </div>
                      </div>
                    </label>
                  </li>
                  <li className="wallet">
                    <label className="wallet-container">
                      <input
                        name="Hardware"
                        type="radio"
                        onClick={handleOnChange}
                      />
                      <div className="wallet-card-wrapper">
                        <div className="wallet-img-wrapper">
                          <img
                            src={Portis}
                          />
                        </div>
                        <div className="wallet-content-wrapper">
                          <h3>Portis</h3>
                          <span>
                            Connect <i className="fa fa-angle-right"></i>
                          </span>
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="button-wrapper">
                  <button className="btn form-control">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* select Wallet ends here */}
    </>
  );
};

export default BrowserWallet;
