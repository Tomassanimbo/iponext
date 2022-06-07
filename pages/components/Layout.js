
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";



export default function Layout({children}){
  return(
    <>
    <Head>
      <link rel="shortcut icon" href=""/>
      <title>EMAINVEST IPO</title>
    </Head>
      <Navbar/>
        <div className="hight">{children}</div>
      <Footer/>
    </>
  )
}