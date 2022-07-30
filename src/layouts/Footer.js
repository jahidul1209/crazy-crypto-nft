import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
        <div>
        {/* <!--=======================-->
		<!--=        Footer       =-->
		<!--=======================--> */}
		<footer id="footer">
			<div className="section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-4">
                        <div className="footer-about">
								<h3 className="footer-title">About</h3>
								<div className="content">
									<p>
									The vision of CrazyCryptoNFT is to create an advance integrated gaming platform in the metaverse for its users and the community. 
									</p>
								</div>

								<ul className="footer-social-link">
									<li className="fb-bg"><a href="https://discord.gg/RQ5WCtFnCJ"><i className="fab fa-discord"></i></a></li>
									<li className="in-bg"><a href="https://www.instagram.com/crazycryptonft/"><i className="fab fa-instagram"></i></a></li>
									<li className="tw-bg"><a href="https://twitter.com/CrazyCryptoNFTs"><i className="fab fa-twitter"></i></a></li>
								</ul>
							</div>
							{/* <!-- /.footer-about --> */}
						</div>

						<div className="col-lg-3 col-md-4">
							<div className="footer-about">
								<h3 className="footer-title">Contact Us</h3>
								<div className="contact-items">
									<h4 className="title"><i className="fa fa-pencil-ruler"></i>Business Enquiry</h4>
									<p className="email"> info@crazycryptonft.com</p>
								</div>

							
							</div>
							{/* <!-- /.footer-about --> */}
						</div>

						<div className="col-lg-3 col-md-4">
                            <div class="footer-menu-inner">
								<h3 class="footer-title">Useful Links</h3>

								<ul class="footer-menu-list">
									<li><a href="/">Home</a></li>
									<li><Link to="#">Mint</Link></li>
									<li><Link to ="/road-map">Road Map</Link></li>

								</ul>
							</div>
							{/* <!-- /.footer-about --> */}
						</div>
	
						<div className="col-lg-3 col-md-4">
							<div className="top-game">
								<h3 className="footer-title">Weekly top NFTs</h3>

								<a href="#"><img src="media/boar-nft/27.png" alt="thumb"/></a>
								<a href="#"><img src="media/boar-nft/28.png" alt="thumb"/></a>
								<a href="#"><img src="media/boar-nft/39.png" alt="thumb"/></a>
								<a href="#"><img src="media/boar-nft/3.png" alt="thumb"/></a>
								<a href="#"><img src="media/boar-nft/38.png" alt="thumb"/></a>
								<a href="#"><img src="media/boar-nft/35.png" alt="thumb"/></a>

							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="copy-right">
					<p>Copyright 2021 <a href="https://www.crazycryptonft.com/" target="_blank" rel="noopener noreferrer">CrazyCryptoNFT</a> All Rights Reserved</p>
				</div>
			</div>
        </footer>
   </div>
   );
 }
}

export default Footer;