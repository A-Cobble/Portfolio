import React from 'react'
import Image from "next/image"
import styles from "../styles/about.module.css"
import AboutMe from "../components/about_page/AboutMe"

const about = () => {
  return (
    <div className={styles.container}>
        <AboutMe /> 
    </div>
  )
}

export default about