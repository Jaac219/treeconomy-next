import styles from './styles.module.scss'

const Navbar = ()=>{
  return(
    // <nav className={`${styles.nav} ${styles.navHome}`} role="navigation">
    <nav className="nav nav-home" role="navigation">
      <ul id="menu-main-menu" className="menu">
        <li id="menu-item-18"
          className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-18"><a
            href="http://localhost:3000/">/</a></li>
        <li id="menu-item-313" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-313"><a
            href="http://localhost:3000/how-it-works/">Como Funciona</a></li>
        <li id="menu-item-668" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-668"><a
            href="http://localhost:3000/investment-calculator">Calculadora de inversion</a></li>
        <li id="menu-item-1484" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1484">
          <a target="_blank" rel="noopener" href="http://localhost:3000/companies">Companies</a>
        </li>
        <li id="menu-item-490" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-490"><a
            href="https://app.treeconomy.com.co/en/projects/">Planta un Árbol</a></li>
        <li id="menu-item-1122" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1122">
          <a target="_blank" rel="noopener" href="https://www.instagram.com/thetreeconomy/">#</a></li>
      </ul>
    </nav>
  )
}

export default Navbar