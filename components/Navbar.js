import Link from "next/link"

export default function Navbar(){
  return (
    <>
      <div className="container">

            <nav className="navbar">
            <div className="logo">

            </div>
              <ul>
                <li><Link href="#"><a>Home</a></Link></li>
                <li><Link href="#"><a>Empresas</a></Link></li>
                <li><Link href="#"><a>Financiamento</a></Link></li>
                <li><Link href="#"><a>Investir</a></Link></li>
              </ul>
            </nav>
            <div className="btn btn-primary"></div>
      </div>
    </>
  )
}