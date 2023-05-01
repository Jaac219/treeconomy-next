import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { useContext } from 'react'
import GlobalContext from '@/src/context/globalContext'


const MShrubbery = ()=>{
  const { data: { home } } = useContext(GlobalContext)
  return (
    <div className={`container-fluid arbustos`}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xl-12 col-12">
            <div className="position-text">
              <h2 className="tittle-banner">
                <span className="titulo-1"> </span>
                <span className="titulo-2">
                  {home.title.title2}{' '}
                </span>
                <span className="titulo-3"> {home.title.title3} </span>
              </h2>
              <a
                href="https://www.treeconomy.com.co/es/como-funciona/"
                className="who-button"
              >
                Como Funciona
              </a>
              <p className="texto-general">
                Plataforma de inversión, que te ofrece la posibilidad de obtener
                retornos superiores al 12% anual, mientras haces un gran impacto
                positivo al mundo a través de la forestación.
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/TheTREEconomy"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/thetreeconomy/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/TheTreeconomy" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="video-principal">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2>¿Cómo lo hacemos?</h2>
              <div className="contenedor-video">
                <iframe
                  width="100%"
                  height="100%"
                  rel="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  data-src="https://www.youtube.com/embed/L-P50TKq0-I?rel=0"
                  className="lazyloaded"
                  src="https://www.youtube.com/embed/L-P50TKq0-I?rel=0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contenedor-plant-now">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2>Inversión en reforestación accesible para todos </h2>
            </div>
          </div>
          <div className="row d-flex align-items-baseline">
            <div className="col-xl-3">
              <div className="item-plant-now wow fadeInUp">
                <img
                  alt=""
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2054.png"
                  className="lazyload"
                  src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2054.png"
                />
                <p className="texto-descriptivo"></p>
                <p>
                  <strong>Planta un Árbol:</strong> Invierte en arboles de
                  diferentes edades, iniciando desde tan solo un árbol
                </p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="item-plant-now">
                <img
                  alt=""
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2055.png"
                  className="lazyload"
                  src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2055.png"
                />
                <p className="texto-descriptivo"></p>
                <p>
                  <strong>Sigue tu inversión:</strong> Sigue el crecimiento de
                  tus árboles y el carbono capturado en la plataforma de
                  Treeconomy
                </p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="item-plant-now">
                <img
                  alt=""
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2053.png"
                  className="lazyload"
                  src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2053.png"
                />
                <p className="texto-descriptivo"></p>
                <p>
                  <strong>Intercambia tus árboles:</strong> Conecta con otros
                  usuarios y recibe tus utilidades más rápido ​
                </p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="item-plant-now">
                <img
                  alt=""
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2056.png"
                  className="peque lazyload"
                  src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2056.png"
                />
                <p className="texto-descriptivo"></p>
                <p>
                  <strong>Recibe tus utilidades:</strong> Recibe utilidades por
                  la venta de tus árboles y los{' '}
                  <a
                    href="https://es.wikipedia.org/wiki/Bonos_de_carbono"
                    rel="noopener"
                    target="_blank"
                  >
                    Bonos de Carbono
                  </a>{' '}
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contenedor-botton">
                <a
                  href="https://app.treeconomy.com.co/projects/"
                  className="button-general"
                >
                  Empieza a plantar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MShrubbery