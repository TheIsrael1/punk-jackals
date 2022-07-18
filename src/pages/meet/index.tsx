import React from 'react'
import { useNavigate } from "react-router-dom";
import styles from "./meet.module.css";
import circle from "../../assets/icons/Ondas.svg";
import Nav from "../../components/Nav";
import pj1 from "../../assets/images/pj1.png"
import pj2 from "../../assets/images/pj2.png"
import pj3 from "../../assets/images/pj3.png"
import pj4 from "../../assets/images/pj4.png"

const MeetTeam = () => {
    const navigate = useNavigate();

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
            onClick={() => navigate(`/about`)}
          >
            About Us.
          </span>
          <span
            className={`${styles.navItem}`}
            onClick={() => navigate(`/roadmap`)}
          >
            Roadmap
          </span>
        </div>
        <div className={`${styles.pageTitleCon}`}>
          <h3 className={`${styles.pageTitle}`}>Team</h3>
        </div>
      </div>
      <div className={`${styles.hero}`}>
      <div className={`${styles.profileItem}`}>
                <div className={`${styles.rightProfile}`}>
                        <div className={`${styles.creditItem}`}>
                                <img src={pj1} alt=""className={`${styles.itemImg}`} />
                        </div>
                        <div className={`${styles.creditTitleCon}`}>
                            <h3 className={`${styles.creditTitle}`}>
                            Collins
                            </h3>
                            <span className={`${styles.creditRole}`}>
                                Founder and Artist
                            </span>
                        </div>
            </div>
              <div className={`${styles.paragraph}`}>
              A big lover of nature and wild life, Collins developed his artist skill from a young age starting out by drawing animals naturally found in the wild, he has since then developed his skill in many fields of visual art such as digital painting, illustrations, character design and graphics design. Today Punk Jackals gives him the opportunity to combine art and his love for animals, two of his greatest passions on the same project.
            </div>
          </div>
          <div className={`${styles.profileItem}`}>
                <div className={`${styles.rightProfile}`}>
                        <div className={`${styles.creditItem}`}>
                                <img src={pj2} alt=""className={`${styles.itemImg}`} />
                        </div>
                        <div className={`${styles.creditTitleCon}`}>
                            <h3 className={`${styles.creditTitle}`}>
                            Dero
                            </h3>
                            <span className={`${styles.creditRole}`}>
                                Web3 Dev
                            </span>
                        </div>
            </div>
              <div className={`${styles.paragraph}`}>
              A web2 turned web3 dev, with over 3 years of experience in web design and IT, comprising web2 and web3. Dero prefer computers to people and he’s in charge of all the geeky things such as building and deploying our website.
              </div>
          </div>
          <div className={`${styles.profileItem}`}>
                <div className={`${styles.rightProfile}`}>
                        <div className={`${styles.creditItem}`}>
                                <img src={pj4} alt=""className={`${styles.itemImg}`} />
                        </div>
                        <div className={`${styles.creditTitleCon}`}>
                            <h3 className={`${styles.creditTitle}`}>
                            Mimi
                            </h3>
                            <span className={`${styles.creditRole}`}>
                            Brand Strategist
                            </span>
                        </div>
            </div>
              <div className={`${styles.paragraph}`}>
              The girl that comes up with a perfect plan in every situation, on the spot!. Mimi is an awesome art enthusiast and critic, she bears the responsibility of giving our brand a direction, securing deals and captivating other exciting minds in become a member of our community and sharing our vision.              </div>
          </div>
      </div>
    </div>
  )
}

export default MeetTeam