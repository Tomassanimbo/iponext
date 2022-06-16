
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";



export default function Layout({children}){
  return(
    <>
    
      <Navbar/>
        <div className="">{children}</div>
      <Footer/>
    </>
  )
}