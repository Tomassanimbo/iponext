import Script from "next/script";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
export default function Admin() {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.2/dist/boxicons.js"
        integrity="sha512-KKEQFWV65YzA3d0Ih60GpEKEdT4ERdTgNyZO3aE0jDSEYpb2A16P+CwpPor5DhL3ZlIJtyczAcmjOfo3jQNyUQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></Script>

      <div id="admin">
        <aside className="asideBar">
          <div className="brand">
            <div className="avatar"></div>
            <div className="dash">
              <i className="iconBoard bx bxs-dashboard"></i>
              <span>Dashboard</span>
            </div>
          </div>

          <ul>
            <li>
              <Link href="#">
                <a>
                  <i className="icon  bx bx-home-heart"></i>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-money-withdraw"></i>
                  Financiamento
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-git-merge"></i>
                  Investimento
                </a>
              </Link>
            </li>
            <span>Administracao</span>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-building"></i>
                  Empresa
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-group"></i>
                  Clientes
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-user"></i>
                  Usuarios
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-at"></i>
                  Email
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-cog"></i>
                  Config
                </a>
              </Link>
            </li>
            <span>Helps</span>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-message-square"></i>
                  Mensagem
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-message-rounded"></i>
                  Chat
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-message-rounded"></i>
                  Contactos
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-support"></i>
                  Suport
                </a>
              </Link>
            </li>
          </ul>
        </aside>

        <div className="conteudo">
          <nav className="navBar">
            <div className="container">
              <div className="perfil">
                <div className="avatar-1"></div>
                <span className="name">Jesus</span>
                <span className="type-acount">Admin</span>
              </div>
              <form action="">
                <div className="form-search">
                  <input type="text" placeholder="busca..." />
                  <button>
                    <i className="bx bx-search"></i>
                  </button>
                </div>
              </form>

              <div className="notification">
                <i className="bx bx-bell"></i>
              </div>
            </div>
          </nav>

          <main>
            ruassisa
          </main>

          <aside>
            right
          </aside>
        </div>
      </div>
    </>
  );
}
