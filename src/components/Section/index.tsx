import React from 'react'
import styles from './section.module.css'

interface sectionInterface{
    bgLight: boolean
    imgFirst: boolean
    img: string
    children?: React.ReactNode
    heading?: string
    subheading?:string
    body?:string
}

const Section = ({imgFirst, bgLight, img, body, heading, subheading, children }: sectionInterface) => {
  return (
    <div className={`${imgFirst ? styles.section : styles.sectionReversed }`}
    >
            <div className={`${styles.imgCon}`}>
                    <img className={`${styles.sectionImg}`} src={img} alt="sideImg" />
            </div>
            <div className={`${bgLight ? styles.sectionBgLight : styles.sectionBgDark} ${styles.contentCon}`}>
                    {children ? 
                    children :
                    <>
                    <h3 className={`${bgLight ? styles.darkH : styles.lightH}`}>
                        {heading}
                    </h3>
                    <h6 className={`${bgLight ? styles.darksubH : styles.lightsubH}`}>
                        {subheading}
                    </h6>
                    <p className={`${bgLight ? styles.darkBody : styles.lightBody}`}>
                        {body}
                    </p>
                    </>
                    }
            </div>
    </div>
  )
}

export default Section