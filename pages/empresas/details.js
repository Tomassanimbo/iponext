
import Link from "next/link";

export default function Details(){

  return (
    <>
      <section className="detalhes-company padding">
        <div className="container">
          <Link href="/empresas" ><div className="back"><i className="fa-solid fa-arrow-left-long"></i>Back</div></Link>

          <h1>Minhas informacoes</h1>
        </div>
      </section>
    </>
  );
}