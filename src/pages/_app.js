import BHeader from '../components/blocks/b-header'
import BFooter from '../components/blocks/b-footer'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import 'normalize.css'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <BHeader />
      <Component {...pageProps} />
      <BFooter />
    </>
  )
}
