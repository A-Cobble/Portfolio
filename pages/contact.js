import React from 'react'
import ContactMe from '../components/contact_page/ContactMe'
import styles from "../styles/contact.module.css"

const contact = () => {
  return (
    <div className={styles.container}>
      <ContactMe />
    </div>
  )
}

export default contact