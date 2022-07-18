import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "../../assets/css/onboarding.css";
import $ from "jquery";

const Onboarding = () => {
  return (
    <>
      <Header />
      {/* on Boarding starts here */}
      <section className="onboarding-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="onboarding-wrapper">
                <div className="onboarding-heading-wrapper">
                  <h2>Onboarding For Entities</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                  </p>
                </div>
                <div className="onboarding-form-wrappper mt-5">
                  <div className="signup-wrapper">
                    <form>
                      <div className="form-group row">
                        <div className="col-lg-6">
                          <div class="form-label-group in-border">
                            <input
                              type="text"
                              className="form-control name"
                              id="ex1"
                              placeholder="Full legal name, and D/B/A (if applicable) "
                            />
                            <label for="ex1">Full Name</label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div class="form-label-group in-border">
                            <input
                              type="text"
                              className="form-control name"
                              id="ex1"
                              placeholder="Principal Place of Business"
                            />
                            <label for="ex1">Place</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-lg-6">
                          <div class="form-label-group in-border">
                            <input
                              type="text"
                              className="form-control name"
                              id="ex1"
                              placeholder="Jurisdiction of organization"
                            />
                            <label for="ex1">Organization</label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div class="form-label-group in-border">
                            <input
                              type="text"
                              className="form-control name"
                              id="ex1"
                              placeholder="Taxpayer identification number, such as an Employer Identification Number"
                            />
                            <label for="ex1">Employer Identify</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-lg-12">
                          <div class="form-label-group in-border">
                            <input
                              type="text"
                              className="form-control name"
                              id="ex1"
                              placeholder="List of all executive officers and directors (“D&Os”)"
                            />
                            <label for="ex1">List Of Directors</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-lg-12">
                          <div class="form-label-group in-border">
                            <input
                              type="text"
                              className="form-control name"
                              id="ex1"
                              placeholder="List of all individuals and entities who, directly or indirectly, beneficially own or controls 25% or more of the equity interests in the entity (“25% Shareholders”)"
                            />
                            <label for="ex1">List Of Individuals</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-lg-12">
                          <div class="form-label-group in-border">
                            <input
                              type="text"
                              className="form-control name"
                              id="ex1"
                              placeholder="Description of source of the entity’s assets"
                            />
                            <label for="ex1">Entity Assets</label>
                          </div>
                        </div>
                      </div>
                      <div className="importance-wrapper">
                        <h4>Important Notes</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          Lorem Ipsum is simply dummy text of the printing and
                          types etting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </p>
                      </div>
                      <div className="provide-wrapper">
                        <h4>
                          Please Provide Documentation About The Bank Account
                          You Will Use With Us.
                        </h4>
                      </div>
                      <div className="form-group row">
                        <div className="col-lg-6">
                          <div class="form-label-group in-border">
                            <input
                              type="file"
                              className="form-control name"
                              id="ex1"
                              placeholder="Bank Statement (No File Chosen)"
                            />
                            <div className="input-group-btn">
                              {/* <button className="choose-file">
                                Choose File <i className="fa fa-upload"></i>
                              </button> */}
                            </div>
                            <label for="ex1">Bank Statement</label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div class="form-label-group in-border">
                            <input
                              type="text"
                              className="form-control name"
                              id="ex1"
                              placeholder="Bank Name Here"
                            />
                            <label for="ex1">Bank Name</label>
                          </div>
                        </div>
                      </div>
                      <div className="upload-files-wrapper">
                        <div className="upload-heading-wrapper">
                          <h4>Please Upload</h4>
                          <ul>
                            <li>
                              Entity formation documents (e.g. certificate of
                              formation, articles of incorporation, certificate
                              of organization or equivalent documents)
                            </li>
                            <li>
                              For all D&Os and 25% Shareholders, the following
                              documents :
                            </li>
                          </ul>
                        </div>
                        <div className="form-group row">
                          <div className="col-lg-6">
                            <div class="form-label-group in-border">
                              <input
                                type="file"
                                className="form-control name"
                                id="ex1"
                                placeholder="(No File Chosen)"
                              />
                              <label for="ex1">Choose File</label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div class="form-label-group in-border">
                              <input
                                type="file"
                                className="form-control name"
                                id="ex1"
                                placeholder="(No File Chosen)"
                              />
                              <label for="ex1">Choose File</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-lg-6">
                            <div class="form-label-group in-border">
                              <input
                                type="file"
                                className="form-control name"
                                id="ex1"
                                placeholder="(No File Chosen)"
                              />
                              <label for="ex1">Choose File</label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div class="form-label-group in-border">
                              <input
                                type="file"
                                className="form-control name"
                                id="ex1"
                                placeholder="(No File Chosen)"
                              />
                              <label for="ex1">Choose File</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-lg-6">
                            <div class="form-label-group in-border">
                              <input
                                type="file"
                                className="form-control name"
                                id="ex1"
                                placeholder="(No File Chosen)"
                              />
                              <label for="ex1">Choose File</label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div class="form-label-group in-border">
                              <input
                                type="file"
                                className="form-control name"
                                id="ex1"
                                placeholder="(No File Chosen)"
                              />
                              <label for="ex1">Choose File</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-lg-6">
                            <div class="form-label-group in-border">
                              <input
                                type="file"
                                className="form-control name"
                                id="ex1"
                                placeholder="(No File Chosen)"
                              />
                              <label for="ex1">Choose File</label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div class="form-label-group in-border">
                              <input
                                type="file"
                                className="form-control name"
                                id="ex1"
                                placeholder="(No File Chosen)"
                              />
                              <label for="ex1">Choose File</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="check-wrapper">
                        <h4>
                          Check If You Meet Any ECP Qualification Requirements
                          (Likely #10) And Supply Supporting Documents (E.G.
                          Evidence Of $10M In Assets) :
                        </h4>
                      </div>
                      <div className="form-group row">
                        <div className="col-lg-6">
                          <div class="form-label-group in-border">
                            <input
                              type="file"
                              className="form-control name"
                              id="ex1"
                              placeholder="(No File Chosen)"
                            />
                            <label for="ex1">Proof of Qualification</label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div class="form-label-group in-border">
                            <input
                              type="text"
                              className="form-control name"
                              id="ex1"
                              placeholder="ECP qualification criterion"
                            />
                            <label for="ex1">ECP Qualification</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-lg-9">
                          <div class="form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck1"
                            />
                            <label class="form-check-label" for="exampleCheck1">
                              I hereby confirm that the above given information
                              is correct and I agree to the terms & Conditions &
                              privacy Policy.
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-3 text-right">
                          <div className="form-group">
                            <button className="btn">Submit</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* on Boarding ends here */}
      <Footer />
    </>
  );
};

export default Onboarding;
