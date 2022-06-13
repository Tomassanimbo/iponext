
import Link from "next/link"
import Image from "next/image"
import Script from "next/dist/client/script";


export default function GetMoney(){
  return (
    <>
      <section className="tirarFundo padding" >
        <div className="container">
          <div className="container-500">
              <div className="texto">
                <h1 className="title" >SOLICITAR UM LEVANTAMENTO   </h1>
                <p className="description">
                    O valor solicitado sera transferido para a plataforma principal, EMAINVEST.AO
                    certifique-se CONSULTAR a transferencia.
                </p>
              </div>

            <div className="boxMoney">
              <h3>Informe a quantidade por favor!</h3>
              <form action="POST" className="form">
                  <div className="form-control">
                    <input type="text" value={'Ao'}/>
                    <input required type="number" name="getMoney" id="getMoney" placeholder="2.000.000,00"/>
                  </div>

                  <button className="btn-busca" >LEVANTAR</button>

              </form>
            </div>
          </div>
        </div>
        

      </section>
    {/* <Script src="scripts/main.js" />
    <Script src="scipts/java.min.js" /> */}
    </>
  );
}