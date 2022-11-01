import React from 'react'
import styles from '../styles/header.module.css'
import Link from "next/link"

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container2}>
            <Link className={styles.homeMenu} href="/">HOME</Link>
            <Link className={styles.aboutMenu} href='/about'>ABOUT</Link>
            <Link className={styles.projectsMenu} href='/projects'>PROJECTS</Link>
            <Link className={styles.contactMenu} href='/contact'>CONTACT</Link>
        </div>
    </div>
  )
}

export default Header