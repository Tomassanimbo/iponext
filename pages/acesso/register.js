
import Link from "next/link"

export default function Register(){
  return (
    <>
     <section className=" paddingd">
          <div className="min-container ">
            <h1>Login</h1>
            <div className="login-are">
              <div className="text-left">

              </div>
              <div className="login-acess">
                <form action="" className="form">
                  <div className="form-control">
                    <input type="text" placeholder="Email /Telefone" />
                  </div>
                  <div className="form-control">
                    <input type="text" placeholder="Digite sua senha" />
                  </div>
                  <div className="form-checkbox">
                  <label htmlFor="rem">Lembrar</label>
                    <input id="rem" type="checkbox" placeholder="Digite sua senha" />
                    
                  </div>
               
                  <input type="submit" value="Entrar" />
                  <div className="account">
                    <p>tenho uma conta?</p> 
                    <Link href="/acesso">
                      <a>fazer login</a>
                    </Link>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>


     </section>
    </>
  );
}