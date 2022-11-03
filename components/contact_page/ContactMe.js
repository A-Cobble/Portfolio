import React from 'react'
import styles from "../../styles/contact.module.css"
import styles1 from "../../styles/home.module.css"
import Image from 'next/image'

const ContactMe = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.text}>
        <div className={styles.contactText}>
          Contact Me
        </div>
        <div className={styles.text}>
          {`Thank you for visiting my porfolio website. If you have any questions, or if think I would be a good fit for your team please reach out. I'll do my best to get back to you as soon as possible.`}
        </div>
        <a href="mailto:alex.cobble42@gmail.com" className={styles.emailBtn}>
          Reach Out
        </a>
      </div>
      <div className={styles1.iconContainer}>
        <div className={styles1.iconContainer1}>
          <a className={styles1.linkedInIcon} href='https://www.linkedin.com/in/alexandercobble/'>
            <svg height="16px"viewBox="0 0 32 32" width="16px">
              <g>
                <rect fill="#fff" height="23" width="7" y="9"/>
                <path d="M24.003,9C20,9,18.89,10.312,18,12V9h-7v23h7V19c0-2,0-4,3.5-4s3.5,2,3.5,4v13h7V19C32,13,31,9,24.003,9z" fill="#fff"/>
                <circle cx="3.5" cy="3.5" fill="#fff" r="3.5"/>
              </g>
            </svg>
          </a>
          <a className={styles1.gitHubIcon} href='https://github.com/A-Cobble'>
            <Image src="/GitHub-Icon.png" width={20} height={20}></Image>
          </a>
          <a className={styles1.emailLink} href='mailto:alex.cobble42@gmail.com'>
            alex.cobble42@gmail.com
          </a>
          <div className={styles1.line}></div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe