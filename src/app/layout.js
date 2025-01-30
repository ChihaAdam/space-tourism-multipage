'use client'
import "./globals.css";
import "./global.css"
import Link from "next/link";
import { metadata } from "@/metadata";
import { useState} from "react";

export default function RootLayout({ children }) { 
  const [choice,setChoice]=useState("home");
  const [fade,setFade]=useState('fade-in')
  function choose(route){
    if (route =="/") return "home";
    return route.slice(1,route.length);
  }
  function handleRouteChange(choice){
    setChoice(choice);
    setFade("fade-out");
    setTimeout(()=>setFade("fade-in"),300);
  }
  
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
        <link rel="icon" href="./favicon.png"></link>
      </head>
      <body className={choice}>
        <header>
        <div className="lineContainer">
        <img src="/shared/logo.svg"></img>
        <div className="line"></div>
        </div>
        <nav>
              <Link onClick={()=>handleRouteChange("home")} className={`Link ${choice=="home" && "selected"}`} href="/"><p className="index">01</p> <p>HOME</p></Link>
              <Link onClick={()=>handleRouteChange("destination")} className={`Link ${choice=="destination" && "selected"}`} href="/destination"><p className="index">02</p> <p>DESTINATION</p></Link>
              <Link onClick={()=>handleRouteChange("crew")} className={`Link ${choice=="crew" && "selected"}`} href="/crew"><p className="index">03</p> <p>CREW</p></Link>
              <Link onClick={()=>handleRouteChange("technology")} className={`Link ${choice=="technology" && "selected"}`} href="#"><p className="index">04</p> <p>TECHNOLOGY</p></Link>
        </nav>
        </header>
        <main className={`container ${fade}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
