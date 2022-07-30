import React ,{useEffect}from 'react';
import Slider from './Slider';

function RoadMap() {
        useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    return (
    <div>
    <Slider/>

      <div className="demo">
       <div className="container  pt-5 pb-5">
       <div className = 'text-center pt-2 pb-5'>
                 <h1 className = 'road-map'> RoadMap</h1>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="main-timeline">
                    <div className="timeline">
                        <span className="timeline-icon">1</span>
                        <div className="timeline-content">
                            <i className="icon fa fa-globe"></i>
                            <p className="description">
                            <ul>
                                <li>First line of the Crazy Creatures named BeastyBoar will born inhabit in the Ethereum Blockchain. The total number of 10000 BeastyBoars will be minted during Phase-1. Each BeastyBoar will be uniquely designed having special traits and quality, that will make them special and differentiate them from all others. </li>
                               <li>All 10000 BeastyBoars minted in this Phase will get 1:1 drop of in-game articles and accessories including war chests.  
                               </li>
                            <li>First 5000 (i.e.#1 to #5000) minted BeastyBoars in this Phase will get 1:1 drop of ScrewyShark to be minted in Phase-2.
                            </li>
                            <li>Next 5000 (i.e.#5001 to #10000) minted BeastyBoars in this Phase will get 1:1 drop of HerculesHippogriff to be minted in Phase-3.</li>
                            </ul>
                            </p>
                        </div>
                        <div className="year"><span>Birth of BeastyBoar</span></div>
                    </div>
                    <div className="timeline">
                        <span className="timeline-icon">2</span>
                        <div className="timeline-content">
                            <i className="icon fa fa-briefcase"></i>
                            <p className="description">
                            <ul>
                                <li>While the Phase-1 is being launched, work of Phase-2 has already been halfway to the milestone. And, Second Phase will launch within 2-3 Weeks from launch date of Phase-1.</li>
                                <li>Second line of the Crazy Creatures named ScrewyShark will born and inhabit in the Ethereum Blockchain. The total number of 10000 ScrewySharks will be minted during Phase-2. </li>
                                <li>5000 No. of the total minted ScrewySharks in this phase will be airdropped to the wallets of first 5000 (i.e.#1 to #5000) minted BeastyBoars in Phase-1.</li>
                                <li>Collaboration with various other popular secondary marketplaces will be done for listing NFTs of CrazyCryptoNFT</li></ul>
                            </p>
                        </div>
                        <div className="year"><span>Rise of ScrewyShark</span></div>
                    </div>
                    <div className="timeline">
                        <span className="timeline-icon">3</span>
                        <div className="timeline-content">
                            <i className="icon fa fa-globe"></i>
                            <p className="description">
                            <ul>
                                <li>While the Phase-1 and Phase-2 is being launched, work of Phase-3 has already been started. And, Phase-3 will launch within 2-3 Weeks from launch date of Phase-2.</li>
                                <li>Third line of the CrazyCreatures named HerculesHippogriff will awake and inhabit in the Ethereum Blockchain. The total number of 10000 HerculesHippogriff will be minted during Phase-3. </li>
                                <li>5000 No. of the total minted HerculesHippogriff in this phase will be airdropped to the wallets of next 5000 (i.e.#5001 to #10000) minted BeastyBoars in Phase-1.</li>
                                </ul>
                            </p>
                        </div>
                        <div className="year"><span>Awakening of HerculesHippogriff</span></div>
                    </div>
                    <div className="timeline">
                        <span className="timeline-icon">4</span>
                        <div className="timeline-content">
                            <i className="icon fa fa-briefcase"></i>
                            <p className="description">
                            <ul><li>Half of the funds received from the initial minting of all the BeastyBoars in Phase-1 will not only be utilized in the development of CrazyCryptoNFT DAO (CNN DAO), but also be used in building of upgraded and advanced ecosystem for CrazyCryptoNFT. The CCN DAO will act as a Governance token and will help in the formation and strengthening of the Community.</li></ul>
                            </p>
                        </div>
                        <div className="year"><span>Launch of DAO</span></div>
                    </div>
                    <div className="timeline">
                        <span className="timeline-icon">5</span>
                        <div className="timeline-content">
                            <i className="icon fa fa-globe"></i>
                            <p className="description">
                            <ul><li>The vision of CrazyCryptoNFT is to create an advance integrated gaming platform in the metaverse for its users and the community. All the minted creatures and the airdrop articles will be utilized in the gaming platform thereby enhancing the value of the article. The time, skill and dedication of the player will be rewarded by active earnings. The Players can not only be able to generate active income by the sale/purchase/utilization of such article but also can earn passive income through various means. </li></ul>
                            </p>
                        </div>
                        <div className="year"><span>Game Launch</span></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    );
}

export default RoadMap;