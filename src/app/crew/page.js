'use client'
import React from 'react'
import styles from './page.module.css'
import '../global.css'
import crew from './crew.json'
import { useState } from 'react'
const Page = () => {
    const [member,setMember]=useState(3);
  return (
    <main className={styles.container}>
        <section className={styles.header}>
         <h3 className={styles.index}>02</h3><h3 className={styles.pageName}>MEET OUR CREW</h3>
        </section>
        <section className={styles.main}>
            <section className={styles.right}>
                <img src={crew[member].image} className={styles.image}></img>
            </section>
            <section className={styles.left}>
                <section className={styles.article}>
                    <section className={styles.mainInfo}>
                        <h3 className={styles.job}>{crew[member].job.toUpperCase()}</h3>
                        <h1 className={styles.name}>{crew[member].name.toUpperCase()}</h1>
                    </section>
                    <p className={styles.description}>
                    {crew[member].description}
                    </p>
                </section>
                <section className={styles.buttons}>
                    <div className={`${styles.circle}`}></div>
                    <div className={`${styles.circle}`}></div>
                    <div className={`${styles.circle}`}></div>
                    <div className={`${styles.circle}`}></div>
                </section>
            </section>
        </section>
    </main>
  )
}

export default Page
