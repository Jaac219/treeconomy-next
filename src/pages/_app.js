import BHeader from '../components/blocks/b-header'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import 'normalize.css'
// import '@/styles/globals.scss'
// import '@/styles/globalss.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <BHeader />
      <Component {...pageProps} />
    </>
  )
}
