import React from 'react'
import styles from '../../styles/home.module.css'
import Link from "next/link"
import BackgroundEffect from "../BackgroundEffect"
import Image from "next/image"

const HomePage = () => {
    return (
        <div className={styles.container1}>
            <div className={styles.container2}>
                <div className={styles.words}>
                    <span>H</span>
                    <span>i</span>
                    <span>,</span>
                    <span>&nbsp;</span>
                    <span>I</span>
                    <span>{"'"}</span>
                    <span>m</span>
                </div>
                <div className={styles.myName}>
                    <span>A</span>
                    <span>l</span>
                    <span>e</span>
                    <span>x</span>
                    <span>a</span>
                    <span>n</span>
                    <span>d</span>
                    <span>e</span>
                    <span>r</span>
                    <span>&nbsp;</span>
                    <span>C</span>
                    <span>o</span>
                    <span>b</span>
                    <span>b</span>
                    <span>l</span>
                    <span>e</span>
                </div>
                <div className={styles.words}>
                    <span>I</span>
                    <span>&nbsp;</span>
                    <span>a</span>
                    <span>m</span>
                    <span>&nbsp;</span>
                    <span>a</span>
                    <span>&nbsp;</span>
                    <span>S</span>
                    <span>o</span>
                    <span>f</span>
                    <span>t</span>
                    <span>w</span>
                    <span>a</span>
                    <span>r</span>
                    <span>e</span>
                    <span>&nbsp;</span>
                    <span>E</span>
                    <span>n</span>
                    <span>g</span>
                    <span>i</span>
                    <span>n</span>
                    <span>e</span>
                    <span>e</span>
                    <span>r</span>
                    <span>,</span>
                    <span>&nbsp;</span>
                    <span>W</span>
                    <span>e</span>
                    <span>b</span>
                    <span>&nbsp;</span>
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                    <span>,</span>
                    <span>&nbsp;</span>
                    <span>a</span>
                    <span>n</span>
                    <span>d</span>
                    <span>&nbsp;</span>
                    <span>V</span>
                    <span>e</span>
                    <span>t</span>
                    <span>e</span>
                    <span>r</span>
                    <span>a</span>
                    <span>n</span>
                </div>
                <div className={styles.words}>
                    <span>I</span>
                    <span>&nbsp;</span>
                    <span>b</span>
                    <span>u</span>
                    <span>i</span>
                    <span>l</span>
                    <span>d</span>
                    <span>&nbsp;</span>
                    <span>e</span>
                    <span>x</span>
                    <span>c</span>
                    <span>e</span>
                    <span>p</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>
                    <span>a</span>
                    <span>l</span>
                    <span>&nbsp;</span>
                    <span>d</span>
                    <span>i</span>
                    <span>g</span>
                    <span>i</span>
                    <span>t</span>
                    <span>a</span>
                    <span>l</span>
                    <span>&nbsp;</span>
                    <span>e</span>
                    <span>x</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                    <span>i</span>
                    <span>e</span>
                    <span>n</span>
                    <span>c</span>
                    <span>e</span>
                    <span>s</span>
                    <span>&nbsp;</span>
                    <span>w</span>
                    <span>i</span>
                    <span>t</span>
                    <span>h</span>
                    <span>&nbsp;</span>
                    <span>Y</span>
                    <span>O</span>
                    <span>U</span>
                    <span>&nbsp;</span>
                    <span>i</span>
                    <span>n</span>
                    <span>&nbsp;</span>
                    <span>m</span>
                    <span>i</span>
                    <span>n</span>
                    <span>d</span>
                </div>
                <div className={styles.btnContainer}>
                    <Link href="/projects" className={styles.linkTag}>
                        <button type='button' className={styles.projectBtn}>Projects</button>
                    </Link>
                    <span className={styles.words}>{" | "}</span>
                    <Link href="/resume" className={styles.linkTag}>
                        <button type='button' className={styles.resumeBtn}>Resume</button>
                    </Link>
                </div>
            </div>
            <div className={styles.iconContainer}>
                <div className={styles.iconContainer1}>
                    <a className={styles.linkedInIcon} href='https://www.linkedin.com/in/alexandercobble/'>
                        <svg height="16px"viewBox="0 0 32 32" width="16px">
                            <g>
                                <rect fill="#fff" height="23" width="7" y="9"/>
                                <path d="M24.003,9C20,9,18.89,10.312,18,12V9h-7v23h7V19c0-2,0-4,3.5-4s3.5,2,3.5,4v13h7V19C32,13,31,9,24.003,9z" fill="#fff"/>
                                <circle cx="3.5" cy="3.5" fill="#fff" r="3.5"/>
                            </g>
                        </svg>
                    </a>
                    <a className={styles.gitHubIcon} href='https://github.com/A-Cobble'>
                        <Image src="/GitHub-Icon.png" width={20} height={20}></Image>
                    </a>
                    <a className={styles.emailLink} href='mailto:alex.cobble42@gmail.com'>alex.cobble42@gmail.com</a>
                    <div className={styles.line} ></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage