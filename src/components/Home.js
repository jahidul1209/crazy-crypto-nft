import React ,{useEffect}from 'react';
import Slider from './Slider';


function Home() {
	useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
          <Slider/>
		  <section id="beyond">
		 	<div className="container">
				<div className="section-title">
					<h3 className="sub-title wow fadeInUp" data-wow-duration="1000ms">Come to The End Of The World</h3>
					<h2 className="title wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.2s">See What Lies <span>Beyond</span></h2>
					<span className="delemitter  wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.4s" data-bg-image="media/banner/s1.png"></span>

					<div className="section-content  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.5s">
						<p>
						MetaMonsters have raged a war against our world. To protect the earth, the Creatures have <br></br> no other option, but to born, rise, evolve and call upon the war against MetaMonsters. 
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="beyond-content">
							<div className="section-mini-title  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.7s">
								<h2 className="title">BeastyBoar</h2>
							</div>
							<p className="content  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.8s">
                            First line of the Crazy Creatures named BeastyBoar will rise, evolve and participate in war raged against the extraordinary creatures of MetaMonsters. Boar is one of the mythical creatures taken from Hindu Mythology (Sanskrit name: “Varaha”),
                             who was the 10th incarnations (avatars) of the Hindu god named Vishnu.
							</p>

							<p className="content content-two  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1s">
                            BeastyBoar will inherit the traits of land element of earth and they will possess the war skills and powers of mythical god.
							</p>

						</div>
					</div>

					<div className="col-md-6">
						<div className="game-items">
							<div className="row">
								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.7s">
								<a href="#">
									<img src="media/boar-nft/1.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1100ms" data-wow-delay="0.7s">
								<a href="#">
									<img src="media/boar-nft/2.png" alt="game-thumb"/>
									
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1200ms" data-wow-delay="0.7s">
								<a href="#">
									<img src="media/boar-nft/3.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1300ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/boar-nft/4.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1400ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/boar-nft/5.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1500ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/boar-nft/6.png" alt="game-thumb"/>
								</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            {/* ScrewyShark */}
            <div className="container mt-5">
                <div className="row">
					<div className="col-md-6">
						<div className="game-items">
							<div className="row">
								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/shark-nft/ScrewyShark_1.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1100ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/shark-nft/ScrewyShark_13.png" alt="game-thumb"/>
									{/* <h3 className="game-title">Corpse Killer</h3> */}
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1200ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/shark-nft/ScrewyShark_3.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1300ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/shark-nft/ScrewyShark_4.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1400ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/shark-nft/ScrewyShark_5.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1500ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/shark-nft/ScrewyShark_6.png" alt="game-thumb"/>
								</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="beyond-content">
							<div className="section-mini-title  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.7s">
								<h2 className="title">ScrewyShark</h2>
							</div>
							<p className="content  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.8s">
                            More than 70% of the earth consisted water and sea elements. This is the most uncharted area in the whole earth, which has never been explored completely and most of its creatures are still inheriting their natural traits. Such a less progressed 
                            evolution made the sea creatures most vulnerable to the rage of MetaMonsters.
							</p>

							<p className="content content-two  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1s">
                            So, to protect its fellow creatures, mighty Shark will evolve and rise and mutate itself to ScrewyShark.
                             They will come together with the BeastyBoars and rage a war against the MetaMonsters.
							</p>

						</div>
					</div>
				</div>
			</div>
            {/* HerculesHippogriff */}
            <div className="container mt-5">
				<div className="row">
					<div className="col-md-6">
						<div className="beyond-content">
							<div className="section-mini-title  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.7s">
								<h2 className="title">HerculesHippogriff</h2>
							</div>
							<p className="content  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.8s">
                             Third line of the Crazy Creatures named Hercules Hippogriff is a legendry creature that has the foreparts of a winged griffin and the body and hindquarters of a horse. They were supposedly a symbol of the Greek god Apollo.
                             Their supposed to be fallen and instinct long before the evolution of human.
							</p>

							<p className="content content-two  wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1s">
                            But, now the rage of MetaMonsters can’t be controlled be normal creatures, so it is necessary that a legendry creature should awake again and lead other warrior creatures against the combat and warfare with MetaMonsters.
							</p>

						</div>
					</div>

					<div className="col-md-6">
						<div className="game-items">
							<div className="row">
								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/question.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1100ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/question.png" alt="game-thumb"/>
									{/* <h3 className="game-title">Corpse Killer</h3> */}
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1200ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/question.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1300ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/question.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1400ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/question.png" alt="game-thumb"/>
								</a>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-6">
									<div className="game-item wow fadeIn" data-wow-duration="1500ms" data-wow-delay="0.7s">
										<a href="#">
									<img src="media/question.png" alt="game-thumb"/>
								</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		

{/* 
		<!--===========================-->
		<!--=        Torurmant        =-->
		<!--===========================--> */}
		
		<section id="tournaments">
								
						<div className="section-title">
					
					<div className="title wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.9s">Upcoming <span>NFTs</span></div>
														
					</div>
				</section>
			<div  className="container">

				<div className="swiper-container tim-logo-carousel" data-swiper-config='{"loop": true, "speed": 700, "spaceBetween": 30, "autoplay": 3000, "pagination":"#brand-swiper-pagination", "slidesPerView": 3, "grabCursor": true, "paginationClickable": true, "breakpoints": { "991": { "slidesPerView": 2 }, "767": { "slidesPerView": 1 }}}'>
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="trurnament-inner wow fadeInRight" data-wow-duration="1000ms">
								<div className="torurmant clearfix">
									<div className="tgame game-item">
										<img src="media/boar-nft/12.png" alt="Game"/>
                                        <h4><a href="#">BeastyBoar #3401</a></h4>
									</div>
								</div>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="trurnament-inner wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0.3s">
								<div className="torurmant clearfix">
									<div className="tgame game-item">
										<img src="media/boar-nft/13.png" alt="Game"/>
										<h4><a href="#">BeastyBoar #5500</a></h4>
									</div>
								</div>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="trurnament-inner wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0.5s">
								<div className="torurmant clearfix">
									<div className="tgame game-item">
										<img src="media/boar-nft/14.png" alt="Game"/>
										<h4><a href="#">BeastyBoar #4536</a></h4>
									</div>
								</div>
							</div>
						</div>
                        <div className="swiper-slide">
							<div className="trurnament-inner wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0.5s">
								<div className="torurmant clearfix">
									<div className="tgame game-item">
										<img src="media/boar-nft/15.png" alt="Game"/>
										<h4><a href="#">BeastyBoar #9834</a></h4>
									</div>
								</div>
							</div>
						</div>
                        <div className="swiper-slide">
							<div className="trurnament-inner wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0.5s">
								<div className="torurmant clearfix">
									<div className="tgame game-item">
										<img src="media/boar-nft/16.png" alt="Game"/>
										<h4><a href="#">BeastyBoar #3542</a></h4>
									</div>
								</div>
							</div>
						</div>
                        <div className="swiper-slide">
							<div className="trurnament-inner wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0.5s">
								<div className="torurmant clearfix">
									<div className="tgame game-item">
										<img src="media/boar-nft/17.png" alt="Game"/>
										<h4><a href="#">BeastyBoar #2376</a></h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- /#tournaments --> */}

        {/* <!--=================================-->
		<!--=        Torurmant Count        =-->
		<!--=================================--> */}
		<section id="torurmant-count-two" className="pb__100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="torurmant-count">
							<div className="torurmant-title wow fadeInUp" data-wow-duration="1000ms">
								<h3>Latest Information</h3>
							</div>

				        	<div className="torurmant clearfix wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.3">
                                    <div className="tgame game-item">
									<video  id="myVideo"  controls autoplay>
										<source src="media/video/3.mp4" type="video/mp4"/>
									</video>

								</div>
							</div>

						</div>
						{/* <!-- /.torurmant-count --> */}
					</div>

					<div className="col-lg-4 col-md-12">
						<div className="game-wraper-tab">
							<div className="torurmant-title wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.3s">
								<h3>Clan Match News</h3>
							</div>

							<div className="game-tabs wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.9s">
								<ul className="tim-tab-nav-game nav" id="myTab-three" role="tablist">
									<li className="nav-item">
										<a className="nav-link active show" id="all_tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="false">ALL</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="gamer-tab" data-toggle="tab" href="#gamer" role="tab" aria-controls="gamer" aria-selected="true">BeastyBoar</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="screwyshark-tab" data-toggle="tab" href="#screwyshark" role="tab" aria-controls="screwyshark" aria-selected="true">ScrewyShark</a>
									</li>
								</ul>

								<div className="tab-content" id="gameTabContent">
									<div className="tab-pane active show" id="all" role="tabpanel" aria-labelledby="all_tab">
										<div className="letest-games">
                                           <a href = '#'><img src="media/boar-nft/28.png" alt="thumb"/></a>
										   <a href = '#'><img src="media/boar-nft/21.png" alt="thumb"/></a>
										   <a href = '#'><img src="media/boar-nft/27.png" alt="thumb"/></a>
										   <a href = '#'><img src="media/boar-nft/23.png" alt="thumb"/></a>
										   <a href = '#'><img src="media/shark-nft/ScrewyShark_1.png" alt="thumb"/></a>
										   <a href = '#'><img src="media/shark-nft/ScrewyShark_2.png" alt="thumb"/></a>
										   <a href = '#'><img src="media/boar-nft/29.png" alt="thumb"/></a>
										   <a href = '#'><img src="media/shark-nft/ScrewyShark_3.png" alt="thumb"/></a>
										   <a href = '#'><img src="media/boar-nft/41.png" alt="thumb"/></a>
										   <a href = '#'><img src="media/boar-nft/31.png" alt="thumb"/></a>
                                            
								    	</div>
                                    </div>
								<div className="tab-pane" id="gamer" role="tabpanel" aria-labelledby="gamer-tab">


                                    <div className="letest-games">
									<a href = '#'><img src="media/boar-nft/20.png" alt="thumb"/></a>
									<a href = '#'><img src="media/boar-nft/21.png" alt="thumb"/></a>
									<a href = '#'> <img src="media/boar-nft/22.png" alt="thumb"/></a>
									<a href = '#'> <img src="media/boar-nft/23.png" alt="thumb"/></a>
									<a href = '#'> <img src="media/boar-nft/24.png" alt="thumb"/></a>
									<a href = '#'><img src="media/boar-nft/25.png" alt="thumb"/></a>
									<a href = '#'><img src="media/boar-nft/26.png" alt="thumb"/></a>
									<a href = '#'><img src="media/boar-nft/27.png" alt="thumb"/></a>
									<a href = '#'> <img src="media/boar-nft/28.png" alt="thumb"/></a>
									<a href = '#'><img src="media/boar-nft/29.png" alt="thumb"/></a>
                                            
									</div>
                                </div>
								<div className="tab-pane" id="screwyshark" role="tabpanel" aria-labelledby="screwyshark-tab">											
                                    <div className="letest-games">
									<a href = '#'><img src="media/shark-nft/ScrewyShark_7.png" alt="thumb"/></a>
									<a href = '#'><img src="media/shark-nft/ScrewyShark_8.png" alt="thumb"/></a>
									<a href = '#'> <img src="media/shark-nft/ScrewyShark_9.png" alt="thumb"/></a>
									<a href = '#'><img src="media/shark-nft/ScrewyShark_10.png" alt="thumb"/></a>
									<a href = '#'><img src="media/shark-nft/ScrewyShark_11.png" alt="thumb"/></a>
									<a href = '#'><img src="media/shark-nft/ScrewyShark_12.png" alt="thumb"/></a>
									<a href = '#'><img src="media/shark-nft/ScrewyShark_2.png" alt="thumb"/></a>
									<a href = '#'><img src="media/shark-nft/ScrewyShark_14.png" alt="thumb"/></a>
									<a href = '#'><img src="media/shark-nft/ScrewyShark_15.png" alt="thumb"/></a>
									<a href = '#'><img src="media/shark-nft/ScrewyShark_16.png" alt="thumb"/></a>
                                            
									</div>
                                </div>
							</div>
						</div>
                        <div className="game-tabs wow fadeIn mt-2">
								<img src="media/banner/pigs3.jpg" alt="Game"/>
						</div> 						  
                    </div>				
            </div>	
            </div>	
            </div>		
		</section>
		{/* <!-- /#torurmant-count --> */}

        <section id="shop-post-two" className="site-main" data-bg-image="media/background/1.jpg" data-parallax="image">
			<div className="container">
				<div className="section-title">
					
					<h2 className="title wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.2s">Meet the <span>Team</span></h2>
					<span className="delemitter wow zoomIn" data-wow-duration="1000ms" data-wow-delay="0.4s" data-bg-image="media/banner/s1.png" style={{backgroundImage: 'url(media/banner/s1.png)'}}></span>

					<div className="section-content wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.5s">
						
					</div>
				</div>

				<div className="woocommerce columns-4">
					<ul className="products product-two wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.7s">
						<li className="product clearfix">
							<a href="#" className="woocommerce-LoopProduct-link">
								<div className="product-thumb">
									<img src="media/boar-nft/team-1.png" className="attachment-shop_catalog" alt="Product"/>
								</div>
								<h2 className="woocommerce-loop-product__title">Shashank</h2>
								<h2 className="woocommerce-loop-product__title">Founder & CEO</h2>
															</a>
						</li>

						<li className="product clearfix">
							<a href="#" className="woocommerce-LoopProduct-link">
								<div className="product-thumb">
									<img src="media/boar-nft/team-2.png" className="attachment-shop_catalog" alt="Product"/>
								</div>
								<h2 className="woocommerce-loop-product__title">Dinesh</h2>
								<h2 className="woocommerce-loop-product__title">Creator of BeastyBoar</h2>
							</a>
							
						</li>

						<li className="product clearfix">
							<a href="#" className="woocommerce-LoopProduct-link">
								<div className="product-thumb">
									<img src="media/boar-nft/team-3.png" className="attachment-shop_catalog" alt="Product"/>
								</div>
								<h2 className="woocommerce-loop-product__title">Roni</h2>
								<h2 className="woocommerce-loop-product__title">Chief Technical Officer</h2>
							</a>
							
						</li>

						<li className="product clearfix last">
							<a href="#" className="woocommerce-LoopProduct-link">
								<div className="product-thumb">
									<img src="media/boar-nft/team-4.png" className="attachment-shop_catalog" alt="Product"/>
								</div>
								<h2 className="woocommerce-loop-product__title">Mehwish</h2>
								<h2 className="woocommerce-loop-product__title">Chief Designing Officer</h2>
							</a>
							
						</li>
					</ul>
				</div>
			</div>
		</section>
     </div>
    );
}

export default Home;