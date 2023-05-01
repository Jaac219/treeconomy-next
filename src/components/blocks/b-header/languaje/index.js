import GlobalContext from "@/src/context/globalContext"
import { useRouter } from "next/router"
import { useContext } from "react"
import Image from 'next/image'

const Languaje = () => {
  
  const router = useRouter()
  const { locale } = router

  const { data: { block: { header } } } = useContext(GlobalContext)

  const optLen = Object.keys(header?.languajes).filter((j)=>j!=locale)

  const changeLang = (e) =>{
    e.preventDefault()
    router.push(router.pathname, router.pathname, {
      locale: e.target.alt
    })
  }

  return (
    <div className="trp_language_switcher_shortcode">
      <div
        className="trp-language-switcher trp-language-switcher-container"
        data-no-translation
      >
        <div className="trp-ls-shortcode-current-language">
          <a
            href="#"
            className="trp-ls-shortcode-disabled-language trp-ls-disabled-language"
            title={header.languajes[locale].title}
            onClick={(e) => e.preventDefault()}
          >
            <img
              width={18}
              height={12}
              title={header.languajes[locale].title}
              alt={header.languajes[locale].alt}
              data-src={header.languajes[locale].icon}
              className="trp-flag-image lazyload"
              src={header.languajes[locale].icon}
            />{' '}
          </a>
        </div>
        <div
          className="trp-ls-shortcode-language"
          style={{ width: '68px', display: 'none' }}
        >
          <a
            href="#"
            className="trp-ls-shortcode-disabled-language trp-ls-disabled-language"
            title={header.languajes[locale].title}
            onClick={(e) => e.preventDefault()}
          >
            <img
              width={18}
              height={12}
              title={header.languajes[locale].title}
              alt={header.languajes[locale].alt}
              data-src={header.languajes[locale].icon}
              className="trp-flag-image lazyload"
              src={header.languajes[locale].icon}
            />{' '}
          </a>
          {optLen.map((val, i)=>{
            return (
              <a 
                key={i}
                href="#"
                title={header.languajes[val].title}
                onClick={changeLang}
              >
                <img
                  width={18}
                  height={12}
                  title={header.languajes[val].title}
                  alt={header.languajes[val].alt}
                  data-src={header.languajes[val].icon}
                  className="trp-flag-image lazyload"
                  src={header.languajes[val].icon}
                />{' '}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
  
}

export default Languaje