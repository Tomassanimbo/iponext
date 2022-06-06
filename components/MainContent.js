
import Navbar from "./Navbar";


export default function MainContent({children}){
  return(
    <>
      <Navbar/>
      <div>{children}</div>
    </>
  )
}
