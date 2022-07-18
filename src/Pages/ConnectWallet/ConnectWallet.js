import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "../../assets/css/ConnectWallet.css";
import {
  bitcoin_yellow,
  yellow_graph,
  bitcoin_blue,
  skyblue_graph,
  btc,
  purple_graph,
  Evans,
  red_graph,
  search_icon,
  chart_img,
} from "../../constant/index";

const ConnectWallet = () => {
  return (
    <>
      <Header />
      {/* wallet sec starts here */}
      <section className="wallet-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="collect-wrapper">
                <h4>Connected Wallet</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, Lorem Ipsum is
                  simply dummy text of the printing and types etting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
              </div>
            </div>
          </div>
          <div className="coin-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="trading-card-wrapper">
                    <div className="trading-icon-wrapper">
                      <img src={btc} className="icon-img" />
                    </div>
                    <div className="coin-wrapper">
                      <div className="coin-name-wrapper">
                        <h3>Bitcoin BTC</h3>
                        <h4>+789456123</h4>
                        <h6 className="margin">+12%</h6>
                      </div>
                      <div className="cart-wrapper">
                        <h6 className="btc">BTC</h6>
                        <img src={purple_graph} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="trading-card-wrapper">
                    <div className="trading-icon-wrapper">
                      <img src={Evans} className="icon-img" />
                    </div>
                    <div className="coin-wrapper">
                      <div className="coin-name-wrapper">
                        <h3>Evans EVS</h3>
                        <h4>+789456123</h4>
                        <h6 className="margin">+12%</h6>
                      </div>
                      <div className="cart-wrapper">
                        <h6 className="btc">EVNS</h6>
                        <img src={red_graph} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="trading-card-wrapper">
                    <div className="trading-icon-wrapper">
                      <img src={bitcoin_yellow} className="icon-img" />
                    </div>
                    <div className="coin-wrapper">
                      <div className="coin-name-wrapper">
                        <h3>Bitcoin BTC</h3>
                        <h4>+789456123</h4>
                        <h6 className="margin">+12%</h6>
                      </div>
                      <div className="cart-wrapper">
                        <h6 className="btc">BTC</h6>
                        <img src={yellow_graph} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="trading-card-wrapper">
                    <div className="trading-icon-wrapper">
                      <img src={bitcoin_blue} className="icon-img" />
                    </div>
                    <div className="coin-wrapper">
                      <div className="coin-name-wrapper">
                        <h3>Bitcoin BTC</h3>
                        <h4>+789456123</h4>
                        <h6 className="margin">+12%</h6>
                      </div>
                      <div className="cart-wrapper">
                        <h6 className="btc">BTC</h6>
                        <img src={skyblue_graph} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-12">
              <div className="tab-wrapper">
                <div className="assets-heading-wrapper">
                  <h3>Assets View Tab</h3>
                </div>
                <div className="tab-content-wrapper">
                  <div className="tab-links-wrapper">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Vested Assets
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="profile-tab"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Non-Vested Assets
                        </a>
                      </li>
                    </ul>
                    <div className="search-wrapper">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search Coin Name"
                      />
                      <button>
                        <img src={search_icon} />
                      </button>
                    </div>
                  </div>

                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th className="index" scope="col">
                                #
                              </th>
                              <th className="Asset" scope="col">
                                Asset
                              </th>
                              <th className="Balance" scope="col">
                                Total Balance
                              </th>
                              <th className="Dollar" scope="col">
                                Dollar Balance
                              </th>
                              <th className="Chart" scope="col">
                                Chart
                              </th>
                              <th className="Action" scope="col">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="rating">
                                <i className="fa fa-star-o"></i> 1
                              </td>
                              <td className="Asset-name">
                                <div className="assets-wrapper">
                                  <img src={bitcoin_yellow} />
                                  <h5>Bitcoin BTC</h5>
                                </div>
                              </td>
                              <td className="balance-wrapper">0.006</td>
                              <td className="dollar-wrapper">USD 25.109</td>
                              <td className="chart-wrapper">
                                <div className="chart-img-wrapper">
                                  <img src={chart_img} />
                                </div>
                              </td>
                              <td className="button-wrapper">
                                <div className="btn-wrapper">
                                  <button className="btn">Buy</button>
                                  <button className="btn">Deposit</button>
                                  <button className="btn">Withdraw</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="rating">
                                <i className="fa fa-star-o"></i> 2
                              </td>
                              <td className="Asset-name">
                                <div className="assets-wrapper">
                                  <img src={bitcoin_yellow} />
                                  <h5>Bitcoin BTC</h5>
                                </div>
                              </td>
                              <td className="balance-wrapper">0.006</td>
                              <td className="dollar-wrapper">USD 25.109</td>
                              <td className="chart-wrapper">
                                <div className="chart-img-wrapper">
                                  <img src={chart_img} />
                                </div>
                              </td>
                              <td className="button-wrapper">
                                <div className="btn-wrapper">
                                  <button className="btn">Buy</button>
                                  <button className="btn">Deposit</button>
                                  <button className="btn">Withdraw</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="rating">
                                <i className="fa fa-star-o"></i> 3
                              </td>
                              <td className="Asset-name">
                                <div className="assets-wrapper">
                                  <img src={bitcoin_yellow} />
                                  <h5>Bitcoin BTC</h5>
                                </div>
                              </td>
                              <td className="balance-wrapper">0.006</td>
                              <td className="dollar-wrapper">USD 25.109</td>
                              <td className="chart-wrapper">
                                <div className="chart-img-wrapper">
                                  <img src={chart_img} />
                                </div>
                              </td>
                              <td className="button-wrapper">
                                <div className="btn-wrapper">
                                  <button className="btn">Buy</button>
                                  <button className="btn">Deposit</button>
                                  <button className="btn">Withdraw</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="rating">
                                <i className="fa fa-star-o"></i> 4
                              </td>
                              <td className="Asset-name">
                                <div className="assets-wrapper">
                                  <img src={bitcoin_yellow} />
                                  <h5>Bitcoin BTC</h5>
                                </div>
                              </td>
                              <td className="balance-wrapper">0.006</td>
                              <td className="dollar-wrapper">USD 25.109</td>
                              <td className="chart-wrapper">
                                <div className="chart-img-wrapper">
                                  <img src={chart_img} />
                                </div>
                              </td>
                              <td className="button-wrapper">
                                <div className="btn-wrapper">
                                  <button className="btn">Buy</button>
                                  <button className="btn">Deposit</button>
                                  <button className="btn">Withdraw</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="rating">
                                <i className="fa fa-star-o"></i> 5
                              </td>
                              <td className="Asset-name">
                                <div className="assets-wrapper">
                                  <img src={bitcoin_yellow} />
                                  <h5>Bitcoin BTC</h5>
                                </div>
                              </td>
                              <td className="balance-wrapper">0.006</td>
                              <td className="dollar-wrapper">USD 25.109</td>
                              <td className="chart-wrapper">
                                <div className="chart-img-wrapper">
                                  <img src={chart_img} />
                                </div>
                              </td>
                              <td className="button-wrapper">
                                <div className="btn-wrapper">
                                  <button className="btn">Buy</button>
                                  <button className="btn">Deposit</button>
                                  <button className="btn">Withdraw</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="rating">
                                <i className="fa fa-star-o"></i> 6
                              </td>
                              <td className="Asset-name">
                                <div className="assets-wrapper">
                                  <img src={bitcoin_yellow} />
                                  <h5>Bitcoin BTC</h5>
                                </div>
                              </td>
                              <td className="balance-wrapper">0.006</td>
                              <td className="dollar-wrapper">USD 25.109</td>
                              <td className="chart-wrapper">
                                <div className="chart-img-wrapper">
                                  <img src={chart_img} />
                                </div>
                              </td>
                              <td className="button-wrapper">
                                <div className="btn-wrapper">
                                  <button className="btn">Buy</button>
                                  <button className="btn">Deposit</button>
                                  <button className="btn">Withdraw</button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="pagination-wrapper">
                        <div className="total-record-wrapper">
                          <p>1-20 of 400 Assets</p>
                        </div>
                        <div className="pagination-list-wrapper">
                          <ul>
                            <li>
                              <a className="pagination-links pagination-icon">
                                <i className="fa fa-angle-left"></i>
                              </a>
                            </li>
                            <li>
                              <a className="pagination-links active">1</a>
                            </li>
                            <li>
                              <a className="pagination-links">2</a>
                            </li>
                            <li>
                              <a className="pagination-links">3</a>
                            </li>
                            <li>
                              <a className="pagination-links">4</a>
                            </li>
                            <li>
                              <span>...</span>
                            </li>
                            <li>
                              <a className="pagination-links pagination-icon">
                                <i className="fa fa-angle-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th className="index" scope="col">
                                #
                              </th>
                              <th className="Asset" scope="col">
                                Asset
                              </th>
                              <th className="Balance" scope="col">
                                Locked Amount
                              </th>
                              <th className="Dollar" scope="col">
                                Dollar Balance
                              </th>
                              <th className="Action" scope="col">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="rating">
                                <i className="fa fa-star-o"></i> 1
                              </td>
                              <td className="Asset-name">
                                <div className="assets-wrapper">
                                  <img src={bitcoin_yellow} />
                                  <h5>Bitcoin BTC</h5>
                                </div>
                              </td>
                              <td className="balance-wrapper">0.006</td>
                              <td className="dollar-wrapper">USD 25.109</td>

                              <td className="button-wrapper">
                                <div className="btn-wrapper">
                                  <button className="btn">Withdraw</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="rating">
                                <i className="fa fa-star-o"></i> 2
                              </td>
                              <td className="Asset-name">
                                <div className="assets-wrapper">
                                  <img src={bitcoin_yellow} />
                                  <h5>Bitcoin BTC</h5>
                                </div>
                              </td>
                              <td className="balance-wrapper">0.006</td>
                              <td className="dollar-wrapper">USD 25.109</td>

                              <td className="button-wrapper">
                                <div className="btn-wrapper">
                                  <button className="btn">Withdraw</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="rating">
                                <i className="fa fa-star-o"></i> 3
                              </td>
                              <td className="Asset-name">
                                <div className="assets-wrapper">
                                  <img src={bitcoin_yellow} />
                                  <h5>Bitcoin BTC</h5>
                                </div>
                              </td>
                              <td className="balance-wrapper">0.006</td>
                              <td className="dollar-wrapper">USD 25.109</td>

                              <td className="button-wrapper">
                                <div className="btn-wrapper">
                                  <button className="btn">Withdraw</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="rating">
                                <i className="fa fa-star-o"></i> 4
                              </td>
                              <td className="Asset-name">
                                <div className="assets-wrapper">
                                  <img src={bitcoin_yellow} />
                                  <h5>Bitcoin BTC</h5>
                                </div>
                              </td>
                              <td className="balance-wrapper">0.006</td>
                              <td className="dollar-wrapper">USD 25.109</td>

                              <td className="button-wrapper">
                                <div className="btn-wrapper">
                                  <button className="btn">Withdraw</button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="pagination-wrapper">
                        <div className="total-record-wrapper">
                          <p>1-20 of 400 Assets</p>
                        </div>
                        <div className="pagination-list-wrapper">
                          <ul>
                            <li>
                              <a className="pagination-links pagination-icon">
                                <i className="fa fa-angle-left"></i>
                              </a>
                            </li>
                            <li>
                              <a className="pagination-links active">1</a>
                            </li>
                            <li>
                              <a className="pagination-links">2</a>
                            </li>
                            <li>
                              <a className="pagination-links">3</a>
                            </li>
                            <li>
                              <a className="pagination-links">4</a>
                            </li>
                            <li>
                              <span>...</span>
                            </li>
                            <li>
                              <a className="pagination-links pagination-icon">
                                <i className="fa fa-angle-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* wallet sec ends here */}
      <Footer />
    </>
  );
};

export default ConnectWallet;
