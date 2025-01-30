import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>frontend-mentor : space tourism multipage</title>
        <link rel="icon" href="../assets/favicon-32x32.png"></link>
      </head>
      <body className="body">
        <header>
        <div className="lineContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        <div className="line"></div>
        </div>
        <nav>
              <Link className="Link" href="/"><p className="index">01</p> <p>HOME</p></Link>
              <Link className="Link" href="/destination"><p className="index">02</p> <p>DESTINATION</p></Link>
              <Link className="Link" href="#"><p className="index">03</p> <p>CREW</p></Link>
              <Link className="Link" href="#"><p className="index">04</p> <p>TECHNOLOGIE</p></Link>
        </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
