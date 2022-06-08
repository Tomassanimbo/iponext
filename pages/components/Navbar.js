import Link from "next/link"
// import styles from "../../styles/Navbar.module.scss"

import Image from "next/image"

export default function Navbar(){
  return (
    <>
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
                  <button className="btn btn-primary">
                    entrar
                  </button>
                </div>
            </div>
       </header>
    </>
  )
}