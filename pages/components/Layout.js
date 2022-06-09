
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";



export default function Layout({children}){
  return(
    <>
    <Head>
      <link rel="shortcut icon" href=""/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      <title>EMAINVEST IPO</title>
    </Head>
      <Navbar/>
        <div className="hight">{children}</div>
      <Footer/>
    </>
  )
}