import React from 'react'
import styles from '../../styles/home.module.css'
import Link from "next/link"
import BackgroundEffect from "../BackgroundEffect"

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
        </div>
    )
}

export default HomePage