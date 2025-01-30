'use client'
import "./globals.css";
import Link from "next/link";
import { metadata } from "@/metadata";
import { useState} from "react";

export default function RootLayout({ children }) {
  function choose(route){
    if (route =="/") return "home";
    return route.slice(1,route.length);
  }
  const [choice,setChoice]=useState("home");
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
        <link rel="icon" href={metadata.logo}></link>
      </head>
      <body className={choice}>
        <link rel="icon" hrsef="../assets/favicon-32x32.png"></link>
        <header>
        <div className="lineContainer">
        <img src="/shared/logo.svg"></img>
        <div className="line"></div>
        </div>
        <nav>
              <Link onClick={()=> setChoice("home")} className={`Link ${choice=="home" && "selected"}`} href="/"><p className="index">01</p> <p>HOME</p></Link>
              <Link onClick={()=>setChoice("destination")} className={`Link ${choice=="destination" && "selected"}`} href="/destination"><p className="index">02</p> <p>DESTINATION</p></Link>
              <Link onClick={()=>setChoice("crew")} className={`Link ${choice=="crew" && "selected"}`} href="#"><p className="index">03</p> <p>CREW</p></Link>
              <Link onClick={()=>setChoice("technology")} className={`Link ${choice=="technology" && "selected"}`} href="#"><p className="index">04</p> <p>TECHNOLOGY</p></Link>
        </nav>
        </header>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
