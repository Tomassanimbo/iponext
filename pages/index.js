import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return ( 
    <>
    <section className = "hero" >
      <div className = "container hero-flex" >
      
      <h1> Uma maneira incrivel de ver seu negocio crescer é com a <span>EMAINVEST</span> </h1> 
      
      <div className="button">
        <button className="btn btn-primary">entrar</button>
        <button className="btn btn-secondary">investir</button>
      </div>
      
      </div> 

    </section>

    <section className="barra">
      <div className="container barra-flex">
        <div className="info-barra">
          + 100 empresas
        </div>
        <div className="info-barra">
          + 200 investidores
        </div>
        <div className="info-barra">
          + 40.000 usuários ativos
        </div>
      </div>
    </section> 

    <section className="dicas">
        <h1 className="title">Porque o <strong>EMAINVES<span>TIPO</span> </strong> ?</h1>
      <div className="container grid">
          <div className="imgam">
            <Image className='imagens' src="/image/ipo.svg" width={500} height={300} alt="" />
          </div>

          <div className="box-dicas box-grid">
          <div className="info-dicas">
            <h3 className="title3">
              como investir
            </h3>
            <p>
              Um negocio de alta renda
              com as melhores ferramentas
              que te proporcionam um amnbiente facil.
            </p>
          </div>
          <div className="info-dicas">
            <h3 className="title3">
              como investir
            </h3>
            <p>
              Um negocio de alta renda
              com as melhores ferramentas
              que te proporcionam um amnbiente facil.
            </p>
          </div>
          <div className="info-dicas">
            <h3 className="title3">
              como investir
            </h3>
            <p>
              Um negocio de alta renda
              com as melhores ferramentas
              que te proporcionam um amnbiente facil.
            </p>
          </div>
          <div className="info-dicas">
            <h3 className="title3">
              como investir
            </h3>
            <p>
              Um negocio de alta renda
              com as melhores ferramentas
              que te proporcionam um amnbiente facil.
            </p>
          </div>
          </div>
      </div>
    </section>

    

    </>
  )
}