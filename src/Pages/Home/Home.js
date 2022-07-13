import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {
  banner_img,
  banner_polygon,
  banner_dots,
  MetaMask,
  manage_Binance,
  Coinbase,
  mobile,
  laptop,
  wallet,
  select_coin,
  Liquality,
  Portis,
  faq_img,
  faq_coin,
  buzz1,
  john_doe,
  buzz2,
  buzz3,
  current_buzz,
  bitcoin_yellow,
  yellow_graph,
  skyblue_graph,
  bitcoin_blue,
  purple_graph,
  eth,
  Evans,
  red_graph,
  btc,
  blue_graph,
  coin_sec,
  select_after,
} from "../../constant/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "animate.css";
import WOW from "wowjs";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <Header />
      {/* banner starts here */}
      <section className="banner-sec">
        <div className="container-fluid">
          <div className="row banner-row-wrapper">
            <div className="col-lg-2"></div>
            <div className="col-lg-4 align-self-center px-0">
              <div className="banner-content wow animate__animated animate__fadeInLeft">
                <h1>Monitor Crypto Portfolio Of User In Real Time.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
                <button className="btn">Get Started</button>
                <button className="btn">How it works</button>
              </div>
            </div>
            <div className="col-lg-6 px-0">
              <div className="banner-img-wrapper">
                <img
                  className="banner-img img-fluid wow animate__animated animate__fadeInRight"
                  src={banner_img}
                  alt="banner-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ploy-img-wrapper">
          <img
            src={banner_polygon}
            className="img-fluid "
          />
        </div>
      </section>
      {/* banner ends here */}
      {/* manage starts  here */}
      <section className="manage-sec">
        <div className="dots-img-wrapper">
          <img src={banner_dots} className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="platform-wrapper wow animate__animated animate__fadeInLeft">
                <div className="platform-card-wrapper">
                  <div className="platform-img-wrapper">
                    <img src={MetaMask} className="img-fluid" alt="MetaMask" />
                  </div>
                  <div className="platform-name-wrapper">
                    <h3>MetaMask</h3>
                    <a href="#">
                      Connect <i className="fa-angle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="platform-card-wrapper">
                  <div className="platform-img-wrapper">
                    <img
                      src={manage_Binance}
                      className="img-fluid"
                      alt="manage_Binance"
                    />
                  </div>
                  <div className="platform-name-wrapper">
                    <h3>Binance</h3>
                    <a href="#">
                      Connect <i className="fa-angle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="platform-card-wrapper">
                  <div className="platform-img-wrapper">
                    <img src={Coinbase} className="img-fluid" alt="Coinbase" />
                  </div>
                  <div className="platform-name-wrapper">
                    <h3>Coinbase</h3>
                    <a href="#">
                      Connect <i className="fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="content-wrapper wow animate__animated animate__fadeInRight">
                <h2>Manage Your Crypto And Defi Portfolio From One Place</h2>
                <div className="divider"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including of Lorem Ipsum.
                </p>
                <a href="#" className="btn">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* manage ends  here */}
      {/* hardtype starts here */}
      <section className="hard-type">
        <div className="dots-wrapper">
          <img src={banner_dots} className="img-fluid" alt="select_coin" />
        </div>
        <div className="select-coin-wrapper">
          <img src={select_coin} className="img-fluid" alt="select_coin" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper text-center wow animate__animated animate__fadeInDown">
                <h2>Select Your Hardware Type</h2>
                <div className="divider"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-4">
              <div className="hard-card-wrapper wow animate__animated animate__fadeInLeft">
                <div className="hard-img-wrapper">
                  <img src={mobile} className="img-fluid" alt="mobile" />
                </div>
                <div className="hard-content-wrapper">
                  <h4>Mobile</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  <a href="#">
                    Connect <i className="fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hard-card-wrapper wow animate__animated animate__fadeInDown">
                <div className="hard-img-wrapper">
                  <img src={laptop} className="img-fluid" alt="laptop" />
                </div>
                <div className="hard-content-wrapper">
                  <h4>Computer</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  <a href="#">
                    Connect <i className="fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hard-card-wrapper wow animate__animated animate__fadeInRight">
                <div className="hard-img-wrapper">
                  <img src={wallet} className="img-fluid" alt="wallet" />
                </div>
                <div className="hard-content-wrapper">
                  <h4>Wallet</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                  <a href="#">
                    Connect <i className="fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="select-after">
          <img src={select_after} />
        </div>
      </section>
      {/* hardtype starts here */}
      {/* Browser Wallet starts  here */}
      <section className="Browser-Wallet-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-wrapper wow animate__animated animate__fadeInLeft">
                <h2>Select Browser Wallet Type</h2>
                <div className="divider"></div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic
                </p>
                <a href="#" className="btn">
                  Learn more
                </a>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <div className="platform-wrapper wow animate__animated animate__fadeInRight">
                <div className="platform-card-wrapper">
                  <div className="platform-img-wrapper">
                    <img src={Liquality} className="img-fluid" alt="MetaMask" />
                  </div>
                  <div className="platform-name-wrapper">
                    <h3>Liquality</h3>
                    <a href="#">
                      Connect <i className="fa-angle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="platform-card-wrapper">
                  <div className="platform-img-wrapper">
                    <img
                      src={MetaMask}
                      className="img-fluid"
                      alt="manage_Binance"
                    />
                  </div>
                  <div className="platform-name-wrapper">
                    <h3>MetaMask</h3>
                    <a href="#">
                      Connect <i className="fa-angle-right"></i>
                    </a>
                  </div>
                </div>
                <div className="platform-card-wrapper Portis">
                  <div className="platform-img-wrapper">
                    <img src={Portis} className="img-fluid" alt="Portis" />
                  </div>
                  <div className="platform-name-wrapper">
                    <h3>Portis</h3>
                    <a href="#">
                      Connect <i className="fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Browser Wallet ends  here */}
      {/* trading coins starts here */}
      <section className="trading_coins">
        <div className="coin-sec">
          <img src={coin_sec} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper wow animate__animated animate__fadeInDown">
                <h2>Current Trading Coins</h2>
                <div className="divider"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-5">
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
            <div className="col-lg-3">
              <div className="trading-card-wrapper">
                <div className="trading-icon-wrapper">
                  <img src={eth} className="icon-img" />
                </div>
                <div className="coin-wrapper">
                  <div className="coin-name-wrapper">
                    <h3>Bitcoin BTC</h3>
                    <h4>+789456123</h4>
                    <h6 className="margin">+12%</h6>
                  </div>
                  <div className="cart-wrapper">
                    <h6 className="btc">BTC</h6>
                    <img src={blue_graph} />
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
                    <h3>Bitcoin BTC</h3>
                    <h4>+789456123</h4>
                    <h6 className="margin">+12%</h6>
                  </div>
                  <div className="cart-wrapper">
                    <h6 className="btc">BTC</h6>
                    <img src={red_graph} />
                  </div>
                </div>
              </div>
            </div>
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
            <div className="col-lg-3">
              <div className="trading-card-wrapper">
                <div className="trading-icon-wrapper">
                  <img src={eth} className="icon-img" />
                </div>
                <div className="coin-wrapper">
                  <div className="coin-name-wrapper">
                    <h3>Bitcoin BTC</h3>
                    <h4>+789456123</h4>
                    <h6 className="margin">+12%</h6>
                  </div>
                  <div className="cart-wrapper">
                    <h6 className="btc">BTC</h6>
                    <img src={blue_graph} />
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
                    <h3>Bitcoin BTC</h3>
                    <h4>+789456123</h4>
                    <h6 className="margin">+12%</h6>
                  </div>
                  <div className="cart-wrapper">
                    <h6 className="btc">BTC</h6>
                    <img src={red_graph} />
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
        <div className="dots-wrapper">
          <img src={banner_dots} />
        </div>
      </section>
      {/* trading coins ends here */}
      {/* current buzz starts here */}
      <section className="current_buzz">
        <div className="current-bizz">
          <img src={current_buzz} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrapper wow animate__animated animate__fadeInDown">
                <h2>Current Buzz</h2>
                <p>
                  Guides And Articles Within The Bitcoin, Ethereum and
                  Cryptocurrency Space
                </p>
                <div className="divider"></div>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-12">
              <Slider {...settings}>
                <div className="col-lg-12">
                  <div className="blog-card-wrapper">
                    <div className="blog-img-wrapper">
                      <img src={buzz1} className="img-fluid" />
                    </div>
                    <div className="blog-content-wrapper">
                      <h5>Ethereum Re-orgs, Crypto Decouples</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                      <div className="blog-btn-name">
                        <button className="btn">Learn more</button>
                        <div className="name-wrapper">
                          <img src={john_doe} className="img-fluid" />
                          <div className="name-and-date">
                            <h4>John Doe</h4>
                            <h6>1, 07 2022</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog-card-wrapper">
                    <div className="blog-img-wrapper">
                      <img src={buzz2} className="img-fluid" />
                    </div>
                    <div className="blog-content-wrapper">
                      <h5>Ethereum Re-orgs, Crypto Decouples</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                      <div className="blog-btn-name">
                        <button className="btn">Learn more</button>
                        <div className="name-wrapper">
                          <img src={john_doe} className="img-fluid" />
                          <div className="name-and-date">
                            <h4>John Doe</h4>
                            <h6>1, 07 2022</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog-card-wrapper">
                    <div className="blog-img-wrapper">
                      <img src={buzz3} className="img-fluid" />
                    </div>
                    <div className="blog-content-wrapper">
                      <h5>Ethereum Re-orgs, Crypto Decouples</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                      <div className="blog-btn-name">
                        <button className="btn">Learn more</button>
                        <div className="name-wrapper">
                          <img src={john_doe} className="img-fluid" />
                          <div className="name-and-date">
                            <h4>John Doe</h4>
                            <h6>1, 07 2022</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog-card-wrapper">
                    <div className="blog-img-wrapper">
                      <img src={buzz1} className="img-fluid" />
                    </div>
                    <div className="blog-content-wrapper">
                      <h5>Ethereum Re-orgs, Crypto Decouples</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                      </p>
                      <div className="blog-btn-name">
                        <button className="btn">Learn more</button>
                        <div className="name-wrapper">
                          <img src={john_doe} className="img-fluid" />
                          <div className="name-and-date">
                            <h4>John Doe</h4>
                            <h6>1, 07 2022</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="dots-wrapper">
          <img src={banner_dots} className="img-fluid" />
        </div>
      </section>
      {/* current buzz ends here */}
      {/* faq wrapper starts here */}
      <section className="faq">
        <div className="faq-coin">
          <img src={faq_coin} className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-img-wrapper">
                <img src={faq_img} className="img-fluid wow animate__animated animate__fadeInLeft" alt="faq_img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content-wrapper wow animate__animated animate__fadeInRight">
                <h2>FAQ's</h2>
                <div className="divider"></div>
              </div>
              <div className="accordion wow animate__animated animate__fadeInRight" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span>What does coinvaleez do?</span>
                        <span>
                          <i className="fa-plus"></i>
                        </span>
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span>What does coinvaleez do?</span>
                        <span>
                          <i className="fa-plus"></i>
                        </span>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span>Is coinvaleez safe?</span>
                        <span>
                          <i className="fa-plus"></i>
                        </span>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <span>How do I transfer money to coinvaleez?</span>
                        <span>
                          <i className="fa-plus"></i>
                        </span>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFive">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <span>How do I transfer money to coinvaleez?</span>
                        <span>
                          <i className="fa-plus"></i>
                        </span>
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq wrapper ends here */}
      <Footer />
    </>
  );
};

export default Home;
