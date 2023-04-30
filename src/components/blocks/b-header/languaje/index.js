import { useRouter } from "next/router"

const Languaje = () => {
  const opt = {
    es: {
      title:"Espa&ntilde;ol de Colombia",
      alt:"es",
      dataSrc:"https://www.treeconomy.com.co/wp-content/plugins/translatepress-multilingual/assets/images/flags/es_CO.png",
      src:"https://www.treeconomy.com.co/wp-content/plugins/translatepress-multilingual/assets/images/flags/es_CO.png"
    },
    en: {
      title: "English",
      alt: "en",
      dataSrc: "https://www.treeconomy.com.co/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png",
      src: "https://www.treeconomy.com.co/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png"
    }
  }

  const router = useRouter()
  const { locale } = router

  const changeLang = (e) =>{
    e.preventDefault()
    router.push(router.pathname, router.pathname, {
      locale: e.target.alt
    })
  }

  const LanguajeOption = ({ data })=>{
    const { title, alt, dataSrc, src } = data
    let isCurrent = (locale == alt)
    return(
      <a
        href="#"
        className={ isCurrent ? "trp-ls-shortcode-disabled-language trp-ls-disabled-language" : ""}
        title={title}
        onClick={ isCurrent ? (e)=>e.preventDefault(): changeLang}
      >
        <img
          width="18"
          height="12"
          title={title}
          alt={alt}
          data-src={dataSrc}
          className="trp-flag-image lazyload"
          src={src}
        />{' '}
      </a>
    )
  }

  return (
    <div className="trp_language_switcher_shortcode">
      <div
        className="trp-language-switcher trp-language-switcher-container"
        data-no-translation
      >
        <div className="trp-ls-shortcode-current-language">
          <LanguajeOption data={opt[locale]} />
        </div>
        <div className="trp-ls-shortcode-language" style={{width: "68px", display: "none"}}>
          <LanguajeOption data={opt[locale]} />
          <LanguajeOption data={locale=='es' ? opt['en'] : opt['es'] } />
        </div>
      </div>
    </div>
  )
}

export default Languaje