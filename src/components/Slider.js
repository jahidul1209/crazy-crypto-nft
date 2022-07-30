import React from 'react';
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <div>
		<section id="banner">
			<div className="swiper-container banner-slider" data-swiper-config='{"loop": true, "effect": "slide", "prevButton":"#banner-nav-prev", "nextButton": "#banner-nav-next", "speed": 800, "autoplay": 5000, "grabCursor": true, "paginationClickable": true}'>

				<div className="swiper-wrapper">
					
					<div className="swiper-slide" data-bg-image="/media/banner/1.jpg">
						<div className="slider-content-two" data-animate="fadeIn">
                         
							<h2 data-animate="fadeInUp"><span> We are</span> Launching</h2>
							<h2 data-animate="fadeInUp">on</h2>
						 <h2 data-animate="fadeInUp" data-delay="0.5s"><span> 28 NOVEMBER</span></h2>
					</div>
					
				</div>
					
					
					<div className="swiper-slide" data-bg-image="/media/banner/2.jpg">
					
						{/*
						<div className="slider-content-two" data-animate="fadeIn">
                        
						    <h2 data-animate="fadeInUp"><span>CrazyCreatures</span> V/s </h2>
							<h2 data-animate="fadeInUp" data-delay="0.5s">MetaMonsters </h2>

							<Link to ="#" className="popup-btn" data-animate="fadeInRight" data-delay="0.9s">
									<i className="fa fa-star"></i>
								Mint Page
							</Link>
						
							
						</div>
						*/}

					</div>
					
					
			
				</div>

				<div id="banner-nav-prev" className="fire-nav-prev">
					<i className="fa fa-angle-left"></i>
				</div>
				<div id="banner-nav-next" className="fire-nav-next">
					<i className="fa fa-angle-right"></i>
				</div>
			</div>
		</section>
        </div>
    );
}

export default Slider;