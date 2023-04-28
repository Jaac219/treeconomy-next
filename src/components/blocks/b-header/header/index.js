import Navbar from '../navbar'
import Languaje from '../languaje'
import styles from './styles.module.scss'

const Header = ()=>{
  return (
    // <section id="animacion-dias-header" className={`${styles.header} ${styles.headerMain} ${styles.night}`}>
    <section id="animacion-dias-header" className="header header-main night">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xl-2 col-lg-2">
            <div className="logo logo-animado" id="myGallery">
              <a href="#">
                <img id="logo-inicial-color-verde" alt="Logo"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/07/Logo-Verde.png"
                  className="logo-img"
                  src="https://treeconomy.com.co/wp-content/uploads/2020/07/Logo-Verde.png"/>
                <img id="logo-inicial-color-blanco" alt="Logo"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/08/Logo-Blanco.png"
                  className="logo-img active lazyload"
                  src="https://treeconomy.com.co/wp-content/uploads/2020/08/Logo-Blanco.png"/>
              </a>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9">
            <Navbar />
          </div>
          <div className="col-xl-1 col-lg-1">
            <div className="col-xl-1">
              <Languaje />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header