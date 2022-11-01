import React from 'react'
import Image from "next/image"
import styles from "../../styles/about.module.css"

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
    </div>
  )
}

export default AboutMe