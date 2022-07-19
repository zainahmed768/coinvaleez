import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import "../../assets/css/selectwallet.css";
import {
  checklaptop,
  checkmobile,
  notchecklaptop,
  notcheckmobile,
  notcheckusb,
  usb,
  wallet,
  yellow_graph,
} from "../../constant";

const SelectWallet = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [id, setId] = useState("");

  const handleOnChange = (e, id) => {
    console.log(e.target.checked)
    setId(id)
    setIsChecked(e.target.checked);
  };
  const BrowsePage = () => {
    window.location.href = "/BrowseWallet";
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
                        onClick={(e)=>handleOnChange(e,"1")}
                      />
                      <div className="wallet-card-wrapper">
                        <div className="wallet-img-wrapper">
                          <img
                            className={`${isChecked}`}
                            src={id == 1 ? usb : notcheckusb}
                          />
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
                  <li className="wallet">
                    <label className="wallet-container">
                      <input
                        name="Hardware"
                        type="radio"
                        onClick={(e)=>handleOnChange(e,"2")}
                      />
                      <div className="wallet-card-wrapper">
                        <div className="wallet-img-wrapper">
                          <img
                            className={`${isChecked}`}
                            src={id == 2 ?  checkmobile : notcheckmobile}
                          />
                        </div>
                        <div className="wallet-content-wrapper">
                          <h3>Mobile</h3>
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
                        onClick={(e)=>handleOnChange(e,"3")}
                      />
                      <div className="wallet-card-wrapper">
                        <div className="wallet-img-wrapper">
                          <img
                            className={`${isChecked}`}
                            src={id == 3 ?  checklaptop : notchecklaptop}
                          />
                        </div>
                        <div className="wallet-content-wrapper">
                          <h3>Browser</h3>
                          <span>
                            Connect <i className="fa fa-angle-right"></i>
                          </span>
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="button-wrapper">
                  <button onClick={BrowsePage} className="btn form-control">
                    Next
                  </button>
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

export default SelectWallet;
