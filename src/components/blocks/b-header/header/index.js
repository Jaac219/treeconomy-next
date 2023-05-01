import Navbar from '../navbar'
import Languaje from '../languaje'

import styles from './styles.module.scss'

import { useContext, useEffect, useState } from 'react'
import DayContext from '@/src/context/dayContext'
import GlobalContext from '@/src/context/globalContext'

const Header = ()=>{
  const { data: { block: { header } } } = useContext(GlobalContext)
  const { isDay } = useContext(DayContext);
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
    <section
      id="animacion-dias-header"
      className={`header header-main ${isDay ? 'day' : 'night'} ${headerIsTop ? 'top-of-page': ''} `}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-xl-2 col-lg-2">
            <div className="logo logo-animado" id="myGallery">
              <a href="http://localhost:3000">
                  <img
                    alt="Logo"
                    data-src={header?.logo[isDay || headerIsTop ? 'day': 'nigth'].logo}
                    className="logo-img active lazyload"
                    src={header?.logo[isDay || headerIsTop ? 'day': 'nigth'].logo}
                  />
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