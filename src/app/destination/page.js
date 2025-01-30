'use client'
import styles from './page.module.css'
import { useState } from 'react'
import '../
export default function Page(){
    const [selected,setSelected]=useState(0);
    const moons = [
        {
            name:"MOON",
            image:"/destination/image-moon.png",
            description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance:"384,400 KM",
            travelTime:"3 days"
        },
        {
            name:"MARS",
            image:"/destination/image-mars.png",
            description:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance:"225 MIL. KM",
            travelTime:"9 MONTHS"
        },
        {
            name:"EUROPA",
            image:"destination/image-europa.png",
            description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance:"628 MIL. KM",
            travelTime:"3 YEARS"
            
        },
        {
            name:"TITAN",
            image:"destination/image-titan.png",
            description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance:"1.6 BIL. KM",
            travelTime:"7 YEARS"
        }
    ]
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <p className={styles.number}>01</p>
                <p className={styles.pick}>PICK YOUR DESTINATION</p>
            </header>
            <section className={styles.main}>
                <section className={styles.left}>
                    <div className={styles.img}>
                    <img src={moons[selected].image} ></img>
                    </div>
                </section>
                <section className={styles.right}>
                   <section className={styles.article}>
                   <ul className={styles.moons}>
                        <li className={selected===0 && "selected"} onClick={()=>setSelected(0)}>MOON</li>
                        <li className={selected===1 && "selected"} onClick={()=>setSelected(1)}>MARS</li>
                        <li className={selected===2 && "selected"} onClick={()=>setSelected(2)}>EUROPA</li>
                        <li className={selected===3 && "selected"} onClick={()=>setSelected(3)}>TITAN</li>
                    </ul>
                    <div className={styles.mainInfo}>
                    <h1 className={styles.name}>{moons[selected].name}</h1>
                    <p className={styles.description}>
                        {moons[selected].description}
                    </p>
                    </div>
                    <hr className={styles.line} />
                   <div className={styles.details}>
                        <div className={styles.detail}>
                            <p className={styles.label}>
                                AVG. DISTANCE
                            </p>
                            <p className={styles.answer}>
                                {moons[selected].distance}
                            </p>
                        </div>
                        <div className={styles.detail}>
                            <p className={styles.label}>
                            EST. TRAVEL TIME
                            </p>
                            <p className={styles.answer}>
                                {moons[selected].travelTime}
                            </p> 
                        </div>
                   </div>
                   </section>
                </section>
            </section>
        </main>
    )
}