import Link from "next/link"
// import styles from "../../styles/Navbar.module.scss"
import Head from "next/head"
import Image from "next/image"

export default function Navbar(){
  return (
    <>
    <Head>
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerpolicy="no-referrer" /> */}

    </Head>
      <header className="header" >
            <div className="container flex nav-flex">
                <nav className="navbar flex">
                  <div className="logo">
                      <Link href="/" ><a><Image src="/image/logo-one.png" alt="" width={70} height={50}/></a></Link>
                  </div>
                    <ul className="menu flex">
                      <li className="active"><Link href="/"><a >Home</a></Link></li>
                      <li><Link href="empresas"><a>Empresas</a></Link></li>
                      <li><Link href="#"><a>Financiamento</a></Link></li>
                      <li><Link href="#"><a>Investir</a></Link></li>
                    </ul>
                </nav>
                <div >
                  <button className="btn btn-primary reset">
                    <Link href="acesso" >
                      <a>entrar</a>
                    </Link>
                  </button>
                </div>
            </div>
       </header>
    </>
  )
}