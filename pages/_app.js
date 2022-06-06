import '../styles/globals.css'
import MainContent from '../components/MainContent'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainContent>
      <Component {...pageProps} />

      </MainContent>
    </>
  )
}

export default MyApp
