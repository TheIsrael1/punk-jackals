import React from 'react'
import styles from "./footer.module.css"
import underline from "../../assets/icons/Underline_03.svg"

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
        <h5>
            Made By Dero 2022
        </h5>
        <img src={underline} className={`${styles.underline}`} alt="" />
    </div>
  )
}

export default Footer