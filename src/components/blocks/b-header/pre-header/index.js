import styles from './styles.module.scss'

const PRHeader = () =>{
  return(
    // <section className={styles.preheader}>
    <section className="preheader">
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
  )
}

export default PRHeader