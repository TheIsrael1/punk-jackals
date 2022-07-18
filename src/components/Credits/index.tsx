import React from 'react'
import styles from "./credits.module.css"
import pj1 from "../../assets/images/pj1.png"
import pj2 from "../../assets/images/pj2.png"
import pj3 from "../../assets/images/pj3.png"
import pj4 from "../../assets/images/pj4.png"
import arrowRight from "../../assets/icons/arrowRight.png"
import { useNavigate } from 'react-router-dom'

const Credits = () => {

  const navigate = useNavigate()
  return (
    <div className={`${styles.credits}`}>
        <div className={`${styles.itemsWrapper}`}>
              <div className={`${styles.creditItemWrapper} ${styles.up}`}>
                    <div className={`${styles.creditItem}`}>
                    <img src={pj1} alt=""className={`${styles.itemImg}`} />
                    </div>
                    <div className={`${styles.creditTitleCon}`}>
                            <h3 className={`${styles.creditTitle}`}>
                              Collins
                            </h3>
                            <span className={`${styles.creditRole}`}>
                            Founder & Artist
                            </span>
                    </div>
              </div>
              <div className={`${styles.creditItemWrapper } ${styles.down}`}>
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
              <div className={`${styles.creditItemWrapper} ${styles.up}`}>
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
              <div className={`${styles.teamLink}`}
              onClick={()=>navigate(`meet-the-team`)}
              >
                  <span >Meet the team</span>
                <img width={30} src={arrowRight} alt="" />
              </div>
        </div>
    </div>
  )
}

export default Credits