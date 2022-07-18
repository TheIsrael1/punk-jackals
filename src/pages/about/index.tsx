import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./about.module.css";
import circle from "../../assets/icons/Ondas.svg"
import Nav from "../../components/Nav";


const About = () => {
    const navigate = useNavigate()

  return (
    <div className={`${styles.about}`}>
        <div className={`${styles.mobileNav}`}>
        <Nav />
        </div>
      <div className={`${styles.top}`}>
          <img src={circle} className={`${styles.circle}`} alt="" />
        <div className={`${styles.navCon}`}>
          <span className={`${styles.navItem}`} onClick={() => navigate(`/`)}>
            Home
          </span>
          <span
            className={`${styles.navItem}`}
            onClick={() => navigate(`/roadmap`)}
          >
            See Roadmap
          </span>
          <span
            className={`${styles.navItem}`}
            onClick={() => navigate(`/meet-the-team`)}
          >
            Meet the Team
          </span>
        </div>
        <div className={`${styles.pageTitleCon}`}>
        <h3 className={`${styles.pageTitle}`}>About Us</h3>
        </div>
      </div>
      <div className={`${styles.hero}`}>
      <div className={`${styles.paragraph}`}>
      Punk Jackals is a collection of 10,000 collectible affluent Jackals living in the silicon Valley founded on
       the Solana blockchain. In the Jackals community there is no commoner, and every Jackal contributes to the growth of their Valley and community.
    The Punk Jackal will be your pfp and your means of ID in the metaverse, every Jackal has been made with special love and care to capture the essence of being affluent and reaching out
     to those in their society. Punk Jackals isn’t just another nft project, we’re building a community of art lovers and together we will explore new realms of web3 not yet explored by other by other projects.
        </div>
      </div>
    </div>
  );
};

export default About;
