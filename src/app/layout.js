'use client'
import "./globals.css";
import "./global.css"
import Link from "next/link";
import { metadata } from "@/metadata";
import { useState , useLayoutEffect} from "react";
import { usePathname } from 'next/navigation';
export default function RootLayout({ children }) {
  const router=usePathname(); 
  const [choice,setChoice]=useState(choose(router));
  const [fade,setFade]=useState('');
  const [opened,isOpened]=useState(false);
  function choose(route){
    if (route =="/") return "home";
    return route.slice(1,route.length);
  }
  useLayoutEffect(()=>{
    setFade("");
    setChoice(choose(router));
    const timeout = setTimeout(()=>{
      setFade("fade-in")
    },300);
    return () => clearTimeout(timeout);
  },[router , children])
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
          <img className="logo" src="/shared/logo.svg"></img>
          <div className="line"></div>
        </div>
        <nav  className={opened? "opened":"hide"}>
              <Link className={`Link ${choice=="home" ? "selected":""}`} href="/"><p className="index">01</p> <p>HOME</p></Link>
              <Link className={`Link ${choice=="destination" ? "selected":""}`} href="/destination"><p className="index">02</p> <p>DESTINATION</p></Link>
              <Link className={`Link ${choice=="crew" ? "selected":""}`} href="/crew"><p className="index">03</p> <p>CREW</p></Link>
              <Link className={`Link ${choice=="technology" ? "selected":""}`} href="/technology"><p className="index">04</p> <p>TECHNOLOGY</p></Link>     
            </nav>
        </header>
        <main className={`container ${fade}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
