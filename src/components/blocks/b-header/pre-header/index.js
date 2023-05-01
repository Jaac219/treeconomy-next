import { useContext } from 'react'
import styles from './styles.module.scss'
import GlobalContext from '@/src/context/globalContext'

const PRHeader = () =>{
  const { data: { block: { preHeader } } } = useContext(GlobalContext)
  return(
    <section className="preheader">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <ul id="menu-preheader" className="menu">
              {preHeader?.items && preHeader.items.map((val, i)=>{
                return val.type === 'button' ?
                  <li key={i} id="menu-item-608" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-608"><a
                  href={val.url}>{val.label}</a></li>
                 : 
                  <li key={i} id="menu-item-667" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-667"><a
                  href={val.url}>{val.label}</a></li>
               })
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PRHeader