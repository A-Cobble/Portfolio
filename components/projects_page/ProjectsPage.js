import React from 'react'
import styles from '../../styles/projects.module.css'
import styles1 from '../../styles/home.module.css'
import Image from 'next/image'
import EmblaCarousel from "./EmblaCarousel"
import { media } from "../../public/images/index"
import Link from "next/link"

const ProjectsPage = () => {
  return (
    <>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <EmblaCarousel />
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.firstProject}>
            <div className={styles.image1}>
              <a className={styles.imageLinks} href="https://drive.google.com/file/d/1WbfoHGMt5sVqZwbGxQvH-ploWGzTEhQ7/view" target="_blank" rel="noreferrer">
                <Image className={styles.imageBorder} src={media[0]} width={300} height={150} alt="Instructor Hub project" />
              </a>
              <a className={styles.imageLinks1} target="_blank" rel="noreferrer">
                <Image src={media[0]} width={300} height={150} alt="Instructor Hub project" />
              </a>
            </div>
            <div className={styles.projectText}>
              <div className={styles.projectName}>
                Instructor Hub
              </div>
              <div className={styles.projectDescription}>
                <p>
                  {`Technologies Used: Next.js, React, JavaScript, Axios, Recoil, PostgreSQL, CSS`}
                  <br />
                  {`Hosted on: Render`}
                  <br />
                  <br />
                  {`Led a team of 10 as the product manager to develop a full-stack application that integrates with a third-party API, 
                  to streamline the process of updating and tracking students.`}
                </p>
              </div>
              <div className={styles.btnContainer}>
                <a className={styles.gitHubRepo} href="https://github.com/A-Cobble/instructor-hub" target="_blank" rel="noreferrer">GitHub Repo</a>
                <span className={styles.divider}>{" | "}</span>
                <a className={styles.projectDemo} href="https://drive.google.com/file/d/1WbfoHGMt5sVqZwbGxQvH-ploWGzTEhQ7/view" target="_blank" rel="noreferrer">Project Demo</a>
              </div>
            </div>
          </div>
          <div className={styles.secondProject}>
            <div className={styles.projectText}>
              <div className={styles.projectName}>
                Steam Clone
              </div>
              <div className={styles.projectDescription}>
                <p>
                  {`Technologies Used: Next.js, React, Axios, Recoil, TailwindCSS, PostgreSQL, Trello`}
                  <br/>
                  {`Hosted On: Render`}
                  <br/>
                  <br/>
                  {`Led a team of 5 software developers, as the team lead, to create a full-stack clone of store.steampowered.com's website focusing on front-end
                    design.`}
                </p>
              </div>
              <div className={styles.btnContainer}>
                <a className={styles.gitHubRepo} href="https://github.com/A-Cobble/Steam-Clone" target="_blank" rel="noreferrer">GitHub Repo</a>
                <span className={styles.divider}>{" | "}</span>
                <a className={styles.projectDemo} href="https://steamclonehosted-production.up.railway.app/" target="_blank" rel="noreferrer">Project Demo</a>
              </div>
            </div>
            <div className={styles.image2}>
              <a className={styles.imageLinks} href="https://steamclonehosted-production.up.railway.app/" target="_blank" rel="noreferrer">
                <Image src={media[1]} width={300} height={150} alt="Steam Clone project" />
              </a>
              <a className={styles.imageLinks1} target="_blank" rel="noreferrer">
                <Image src={media[1]} width={300} height={150} alt="Steam Clone project" />
              </a>
            </div>
          </div>
          <div className={styles.thirdProject}>
            <div className={styles.image3}>
              <Link className={styles.imageLinks} href="/asteroids">
                <Image src={media[2]} width={300} height={150} alt="Asteroids Game project" />
              </Link>
              <a className={styles.imageLinks1}>
                <Image src={media[2]} width={300} height={150} alt="Asteroids Game project" />
              </a>
            </div>
            <div className={styles.projectText}>
              <div className={styles.projectName}>
                Asteroids Game
              </div>
              <div className={styles.projectDescription}>
                <p>
                  {`Technologies Used: Reactjs, JavaScript, HTML, CSS`}
                  <br />
                  <br/>
                  {`Created a replica of the 1979 Asteroids game by Atari, inc.`}
                </p>
              </div>
              <div className={styles.btnContainer}>
                <a className={styles.gitHubRepo} href="https://github.com/A-Cobble/react-game/tree/main/react-game" target="_blank" rel="noreferrer">GitHub Repo</a>
                <span className={styles.divider}>{" | "}</span>
                <Link className={styles.projectDemo} href="/asteroids">Project Demo</Link>
              </div>
            </div>
          </div>
          <div className={styles.fourthProject}>
            <div className={styles.projectText}>
              <div className={styles.projectName}>
                D&D Character Sheet
              </div>
              <div className={styles.projectDescription}>
                <p>
                  {`Technologies Used: React, JavaScript, HTML, CSS, Express, SQL`}
                  <br />
                  <br />
                  {`A full-stack application that allows the user create D&D character sheets, update the current one as they play, 
                  and save it for their next game night.`}
                </p>
              </div>
              <div className={styles.btnContainer}>
                <a className={styles.gitHubRepo} href="https://github.com/A-Cobble/Full-Stack-Project" target="_blank" rel="noreferrer">GitHub Repo</a>
                <span className={styles.divider}>{" | "}</span>
                <a className={styles.projectDemo} href="https://dnd-character-sheet-production.up.railway.app/" target="_blank" rel="noreferrer">Project Demo</a>
              </div>
            </div>
            <div className={styles.image4}>
              <a className={styles.imageLinks} href="https://dnd-character-sheet-production.up.railway.app/" target="_blank" rel="noreferrer">
                <Image  src={media[3]} width={300} height={150} alt="Dungeons & Dragons Character Sheet project" />
              </a>
              <a className={styles.imageLinks1} target="_blank" rel="noreferrer">
                <Image src={media[3]} width={300} height={150} alt="Dungeons & Dragons Character Sheet project" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles1.iconContainer}>
        <div className={styles1.iconContainer1}>
          <a className={styles1.linkedInIcon} href='https://www.linkedin.com/in/alexandercobble/'>
            <svg height="16px"viewBox="0 0 32 32" width="16px">
              <g>
                <rect fill="grey" height="23" width="7" y="9"/>
                <path d="M24.003,9C20,9,18.89,10.312,18,12V9h-7v23h7V19c0-2,0-4,3.5-4s3.5,2,3.5,4v13h7V19C32,13,31,9,24.003,9z" fill="grey"/>
                <circle cx="3.5" cy="3.5" fill="grey" r="3.5"/>
              </g>
            </svg>
          </a>
          <a className={styles1.gitHubIcon} href='https://github.com/A-Cobble'>
            <svg height="20px" viewBox="0 0 496 512" width="20px">
              <g>
                <path fill="grey" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 
                  4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 
                  4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 
                  0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 
                  16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 
                  62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
                  75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 
                  1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 
                  1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 
                  1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                </path>
              </g>
            </svg>
          </a>
          <a className={styles1.emailLink} href='mailto:alex.cobble42@gmail.com'>
            alex.cobble42@gmail.com
          </a>
          <div className={styles1.line}></div>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage