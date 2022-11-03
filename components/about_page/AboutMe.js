import React from 'react'
import Image from "next/image"
import styles from "../../styles/about.module.css"
import styles1 from "../../styles/home.module.css"

const AboutMe = () => {
  return (
    <div className={styles.container1}>
       <div className={styles.textContainer}>
            <div className={styles.introText}>
                {"I'm a Full Stack software engineer / web developer located in Washington State."}
            </div>
            <div className={styles.bioText}>
                {`Driven and enthusiastic software engineer with a background in electronics troubleshooting and teamwork.
                Experienced with fast-paced environments where leadership, integrity, and honesty are critical. Eager to take 
                on new problems and push technology forward by continuing to learn and grow.`}
            </div>
            <div className={styles.allSkills}>
                <div className={styles.skillsText}>
                    {"Front End - JavaScript, React, Next.js, HTML5, CSS3, Axios"}
                </div>
                <div className={styles.skillsText}>
                    {"Back End - C#, Node.js, Espress, PostgreSQL, SQL, MongoDB, Restful API Development"}
                </div>
                <div className={styles.skillsText}>
                    {"Deployment - Heroku, Render"}
                </div>
                <div className={styles.skillsText}>
                    {"Developer Toools - Auth0, npm, Bootstrap, Tailwind CSS, Agile Methodology, Visual Studio Code"}
                </div>
            </div>
        </div>
        <div className={styles.picContainer}>
            <Image alt="profile picture" className={styles.profilePic} src="/profile-pic.jpg" width={480} height={480}></Image>
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

export default AboutMe