import en from '../../lang/en'
import es from '../../lang/es'

export default function ContactUs() {
  return (
    <>
      <section className="facilities">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-4">
              <div className="card-contact">
                <img
                  alt=""
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/undraw_my_app_grf2.png"
                  className="lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                />
                <p>Chatea con uno de nuestros asesores de inversión</p>
                <a href="https://web.whatsapp.com/send?phone=12027666468">
                  Abrir Chat
                </a>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card-contact down">
                <img
                  alt=""
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/undraw_faq_rjoy.png"
                  className="lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                />
                <p>
                  La inversión sostenible puede ser sobrecogedora, revisa lo que
                  otros han preguntado antes
                </p>
                <a href="https://www.treeconomy.com.co/es/faqs/">
                  Preguntas y Respuestas
                </a>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card-contact">
                <img
                  alt=""
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/undraw_newspaper_k72w.png"
                  className="lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                />
                <p>
                  Nuestros artículos fueron pensados en resolver algunas de tus
                  preguntas
                </p>
                <a href="https://www.treeconomy.com.co/es/noticias/">
                  Ver Noticias
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="formulario-section">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-6">
              <h3>¿Sigues teniendo preguntas?</h3>
              <h2>Hablemos!</h2>
              <p>
                Hola Treeconomy Investor, Nuestro equipo de asesores de
                inversión siempre está aquí para ayudarlo, háganos saber
                cualquier pregunta que pueda tener y nos pondremos en contacto
                en las próximas horas.
              </p>
              <ul style={{padding: 0, margin: 0, listStyle: "none"}}>
                <li className="lista-csm">
                  <a href="tel:+1(202)766%206468">
                    <img
                      alt=""
                      data-src="https://www.treeconomy.com.co/wp-content/uploads/2023/02/323310.png"
                      className="img-icon-flag lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    />
                    +1(202)766 6468
                  </a>
                </li>
                <li className="lista-csm">
                  <a href="tel:+573215794062">
                    <img
                      alt=""
                      data-src="https://www.treeconomy.com.co/wp-content/uploads/2023/02/flag-round-250.png"
                      className="img-icon-flag lazyload"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    />
                    <i className="fas fa-flag-col"></i>+573215794062
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-6">
              <div className="form-style">
                <div
                  className="wpcf7 no-js"
                  id="wpcf7-f225-o1"
                  lang="es-CO"
                  dir="ltr"
                >
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>{' '}
                    <ul></ul>
                  </div>
                  <form
                    action="/es/contactanos/#wpcf7-f225-o1"
                    method="post"
                    className="wpcf7-form init"
                    aria-label="Formulario de contacto"
                    data-status="init"
                    data-no-translation-aria-label=""
                    data-trp-original-action="/es/contactanos/#wpcf7-f225-o1"
                  >
                    <div style={{display: "none"}}>
                      <input type="hidden" name="_wpcf7" defaultValue="225" />
                      <input
                        type="hidden"
                        name="_wpcf7_version"
                        defaultValue="5.7.3"
                      />
                      <input type="hidden" name="_wpcf7_locale" defaultValue="es_CO" />
                      <input
                        type="hidden"
                        name="_wpcf7_unit_tag"
                        defaultValue="wpcf7-f225-o1"
                      />
                      <input
                        type="hidden"
                        name="_wpcf7_container_post"
                        defaultValue="0"
                      />
                      <input
                        type="hidden"
                        name="_wpcf7_posted_data_hash"
                        defaultValue=""
                      />
                    </div>
                    <p>
                      <label> Nombre y Apellido </label>
                      <br />
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="your-name"
                      >
                        <input
                          size="40"
                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          defaultValue=""
                          type="text"
                          name="your-name"
                        />
                      </span>
                    </p>
                    <p>
                      <label> Email </label>
                      <br />
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="your-email"
                      >
                        <input
                          size="40"
                          className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                          aria-required="true"
                          aria-invalid="false"
                          defaultValue=""
                          type="email"
                          name="your-email"
                        />
                      </span>
                    </p>
                    <p>
                      <label> País de residencia </label>
                      <br />
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="countrytext-155"
                      >
                        <input
                          size="40"
                          className="wpcf7-form-control wpcf7-text wpcf7-countrytext wpcf7-validates-as-countrytext"
                          aria-invalid="false"
                          defaultValue=""
                          type="text"
                          name="countrytext-155"
                        />
                      </span>
                    </p>
                    <p>
                      <label> Número teléfono </label>
                      <br />
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="phonetext-325"
                      >
                        <input
                          size="40"
                          className="wpcf7-form-control wpcf7-text wpcf7-phonetext wpcf7-validates-as-phonetext"
                          aria-invalid="false"
                          defaultValue=""
                          type="text"
                          name="phonetext-325"
                        />
                        <input
                          type="hidden"
                          name="phonetext-325-country-code"
                          className="wpcf7-phonetext-country-code"
                        />
                      </span>
                    </p>
                    <p>
                      <label> Escribe tu mensaje </label>
                      <br />
                      <span
                        className="wpcf7-form-control-wrap"
                        data-name="your-message"
                      >
                        <textarea
                          cols="40"
                          rows="10"
                          className="wpcf7-form-control wpcf7-textarea"
                          aria-invalid="false"
                          name="your-message"
                        ></textarea>
                      </span>
                    </p>
                    <p></p>
                    <div
                      id="cf7sr-644c90bdf0fea"
                      className="cf7sr-g-recaptcha"
                      data-sitekey="6LcodYkkAAAAAIJ9VxKgu5H6cPABaN-RCKbc8Fs7"
                    ></div>
                    <span
                      className="wpcf7-form-control-wrap cf7sr-recaptcha"
                      data-name="cf7sr-recaptcha"
                    >
                      <input
                        type="hidden"
                        name="cf7sr-recaptcha"
                        defaultValue=""
                        className="wpcf7-form-control"
                      />
                    </span>

                    <p>
                      <input
                        className="wpcf7-form-control has-spinner wpcf7-submit"
                        type="submit"
                        defaultValue="Enviar mensaje"
                      />
                    </p>
                    <div className="wpcf7-response-output" aria-hidden="true"></div>
                    <input type="hidden" name="trp-form-language" defaultValue="es" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps({locale}){

  /** En este punto debe entrar la informacion desde el endpoint
  de la api para ser enviado a los componentes por props*/
  const data = locale === "en" ? en : es

  return {
    props: {
      data
    }
  }
}