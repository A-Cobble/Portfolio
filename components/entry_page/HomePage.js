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
                    <span>&nbsp;</span>
                    <span>|</span>
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
                    <span>&nbsp;</span>
                    <span>|</span>
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
                    <a href="../../resume.pdf" target="_blank" rel="noreferrer" className={styles.linkTag}>
                        <button type='button' className={styles.resumeBtn}>Resume</button>
                    </a>
                </div>
            </div>
            <div className={styles.iconContainer}>
                <div className={styles.iconContainer1}>
                    <a className={styles.linkedInIcon} href='https://www.linkedin.com/in/alexandercobble/' target="_blank" rel="noreferrer">
                        <svg height="16px"viewBox="0 0 32 32" width="16px">
                            <g>
                                <rect fill="grey" height="23" width="7" y="9"/>
                                <path d="M24.003,9C20,9,18.89,10.312,18,12V9h-7v23h7V19c0-2,0-4,3.5-4s3.5,2,3.5,4v13h7V19C32,13,31,9,24.003,9z" fill="grey"/>
                                <circle cx="3.5" cy="3.5" fill="grey" r="3.5"/>
                            </g>
                        </svg>
                    </a>
                    <a className={styles.gitHubIcon} href='https://github.com/A-Cobble' target="_blank" rel="noreferrer">
                    <svg height="20px" viewBox="0 0 496 512" width="20px">
                        <g>
                            <path className={styles.gitHubIconHover} fill="grey" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 
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
                    <a className={styles.emailLink} href='mailto:alex.cobble42@gmail.com'>alex.cobble42@gmail.com</a>
                    <div className={styles.line} ></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage