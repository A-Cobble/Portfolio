import React from 'react'
import styles from "../../styles/contact.module.css"

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
    </div>
  )
}

export default ContactMe