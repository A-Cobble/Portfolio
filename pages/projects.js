import React from 'react'
import ProjectsPage from '../components/projects_page/ProjectsPage'
import styles from "../styles/projects.module.css"

const projects = () => {
  return (
    <div className={styles.container}>
      <ProjectsPage />
    </div>
  )
}

export default projects