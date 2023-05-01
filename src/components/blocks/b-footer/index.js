import GlobalContext from "@/src/context/globalContext"
import { useContext } from "react"

const BFooter = () => {
  const { data: { block: { footer } } } = useContext(GlobalContext)
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h2>{footer.title}</h2>
            <ul className="form-footer">
              <li className="input-form">
                <input
                  type="email"
                  name="email-subscribe"
                  id="email-subscribe"
                  placeholder={footer.placeholder}
                />
              </li>
              <li className="button-form">
                <a href="#">&gt;</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <ul id="menu-footer" className="menu">
              {footer?.items && footer.items.map((val, i)=>{
                return (
                  <li key={i} className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a
                      href={val.url}
                    >
                      {val.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <ul className="redes-footer">
              <li>
                <a
                  href="https://www.facebook.com/TheTREEconomy"
                  target="_blank"
                >
                  <img
                    alt="Facebook"
                    data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Facebook.png"
                    className="lazyload"
                    src="https://treeconomy.com.co/wp-content/uploads/2020/05/Facebook.png"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thetreeconomy/"
                  target="_blank"
                >
                  <img
                    alt="Instagram"
                    data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Instagram.png"
                    className="lazyload"
                    src="https://treeconomy.com.co/wp-content/uploads/2020/05/Instagram.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/TheTreeconomy" target="_blank">
                  <img
                    alt="Gorjeo"
                    data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Twitter.png"
                    className="lazyload"
                    src="https://treeconomy.com.co/wp-content/uploads/2020/05/Twitter.png"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <p className="final">
              {footer.copyright}
              <br />
              <a href={footer.conditions.url}>{footer.conditions.text}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default BFooter
