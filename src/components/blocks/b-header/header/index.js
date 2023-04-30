import Navbar from '../navbar'
import Languaje from '../languaje'
import styles from './styles.module.scss'

import { useContext, useEffect, useState } from 'react'
import DayContext from '@/src/context/dayContext'

const Header = ()=>{

  const {isDay} = useContext(DayContext);
  const [headerIsTop, setHeaderIsTop] = useState(false)

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if(scrollTop <= 45) setHeaderIsTop(false)
    else setHeaderIsTop(true)
  }
  
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  return (
    // <section id="animacion-dias-header" className={`${styles.header} ${styles.headerMain} ${styles.night}`}>
    <section
      id="animacion-dias-header"
      className={`header header-main ${isDay ? 'day' : 'night'} ${headerIsTop ? 'top-of-page': ''} `}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xl-2 col-lg-2">
            <div className="logo logo-animado" id="myGallery">
              <a href="http://localhost:3000">
                {isDay || headerIsTop ? 
                  <img
                    id="logo-inicial-color-verde"
                    alt="Logo"
                    data-src="https://treeconomy.com.co/wp-content/uploads/2020/07/Logo-Verde.png"
                    className={"logo-img active lazyload"}
                    src="https://treeconomy.com.co/wp-content/uploads/2020/07/Logo-Verde.png"
                  /> :
                  <img
                    id="logo-inicial-color-blanco"
                    alt="Logo"
                    data-src="https://treeconomy.com.co/wp-content/uploads/2020/08/Logo-Blanco.png"
                    className={"logo-img active lazyload"}
                    src="https://treeconomy.com.co/wp-content/uploads/2020/08/Logo-Blanco.png"
                  />
                }
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