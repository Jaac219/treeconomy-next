import Head from 'next/head'
import HMain from '../components/main/index.js'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Treeconomy - Invierte en Arboles - Retornos mayores al 12%</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HMain/>
     
      {/* <footer className="footer" role="contentinfo">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <h2>Mantente informado sobre opciones de inversión</h2>
          <ul className="form-footer">
            <li className="input-form"><input type="email" name="email-subscribe" id="email-subscribe"
                placeholder="Ingresa tu correo electrónico"/></li>
            <li className="button-form"><a href="#">&gt;</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <ul id="menu-footer" className="menu">
            <li id="menu-item-115"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item menu-item-115">
              <a href="https://www.treeconomy.com.co/es/" aria-current="page">Inició</a></li>
            <li id="menu-item-383" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-383"><a
                href="https://www.treeconomy.com.co/es/como-funciona/">Como Funciona</a></li>
            <li id="menu-item-669" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-669"><a
                href="https://www.treeconomy.com.co/es/calculadora-de-inversion/">Calculadora de inversion</a></li>
            <li id="menu-item-385" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-385"><a
                href="https://www.treeconomy.com.co/es/quienes-somos/">Equipo</a></li>
            <li id="menu-item-384" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-384"><a
                href="https://www.treeconomy.com.co/es/contactanos/">Contáctanos</a></li>
            <li id="menu-item-624" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-624"><a
                href="https://www.treeconomy.com.co/es/noticias/">Noticias</a></li>
            <li id="menu-item-850" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-850"><a
                href="https://www.treeconomy.com.co/es/faqs/">Preguntas frecuentes</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <ul className="redes-footer">
            <li>
              <a href="https://www.facebook.com/TheTREEconomy" target="_blank"><img alt="Facebook"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Facebook.png" className="lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></a>
            </li>
            <li>
              <a href="https://www.instagram.com/thetreeconomy/" target="_blank"><img alt="Instagram"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Instagram.png" className="lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></a>
            </li>
            <li>
              <a href="https://twitter.com/TheTreeconomy" target="_blank"><img alt="Gorjeo"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Twitter.png" className="lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <p className="final">© 2021 TREEconomía. Reservados todos los derechos. <a href="#">Términos y condiciones</a>
          </p>
        </div>
      </div>
    </div>
  </footer>  */}
    </>
  )
}

// export async function getStaticProps(){
//   const res = await fetch('http://localhost:3000/api/header')
//   const header = await res.json()

//   return {
//     props: {
//       header
//     }
//   }
// }
