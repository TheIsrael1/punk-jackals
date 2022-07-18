import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./nav.module.css"

const Nav = () => {

    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

  return (
    <div className={`${styles.header} ${open ? styles.open : ``}`}>
      <div 
      onClick={()=>setOpen(!open)}
      className={`${styles.hamburger1} ${styles.hamburger} ${open ? styles.open : ``}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.menuOverlay} ${open ? styles.open : ``}`}>
        <ul className={`${styles.nav}`}>
          <li onClick={()=>navigate('/')}>Home</li>
          <li onClick={()=>navigate('/about')}>About</li>
          <li onClick={()=>navigate('/roadmap')}>Roadmap</li>
          <li onClick={()=>navigate('/meet-the-team')}>Meet the Team</li>
        </ul>
      </div>
    </div>

  )
}

export default Nav