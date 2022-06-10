
import Link from "next/link";
import Image from "next/image";

export default function Details(){

  return (
    <>
      <section className="detalhes-company padding">
        <div className="container">
            <nav className="informar">
              <Link href="/empresas" ><div className="back"><i className="back-arrow fa-solid fa-arrow-left-long"></i>Back</div></Link>
              <i className="heart fa-regular fa-heart favorite-1"></i>

            </nav>
            <div className="name-company">
            <h1 className="title-name" >Minhas informacoes</h1>
            <p>dados do IPO</p>
            </div>

            <section className="details-company">
              <div className="image">
              <Image layout='fill' width={500} height={500} className="image-foto" src="/image/HERO.jpg"  alt="" />
              </div>
              <div className="number-invest">

                <h1>25</h1>
                {/* <h2>Investidores</h2> */}
                <h2>Investidores</h2>
              </div>
              <div className="info-company">
                <h1>Minhas information</h1>
                <div className="top">
                  <div className="dados-semana">
                    <ul>
                      <li>semana</li>
                      <li>dia</li>
                      <li>mes</li>
                      <li>ano</li>
                      <li>Tempo na bolsa</li>
                    </ul>
                  </div>
                  <div className="dados-day">
                  <ul>
                      <li>Quinta feira</li>
                      <li>26</li>
                      <li>setembro</li>
                      <li>22</li>
                      <li></li>
                      <li></li>
                      <li>5</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-company">
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam adipisci odit, laborum, inventore autem fugit sed incidunt nisi dolore voluptate quaerat laudantium exercitationem delectus deleniti suscipit nemo tenetur sunt rem porro minima neque excepturi labore unde. Recusandae veniam voluptates, animi accusantium aliquam necessitatibus nesciunt omnis corrupti inventore esse, fugit laborum aliquid! Omnis maxime veritatis eos minus culpa quas quaerat nihil alias similique labore vero officiis ullam exercitationem sunt aliquam eligendi commodi eaque, placeat maiores reprehenderit dolor qui.
                </p>
              </div>
              <div className="button-invest">
                <button className="btn-busca btn-primary" >invest</button>
              </div>
            </section>


            
        </div>
      </section>
    </>
  );
}