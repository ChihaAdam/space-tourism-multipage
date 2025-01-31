"use client"
import React from 'react'
import styles from './page.module.css'
import "../global.css"
import steps from './steps.json'
import { useState,useEffect } from 'react'
const Page = () => {
    const [step,setStep]=useState(0);
    const [fade,setFade]=useState('fade-in');
    const [image,setImage]=useState(steps[step].image_url);
    const handleStepChange = (step) => {
        setFade("fade-out");
        setTimeout(()=>{
            setStep(step);
            setFade("fade-in");
        },300)
    }
    const updateImage = ()=>{
        if (window.innerWidth<=800){
            setImage(steps[step].imageLand_url);
            
        }
        else{
            setImage(steps[step].image_url);
        }
    }
    useEffect(()=>{
        updateImage();
        const eventListener=window.addEventListener('resize', ()=>updateImage());
        return ()=>window.removeEventListener('resize', eventListener)
    },[step])
  return (
    <main className={styles.container}>
        <section className={styles.header}>
            <h3 className={styles.index}>03</h3><h3 className={styles.class}>SPACE LAUNCH 101</h3>
        </section>
        <section className={styles.main}>
            <section className={styles.left}>
                <section className={styles.buttons}>
                    <div onClick={()=>{handleStepChange(0)}} className={`${styles.button} ${step==0? styles.selected:''}`}>1</div>
                    <div onClick={()=>{handleStepChange(1)}} className={`${styles.button} ${step==1? styles.selected:''}`}>2</div>
                    <div onClick={()=>{handleStepChange(2)}} className={`${styles.button} ${step==2? styles.selected:''}`}>3</div>
                </section>
                <section className={styles.article}>
                    <div className={styles.head}>
                        <h2 className={styles.label}>THE TECHNOLOGY</h2>
                        <h1 className={`${styles.name } ${fade}`}>{steps[step].name}</h1>
                    </div>
                    <p className={`${styles.description } ${fade}`}>{steps[step].description}</p>
                </section>
            </section>
            <section className={styles.right}>
                <div className={styles.imageContainer}>
                    <img className={`${styles.image } ${fade}`} src={image}></img>
                </div>
            </section>
        </section>
    </main>
  )
}

export default Page
