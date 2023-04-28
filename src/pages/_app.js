import BHeader from '../components/blocks/b-header'
import BFooter from '../components/blocks/b-footer'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import 'normalize.css'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BChat from '../components/blocks/b-chat'
// import '@/styles/globals.scss'

import '@/public/styles.css'
import '@/public/intlTelInput.min.css'
import '@/public/countrySelect.min.css'
import '@/public/trp-language-switcher.css'
import '@/public/style.css'
import '@/public/bootstrap.min.css'
import '@/public/desktop-css.css'
// import '@/public/mobile-css.css'
import '@/public/addtoany.min.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <BHeader />
        <Component {...pageProps} />
      <BFooter />
      <BChat />
    </>
  )
}
