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
        <h1 className="title">Porque o <strong>EMAINVEST<span>IPO</span> </strong> ?</h1>
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

    <section className="ipo padding">
      <div className="container box-flex">
        <h2 className="title">Com  o <strong><span>IPO</span></strong> voce tem a possibilidade 
          de alavancar o seu <strong>negocio</strong> de duas maneira
        </h2>

        <div className="box-ipo flex">
          <div className="circ box-flex">
            <Image src="/image/po1.svg" width={200} height={200} alt="" />
            <h3 className='title'>solicitar um financiamento</h3>
            <p className="description">
                basta pedir  um finciamento
                para que começa a dar vida aos
                seus investimentos.
            </p>
          </div>
          <div className="circ box-flex">
            <Image className="box-image" src="/image/po1.svg" width={200} height={200} alt="" />
            <h3 className='title'>solicitar um financiamento</h3>
            <p className="description">
                basta pedir  um finciamento
                para que começa a dar vida aos
                seus investimentos.
            </p>
          </div>
        </div>

      </div>
        <button className="btn btn-primary top">
          Ler mais
        </button>
    </section>


    <section className="aplicar padding">
      <div className="container flex-aplicar">
        <div className="texto">
          <h2 className='h2' >Saiba como aplicar o seu dinheiro</h2>
          <p className='description' >
            A EmainvestIPO trabalha diretamente 
            com empresas emissoras que estão abrindo o capital, 
            subscritores e corretoras online criando o primeiro 
            utilitário projetado para otimizar a distribuição no 
            varejo de ofertas públicas.
            Emissores e subscritores são capazes de obter rastreamento de 
            dados robusto incluindo desempenho e padrões, antes e depois da 
            oferta, enquanto as corretoras online são capazes de oferecer uma solução chave na mão para participar de IPOs. Nossos clientes e parceiros financeiros acessaram e participaram 
            com sucesso de ofertas públicas por meio da rede EmainvestIPO.
          </p>
        </div>

        <div className="image-aplicar">
          <div className="img-aplicar">
            <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
          </div>
          <div className="img-aplicar">
            <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
          </div>
          <div className="img-aplicar">
            <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
          </div>
          <div className="img-aplicar">
            <Image  src="/image/aviso1.svg" width={300} height={170} alt="" />
          </div>
        </div>
      </div>
    </section>
    

    </>
  )
}