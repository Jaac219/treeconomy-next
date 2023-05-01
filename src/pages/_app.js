import BHeader from '../components/blocks/b-header'
import BFooter from '../components/blocks/b-footer'
import BChat from '../components/blocks/b-chat'

import { useState } from 'react'
import DayContext from '../context/dayContext'
import GlobalContext from '../context/globalContext'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Import css files
import '@/public/styles.css'
import '@/public/intlTelInput.min.css'
import '@/public/countrySelect.min.css'
import '@/public/trp-language-switcher.css'
import '@/public/style.css'
import '@/public/bootstrap.min.css'
import '@/public/desktop-css.css'
// import '@/public/mobile-css.css'
import '@/public/addtoany.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'normalize.css'

export default function App({ Component, pageProps }) {
  const [ isDay, setIsDay ] = useState(true)

  return (
    <GlobalContext.Provider value={pageProps}>
      <DayContext.Provider value={{ isDay, setIsDay }} >
        <BHeader />
          <Component />
        <BFooter />
        <BChat />
      </DayContext.Provider>
    </GlobalContext.Provider>
  )
}

