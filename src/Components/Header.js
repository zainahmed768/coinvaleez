import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logo } from "../constant";
import $ from "jquery";

const Header = () => {
	useEffect(() => {
		// Mobile Nav
		$("document").ready(function () {
			$("header .canvas-icon i").click(function () {
				$("header .mobile-header").addClass("show");
			});

			$("header .mobile-header .cancel").click(function () {
				$("header .mobile-header").removeClass("show");
			});
		});
		// Mobile Nav
	}, []);
	return (
		<>
			<header id="top">
				<div className="container">
					<div className="row">
						<div className="col-5">
							<div className="logo-wrapper">
								<Link to="/">
									<img src={logo} className="img-fluid" alt="logo" />
								</Link>
							</div>
						</div>
						<div className="col-7">
							<div className="mennu-wrapper">
								<ul className="navbar-nav">
									<li className="nav-item">
										<Link className="nav-link" to="/">
											Home
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/">
											About
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/onboarding">
											Onboard
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/">
											Contact Us
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link btn" to="/ConnectWallet">
											Connect Wallet
										</Link>
									</li>
								</ul>
								<div className="canvas-icon text-white">
									<i className="fa fa-bars" aria-hidden="true"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mobile-header">
					<div className="cancel">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							fill="currentColor"
							className="bi bi-x"
							viewBox="0 0 16 16"
						>
							<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
					<ul className="mobile-nav">
						<li className="nav-item">
							<a href="/">Home</a>
						</li>
						<li className="nav-item">
							<a href="#">About</a>
						</li>
						<li className="nav-item">
							<a href="/onboarding">Exchange</a>
						</li>
						<li className="nav-item">
							<a href="#">Contact Us</a>
						</li>
						<li className="nav-item">
							<a href="/ConnectWallet">Connect Wallet</a>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
};

export default Header;
