import { useContext } from 'react'
import styles from './styles.module.scss'
import GlobalContext from '@/src/context/globalContext'

const Navbar = ()=>{
  const { data: { block: { header } } } = useContext(GlobalContext)
  return(
    <nav className="nav nav-home" role="navigation">
      <ul id="menu-main-menu" className="menu">
        {header?.items && header.items.map((val, i)=>{
          return val.type === 'button' ?
            <li key={i} id="menu-item-490" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-490"><a
            href={val.url}>{val.label}</a></li>
          :
            <li key={i} id="menu-item-313" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-313"><a
            href={val.url}>{val.label}</a></li>
        })}        
        <li id="menu-item-1122" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1122">
          <a target="_blank" rel="noopener" href="https://www.instagram.com/thetreeconomy/">#</a></li>
      </ul>
    </nav>
  )
}

export default Navbar