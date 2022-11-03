import React from 'react'
import styles from '../../styles/projects.module.css'
import styles1 from '../../styles/home.module.css'
import Image from 'next/image'

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

export default ProjectsPage