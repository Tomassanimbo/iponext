import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";


export default function Financiamento(){
  return(
    <>
      <section classsName="financiamento" >
          <div className="container">
            {/*area do dos buttons de activacao e empresa */}
              <div className="header-fina">
                <div className="tipocompany">
                <span className="empresa">
                  empresa
                </span>
                </div>
                <div className="companyAtive">
                  <form action="">
                    <input type="checkbox" name="" id="" />
                  </form>
                </div>
              </div>

              {/* Area do texto de informacao */}
              <div className="texto">
                <h1>Receba um financiamento</h1>
                <p>Digite seus dados para solicitar um financiamento</p>
                <span className="" >ao solicitar um financiamento tera de aguardar
                  a resposta num periodo de 24 horas, a pos o envio
                </span>
              </div>


              {/* Area das informacoes que sera obtida para o financiamento */}

              <div className="contactArea">
                <form action="">
                  <div className="form-control doc">
                      <input type="text" name="" id=""  placeholder="digite o NIF da empresa"/>
                      <input type="text" name="" id=""  placeholder="digite o seu BI "/>
                  </div>
                  <div className="form-control doc">
                      <input type="text" name="" id=""  placeholder="digite seu nome"/>
                      <input type="text" name="" id=""  placeholder="digite seu sobrenome"/>
                  </div>
                  <div className="form-control doc">
                      <input type="text" name="" id=""  placeholder="digite seu email"/>
                      <input type="text" name="" id=""  placeholder="digite seu telefone"/>
                  </div>

                  <div className="form-textarea">
                    <div className="shortInfo">
                      <span>conte o motivo</span>
                      <div className="mount">
                        <span>montante</span>
                        <input type="text" name="" id="" />
                      </div>
                    </div>
                    <textarea placeholder="digite o motivo do financiamneto"></textarea>
                  </div>

                  <div className="form-submit">
                    <input type="submit" value="enviar solicitacao" />
                    <i className="fa-solid fa-paper-plane"></i>
                  </div>
                </form>
              </div>
          </div>
      </section>
    </>
  )
}