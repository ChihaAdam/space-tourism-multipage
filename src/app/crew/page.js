'use client'
import React from 'react'
import styles from './page.module.css'
import '../global.css'
import crew from './crew.json'
import { useState , useLayoutEffect,useCallback} from 'react'
const Page = () => {
    const [member,setMember]=useState(3);
    const [fade,setFade]=useState("");
    const swipeWithKeys=useCallback((event)=>{
        (event);
        if (event.key === "ArrowRight") {
            setFade("fade-out");
            setTimeout(()=>{
                setFade("");
                setMember((m) => (m === 3 ? 0 : m + 1));
            },300);
        } 
        else if (event.key === "ArrowLeft") {
            setFade("fade-out");
            setTimeout(()=>{
                setFade("");
                setMember((m) => (m === 0 ? 3 : m - 1));
              },300);
        }
        })
    useLayoutEffect(() => {
        const eventListener = document.body.addEventListener("keydown",swipeWithKeys);
        return ()=>document.body.removeEventListener("keydown",eventListener);
    },[]);
  return (
    <main className={styles.container}>
        <section className={styles.header}>
         <h3 className={styles.index}>02</h3><h3 className={styles.pageName}>MEET OUR CREW</h3>
        </section>
        <section className={styles.main}>
            <section className={styles.right}>
                <div className={styles.imageContainer}>
                <img src={crew[member].image} className={`${styles.image} ${fade}`}></img>
                </div>
            </section>
            <section className={styles.left}>
                <section className={`${styles.article} ${fade}`}>
                    <section className={styles.mainInfo}>
                        <h3 className={styles.job}>{crew[member].job.toUpperCase()}</h3>
                        <h1 className={styles.name}>{crew[member].name.toUpperCase()}</h1>
                    </section>
                    <p className={styles.description}>
                    {crew[member].description}
                    </p>
            </section>
                <section className={styles.buttons}>
                    <div className={`${styles.circle} ${member===0 ? styles.selected : ""}`}></div>
                    <div className={`${styles.circle} ${member===1 ? styles.selected : ""}`}></div>
                    <div className={`${styles.circle} ${member===2 ? styles.selected : ""}`}></div>
                    <div className={`${styles.circle} ${member===3 ? styles.selected : ""}`}></div>
                </section>
            </section>
        </section>
    </main>
  )
}

export default Page
