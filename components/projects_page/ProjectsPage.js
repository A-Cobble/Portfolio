import React from 'react'
import styles from '../../styles/projects.module.css'

const ProjectsPage = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselCenter}>
            project 1 carousel
          </div>
          <div className={styles.carouselLeft}>
            project 2 carousel
          </div>
          <div className={styles.carouselRight}>
            project 3 carousel
          </div>
        </div>
        <div>
          <div>project 1 image</div>
          <div>project 1 description
            <button>link to github code for project 1</button>
          </div>
        </div>
        <div>
          <div>project 2 description
            <button>link to github code for project 2</button>
          </div>
          <div>project 2 image</div>
        </div>
        <div>
          <div>project 3 image</div>
          <div>project 3 description
            <button>link to github code for project 3</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage