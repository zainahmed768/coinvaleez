import React, { useEffect, useState } from "react";
import "../../assets/css/signup.css";
import Header from "../../Components/Header";
import "../../assets/css/floating-labels.css";
import $ from "jquery";
import { Link } from "react-router-dom";

const Signup = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const stoploading = (e) => {
    e.preventDefault();
  };
  const selectpage = () => {
    window.location.href = "/selectWallet";
  };
  useEffect(() => {
    $(".intl-tel-input ~ label").insertAfter(
      ".intl-tel-input input.form-control"
    );
    // or
    $(".intl-tel-input, .iti")
      .find("input.form-control")
      .each(function (index, element) {
        let label = $(element).parent().find("~ label");
        $(element).after(label);
      });
  }, []);
  return (
    <>
      <Header />
      {/* signup starts here */}
      <section className="signup">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="signup-heading-wrapper">
                <h2>Sign Up</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
              <div className="signup-wrapper">
                <form onSubmit={stoploading}>
                  <div class="form-label-group in-border">
                    <input
                      type="text"
                      className="form-control name"
                      id="ex1"
                      placeholder="John Doe"
                    />
                    <div className="input-group-btn">
                      <button>
                        <i className="fa fa-user"></i>
                      </button>
                    </div>
                    <label for="ex1">Full Name</label>
                  </div>
                  <div class="form-label-group in-border">
                    <input
                      type="text"
                      className="form-control email"
                      id="ex1"
                      placeholder="Username@yourmail.com"
                    />
                    <div className="input-group-btn">
                      <button>
                        <i className="fa fa-envelope"></i>
                      </button>
                    </div>
                    <label for="ex1">Email Address</label>
                  </div>
                  <div class="form-label-group in-border">
                    <input
                      className="form-control password"
                      id="ex1"
                      placeholder="**********"
                      type={passwordType}
                      onChange={handlePasswordChange}
                      value={passwordInput}
                    />
                    <div className="input-group-btn">
                      <button onClick={togglePassword}>
                        {passwordType === "password" ? (
                          <i className="fa fa-eye"></i>
                        ) : (
                          <i className="fa fa-eye-slash"></i>
                        )}
                      </button>
                    </div>
                    <label for="ex1">Password</label>
                  </div>
                  <div class="form-label-group in-border">
                    <input
                      type={passwordType}
                      className="form-control confirm-password"
                      id="ex1"
                      placeholder="**********"
                    />
                    <div className="input-group-btn">
                      <button onClick={togglePassword}>
                        {passwordType === "password" ? (
                          <i className="fa fa-eye"></i>
                        ) : (
                          <i className="fa fa-eye-slash"></i>
                        )}
                      </button>
                    </div>
                    <label for="ex1">Confirm Password</label>
                  </div>
                  <div className="form-group">
                    <button onClick={selectpage} className="btn form-control">
                      Connect Wallet
                    </button>
                  </div>
                </form>
                <div className="info-wrapper">
                  <p>
                    Already Have An Account <Link to="">( Sign in )</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* signup ends here */}
    </>
  );
};

export default Signup;
