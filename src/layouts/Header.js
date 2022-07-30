import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
     <div>
		<header className="header header-one">

         <div className="nav">
				<div className="container">
					<div className="nav-wrap">
						<div id="site-logo">
							<a href="/">
						<img src="assets/img/logo.png" alt="Site Logo" width = '212px'/>
					</a>
						</div>
						<ul className="tim-nav text-right">
						<li><a href="/">Home</a></li>
							<li><Link to ="/road-map">Road Map</Link></li>
                            <li><Link to ="/mint">Mint</Link></li>
							<li className="nav-item search-btn">
								<i className="fa fa-search"></i>
							</li>
						</ul>
						<div className="top-search-form">
							<form action="#" className="search-form">
								<input type="text" name="search" placeholder="Search...."/>
								<button type="submit"><i className="fa fa-search"></i></button>
								<div className="sea-fire"><canvas width="402" height="40" className=" fireJqueryPlugin3Canvas0"></canvas></div>
							</form>
						</div>
					</div>
					
				</div>
			</div>
		</header>
		 {/* /#header  */}

		{/*-================================
		        Mobile Navbar        
		 ================================ */}
		<header id="mobile-nav-wrap">
			<div className="mob-header-inner d-flex justify-content-between">
				<div id="mobile-logo" className="d-flex justify-content-start">
					<a href="/"><img src="assets/img/logo.png" alt="Site Logo"/></a>
				</div>
				<div id="nav-toggle" className="nav-toggle hidden-md">
					<div className="toggle-inner">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		{/* /.mob-header-inner */}
		</header>
	{/* /#mobile-header */}

		<div className="mobile-menu-inner">

			<div className="close-menu">
				<span className="bar"></span>
				<span className="bar"></span>
			</div>

			<nav id="accordian">
				<ul className="accordion-menu">
					<li>
						<a href ="/">Home</a>
					</li>
					<li>
						<Link to="/road-map">Road Map</Link>
					</li>
					<li>
						<a href ="#">Mint</a>
					</li>
				</ul>
			</nav>

			<form action="#" id="moble-search">
				<input type="text" placeholder="Search...."/>
				<button type="submit"><i className="fa fa-search"></i></button>
			</form>
		 {/* /#moble-search  */}

		                      <ul className="footer-social-link">
									<li className="fb-bg"><a href="https://discord.com/invite/M5bjkkB4Uj"><i className="fab fa-discord"></i></a></li>
									<li className="in-bg"><a href="https://www.instagram.com/crazycryptonft/"><i className="fab fa-instagram"></i></a></li>
									<li className="tw-bg"><a href="https://twitter.com/CrazyCryptoNFTs"><i className="fab fa-twitter"></i></a></li>
								</ul>
		</div>
		 {/* /.mobile-menu-inne */}

      </div>
      );
   }
}

export default Header;