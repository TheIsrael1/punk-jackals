import React, { useEffect, useState } from 'react'
import styles from  "./home.module.css"
import linkOut from "../../assets/icons/linkOut.png"
import Section from '../../components/Section'
import Credits from '../../components/Credits'
import Footer from '../../components/footer'
import { useNavigate } from 'react-router-dom'
import eclipse from "../../assets/images/eclipse.svg"
import socialArrow from "../../assets/icons/Arrow_10.svg"
import Nav from '../../components/Nav'
import pj1 from "../../assets/images/pj1.png"
import pj2 from "../../assets/images/pj2.png"
import pj3 from "../../assets/images/pj3.png"
import pj4 from "../../assets/images/pj4.png"

const Home = () => {

    const [currImg, setCurrImg] = useState(0)

    const navigate = useNavigate()

    const images = [
        pj1,
        pj2,
        pj3,
        pj4
    ]  

    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //     if(currImg === images.length){
    //         setCurrImg(0)
    //     }else{
    //         setCurrImg(currImg + 1)
    //     }
    //     },3000)
    //     return () => {
    //         clearInterval(interval);
    //     };
    // },[currImg])

  return (
    <div className={`${styles.home}`}>
    <div className={`${styles.mobileNav}`}>
        <Nav />
    </div>
    <img className={`${styles.eclipse}`} src={eclipse} alt="" />
        {/* hero */}
        <div className={`${styles.hero}`}>
            <div className={`${styles.heroLeft}`}>
                        <div className={`${styles.navCon}`}>
                                <span className={`${styles.navItem}`}
                                onClick={()=>navigate(`/about`)}
                                >
                                    About Us.
                                </span>
                                <span className={`${styles.navItem}`}
                                onClick={()=>navigate(`/roadmap`)}
                                >
                                   See Roadmap.
                                </span>
                                <span className={`${styles.navItem}`}
                                onClick={()=>navigate(`/meet-the-team`)}
                                >
                                   Meet the Team.
                                </span>
                        </div>
                    <div className={`${styles.titleCon}`}>
                        <h3 className={`${styles.heroTitle}`}>
                            Punk Jackals
                        </h3>
                        <p className={`${styles.heroDescription}`}>
                            Egyptian god anubis on the solana network
                        </p>
                    </div>     
                    <div className={`${styles.socialCon}`}>
                    <img className={`${styles.socialArrow}`} src={socialArrow} alt="" />
                        <div className={`${styles.socialItem}`}>
                            <span className={`${styles.socialIconText}`}>
                              Magic Eden
                            </span>
                            <img src={linkOut} width={30} alt="icon" />
                        </div>
                        <div className={`${styles.socialItem}`}>
                            <span className={`${styles.socialIconText}`}>
                                Twitter
                            </span>
                            <img src={linkOut} width={30} alt="icon" />
                        </div>
                        <div className={`${styles.socialItem}`}>
                            <span className={`${styles.socialIconText}`}>
                                    Discord
                            </span>
                            <img src={linkOut} width={30} alt="icon" />
                        </div>
                    </div>
            </div>
            <div className={`${styles.heroRight}`}>
                <img className={`${styles.heroImg}`}  src={images[currImg]} alt="" />
            </div>
        </div>

        {/* memo */}

        <div className={`${styles.memoSection}`}>
                <h3 className={`${styles.memoTitle}`}>
                    The valley Jackals
                </h3>
                <h3 className={`${styles.memoSubTitle}`}>
                    10,000 Jackals in silicon valley.
                </h3>
                <p className={`${styles.memoP}`}>
                Punk Jackals is a collection of 10,000 collectible affluent Jackals living in the silicon
                 Valley founded on the Solana blockchain. In the Jackals community there is no commoner, and every Jackal contributes
                  to the growth of their Valley and community.
                </p>
                <p className={`${styles.memoP}`}>
                Punk Jackals isn’t just another nft project, we’re building a community of art lovers and together we will explore new realms of web3 not yet explored by other by other projects.
                </p>
        </div>
        <Section 
        bgLight={true}
        img={images[1]}
        imgFirst={true}
        body={`Punk Jackals was borne out of need of making everyone feel they have a place and a voice in their
         communities that they too can bring development to their community by contributing in their own unique ways.
         It emphasizes that everyone is influential, everyone is someone big and worth looking up to. We’re focused on creating something
          that has a positive impact in the nft space and that people want to be a part of. 
        `}
        heading={`The Inspiration`}
        subheading={`Be Inspired future PJ`}
        />
        <Section 
        bgLight={false}
        img={images[2]}
        imgFirst={false}
        body={`As a team we will build value for our holders, creating products that are of good demand and are of high quality that everyone has to use them. It is about building a digital economy where there is great utility and scarcity for our holders..
        `}
        heading={`The Vision`}
        subheading={`We're doing great suff, catch on`}
        />
        <Section 
        bgLight={true}
        img={images[3]}
        imgFirst={true}
        body={`At Punk Jackals we’re on an adventure to innovate and create long term utilities and tools in  web3. We’re not just a brand but also a
         dedicated team of builders who are constantly working to create new utilities that other projects haven’t yet explored.

        Our community will always come first and will be at the core of our decisions,
         as we want people who share our vision and will help spread it across the globe. We also believe it is important to give people in web3 an avenue where they can be part of something more.
        
        `}
        heading={`The Gist`}
        subheading={`Quite the interesting stuff`}
        />
        <Credits />
        <Footer />
    </div>
  )
}

export default Home