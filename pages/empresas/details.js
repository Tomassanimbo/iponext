
import Link from "next/link";
import Image from "next/image";

export default function Details(){

  return (
    <>
      <section className="detalhes-company padding">
        <div className="container">
            <nav className="informar">
              <Link href="/empresas" ><div className="back"><i className="fa-solid fa-arrow-left-long"></i>Back</div></Link>
              <i className="fa-regular fa-heart favorite-1"></i>

            </nav>
            <div className="information">
            <h1 className="title-name" >Minhas informacoes</h1>
            <p>dados do IPO</p>
            </div>

            <section className="details-company">
              <div className="image">
              <Image src="/image/HERO.jpg" width={300} height={250} alt="" />
              </div>
              <div className="info-company">
                <h1>Minhas information</h1>
              </div>

              <div className="text-company">
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam adipisci odit, laborum, inventore autem fugit sed incidunt nisi dolore voluptate quaerat laudantium exercitationem delectus deleniti suscipit nemo tenetur sunt rem porro minima neque excepturi labore unde. Recusandae veniam voluptates, animi accusantium aliquam necessitatibus nesciunt omnis corrupti inventore esse, fugit laborum aliquid! Omnis maxime veritatis eos minus culpa quas quaerat nihil alias similique labore vero officiis ullam exercitationem sunt aliquam eligendi commodi eaque, placeat maiores reprehenderit dolor qui.
                </p>
              </div>
              <div className="button-invest">
                <button>invest</button>
              </div>
            </section>
        </div>
      </section>
    </>
  );
}