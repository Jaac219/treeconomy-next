import BHeader from '../components/blocks/b-header'
// import 'normalize.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <BHeader />
      <Component {...pageProps} />
    </>
  )
}
