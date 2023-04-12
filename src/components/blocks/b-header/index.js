import React from 'react'
import styles from './styles.module.scss'

const BHeader = () => {
  return (
    <header className="header clear" role="banner">
      <section className={styles.preheader}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul id="menu-preheader" className="menu">
                <li id="menu-item-667" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-667"><a
                    href="#">Nuestro Equipo</a></li>
                <li id="menu-item-623" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-623"><a
                    href="#">Noticias</a></li>
                <li id="menu-item-226" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-226"><a
                    href="#">Contáctanos</a></li>
                <li id="menu-item-608" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-608"><a
                    href="#">Acceso</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="animacion-dias-header" className="header header-main night">
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
              <nav className="nav nav-home" role="navigation">
                <ul id="menu-main-menu" className="menu">
                  <li id="menu-item-18"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-18"><a
                      href="https://www.treeconomy.com.co/es/">/</a></li>
                  <li id="menu-item-313" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-313"><a
                      href="https://www.treeconomy.com.co/es/como-funciona/">Como Funciona</a></li>
                  <li id="menu-item-668" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-668"><a
                      href="https://www.treeconomy.com.co/es/calculadora-de-inversion/">Calculadora de inversion</a></li>
                  <li id="menu-item-1484" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1484">
                    <a target="_blank" rel="noopener" href="https://www.treeconomy.com.co/es/companies/">Companiesss</a>
                  </li>
                  <li id="menu-item-490" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-490"><a
                      href="https://app.treeconomy.com.co/projects/">Planta un Árbol</a></li>
                  <li id="menu-item-1122" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1122">
                    <a target="_blank" rel="noopener" href="https://www.instagram.com/thetreeconomy/">#</a></li>
                </ul>
              </nav>
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
    </header>
  )
}


export default BHeader

