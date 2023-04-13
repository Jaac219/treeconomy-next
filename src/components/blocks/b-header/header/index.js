import styles from './styles.module.scss'

const Header = ({children})=>{
  return (
    <section id="animacion-dias-header" className={`${styles.header} ${styles.headeMain} ${styles.night}`}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xl-2 col-lg-2">
            <div className="logo logo-animado" id="myGallery">
              <a href="#">
                <img id="logo-inicial-color-verde" alt="Logo"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/07/Logo-Verde.png"
                  className="logo-img lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <img id="logo-inicial-color-blanco" alt="Logo"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/08/Logo-Blanco.png"
                  className="logo-img active lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
              </a>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9">
            {children}
          </div>
          <div className="col-xl-1 col-lg-1">
            <div className="col-xl-1">
              <div className="trp_language_switcher_shortcode">
                <div className="trp-language-switcher trp-language-switcher-container" data-no-translation>
                  <div className="trp-ls-shortcode-current-language">
                    <a href="#" className="trp-ls-shortcode-disabled-language trp-ls-disabled-language"
                      title="Espa&ntilde;ol de Colombia" onClick={(e)=>e.preventDefault()}>
                      <img width="18" height="12" alt="es_CO" title="Espa&ntilde;ol de Colombia"
                        data-src="https://www.treeconomy.com.co/wp-content/plugins/translatepress-multilingual/assets/images/flags/es_CO.png"
                        className="trp-flag-image lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/> </a>
                  </div>
                  <div className="trp-ls-shortcode-language">
                    <a href="#" className="trp-ls-shortcode-disabled-language trp-ls-disabled-language"
                      title="Espa&ntilde;ol de Colombia" onClick={(e)=>e.preventDefault()}>
                      <img width="18" height="12" alt="es_CO" title="Espa&ntilde;ol de Colombia"
                        data-src="https://www.treeconomy.com.co/wp-content/plugins/translatepress-multilingual/assets/images/flags/es_CO.png"
                        className="trp-flag-image lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/> </a>
                    <a href="https://www.treeconomy.com.co/en/" title="English">
                      <img width="18" height="12" alt="en_US" title="English"
                        data-src="https://www.treeconomy.com.co/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png"
                        className="trp-flag-image lazyload"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header