import Head from 'next/head'
import en from '../../lang/en'
import es from '../../lang/es'

export default function InvestmentCalculator() {
  return (
    <>
      <Head>
        <title>
          Treeconomy - Invierte en Arboles - Retornos mayores al 12%
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="site-calc">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="info-inicial">
                <h2>Calculadora de inversiones de sueños</h2>
                <p></p>
                <p>
                ¿Sabes cuánto debes ahorrar para lograr conseguir tus sueños? Conócelo con nuestra calculadora de inversión! "Funciona como interés compuesto,
                  <a
                    href="https://www.investopedia.com/terms/c/compoundinterest.asp"
                    target="_blank"
                    rel="noopener"
                  >
                   "Haz Clic aqui para saber mas"
                  </a>
                </p>
                <p className="paso-1">Paso 1: Selecciona tu tipo de inversión</p>
              </div>
            </div>

            <div className="col-xl-12">
              <ul className="calc-items-month nav">
                <li id="home-item">
                  <a
                    data-toggle="tab"
                    href="#nav-monthly"
                    role="tab"
                    className="active show"
                    aria-selected="true"
                  >
                    Monthly Investment
                  </a>
                </li>
                <li id="university-item">
                  <a
                    data-toggle="tab"
                    href="#nav-onetime"
                    role="tab"
                    className=""
                    aria-selected="false"
                  >
                    One time investment
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="nav-monthly"
                  role="tabpanel"
                  aria-labelledby="nav-monthly-tab"
                >
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="info-inicial info-2">
                        <p className="paso-1">Step 2: Choose your Dream</p>
                      </div>
                      <ul className="calc-items nav">
                        <li id="home-item">
                          <div className="img-prev-item">
                            <img
                              alt=""
                              data-src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/home.svg"
                              className=" ls-is-cached lazyloaded"
                              src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/home.svg"
                              loading="lazy"
                            />
                          </div>
                          <a data-toggle="tab" href="#nav-home" role="tab">
                            Dream Home
                          </a>
                        </li>
                        <li id="university-item">
                          <div className="img-prev-item">
                            <img
                              alt=""
                              data-src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/university.svg"
                              className=" ls-is-cached lazyloaded"
                              src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/university.svg"
                              loading="lazy"
                            />
                          </div>
                          <a data-toggle="tab" href="#nav-profile" role="tab">
                            Children's University
                          </a>
                        </li>
                        <li id="car-item">
                          <div className="img-prev-item">
                            <img
                              alt=""
                              data-src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/internet-of-things.svg"
                              className=" ls-is-cached lazyloaded"
                              src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/internet-of-things.svg"
                              loading="lazy"
                            />
                          </div>
                          <a data-toggle="tab" href="#nav-car" role="tab">
                            Wealth Planning
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      Step 3: Let’s work together to make your dream home a
                      reality! Pick a monthly amount that you can invest, click
                      calculate and your total investment plus profits will
                      appear. Easy and reliable!
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      Step 3: You can proactively plan for your children’s
                      education! Pick a monthly investment and secure the future
                      of your loved ones. Easy and fulfilling!
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-car"
                      role="tabpanel"
                      aria-labelledby="nav-car-tab"
                    >
                      Step 3: Investing in reforestation not only gives you the
                      advantage of innovative investing, but it will propel you to
                      become a contributor to helping our planet while becoming
                      financially successful!
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-other"
                      role="tabpanel"
                      aria-labelledby="nav-other-tab"
                    ></div>
                  </div>

                  <div className="row">
                    <div className="col-xl-12">
                      <form action="" data-trp-original-action="">
                        <ul className="formulario-chart">
                          <li>
                            <label >
                              STEP 4: Enter your Monthly Investment
                            </label>
                            <br />
                            <input
                              type="text"
                              name="currency-field"
                              id="valor_mensual"
                              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                              defaultValue="$500"
                              data-type="currency"
                            />
                          </li>
                          <li>
                            <label>Total meses:</label>
                            <br />
                            <input
                              type="number"
                              id="meses_global"
                              defaultValue="120"
                              disabled={true}
                            />
                          </li>
                          <li style={{display: "none"}}>
                            <label>Valor total anual</label>
                            <br />
                            <input
                              type="text"
                              name="currency-field"
                              id="valor_anual"
                              className="currency-field"
                              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                              defaultValue="$9,999.96"
                              data-type="currency"
                            />
                          </li>
                          <li>
                            <label>
                              Annual returns: 12% recommended
                            </label>
                            <br />
                            <input
                              type="number"
                              id="rentabilidad"
                              defaultValue="12"
                              placeholder="12"
                            />
                          </li>
                          <li>
                            <div className="calcular">
                              <button type="button" onClick={()=>updateChart()}>
                                Calculate
                              </button>
                            </div>
                          </li>
                          <li>
                            <label >Total Revenue Generated</label>
                            <br />
                            <input
                              type="text"
                              name="currency-field"
                              id="valor_global"
                              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                              defaultValue="$117,927.51"
                              data-type="currency"
                            />
                          </li>
                        </ul>
                        <input
                          type="hidden"
                          name="trp-form-language"
                          defaultValue="en"
                        />
                      </form>
                    </div>
                  </div>

                  <div className="row graficas-op" style={{display: "flex"}}>
                    <div className="col-xl-7 col-12">
                      <h3 className="tittle-graph">Profitability Time Line</h3>
                      <div className="box-chart-bar">
                        <div className="chartjs-size-monitor">
                          <div className="chartjs-size-monitor-expand">
                            <div className=""></div>
                          </div>
                          <div className="chartjs-size-monitor-shrink">
                            <div className=""></div>
                          </div>
                        </div>
                        <canvas
                          id="myChartBar"
                          height="301"
                          className="chartjs-render-monitor"
                          style={{display: "block", width: "603px", height: "301px"}}
                          width="603"
                        ></canvas>
                      </div>
                    </div>
                    <div className="col-xl-5 col-12">
                      <h3 className="tittle-graph">Total Revenue Generated</h3>
                      <div className="box-chart-pie">
                        <div className="chartjs-size-monitor">
                          <div className="chartjs-size-monitor-expand">
                            <div className=""></div>
                          </div>
                          <div className="chartjs-size-monitor-shrink">
                            <div className=""></div>
                          </div>
                        </div>
                        <canvas
                          id="myChartPie"
                          height="206"
                          className="chartjs-render-monitor"
                          style={{display: "block", width: "413px", height: "206px"}}
                          width="413"
                        ></canvas>
                      </div>
                    </div>
                  </div>

                  <div className="contenedor-botones-inversion">
                    <div className="row d-flex align-items-center">
                      <div className="col-xl-6 col-6 d-flex justify-content-end">
                        <a
                          className="estilo-1"
                          href="https://www.treeconomy.com.co/en/product/melina/"
                          target="_blank"
                        >
                          Start montlhy investment{' '}
                        </a>
                      </div>
                      <div className="col-xl-6 col-6">
                        <button
                          type="button"
                          className="estilo-2"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                        >
                          Check investment plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-onetime"
                  role="tabpanel"
                  aria-labelledby="nav-onetime-tab"
                >
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="info-inicial info-2">
                        <p className="paso-1">Step 2: Choose your Dream</p>
                      </div>
                      <ul className="calc-items nav">
                        <li id="home-item">
                          <div className="img-prev-item">
                            <img
                              alt=""
                              data-src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/home.svg"
                              className=" ls-is-cached lazyloaded"
                              src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/home.svg"
                              loading="lazy"
                            />
                          </div>
                          <a
                            data-toggle="tab"
                            href="#nav-home-2"
                            role="tab"
                            className=""
                            aria-selected="false"
                          >
                            Dream Home
                          </a>
                        </li>
                        <li id="university-item">
                          <div className="img-prev-item">
                            <img
                              alt=""
                              data-src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/university.svg"
                              className=" ls-is-cached lazyloaded"
                              src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/university.svg"
                              loading="lazy"
                            />
                          </div>
                          <a
                            data-toggle="tab"
                            href="#nav-profile-2"
                            role="tab"
                            className=""
                            aria-selected="false"
                          >
                            Children's University
                          </a>
                        </li>
                        <li id="car-item">
                          <div className="img-prev-item">
                            <img
                              alt=""
                              data-src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/internet-of-things.svg"
                              className=" ls-is-cached lazyloaded"
                              src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/img/internet-of-things.svg"
                              loading="lazy"
                            />
                          </div>
                          <a
                            data-toggle="tab"
                            href="#nav-car-2"
                            role="tab"
                            className="active show"
                            aria-selected="true"
                          >
                            Wealth Planning
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade"
                      id="nav-home-2"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      Step 3: Let’s work together to make your dream home a
                      reality! Pick a monthly amount that you can invest, click
                      calculate and your total investment plus profits will
                      appear. Easy and reliable!
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile-2"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      Step 3: You can proactively plan for your children’s
                      education! Pick a monthly investment and secure the future
                      of your loved ones. Easy and fulfilling!
                    </div>
                    <div
                      className="tab-pane fade active show"
                      id="nav-car-2"
                      role="tabpanel"
                      aria-labelledby="nav-car-tab"
                    >
                      Step 3: Investing in reforestation not only gives you the
                      advantage of innovative investing, but it will propel you to
                      become a contributor to helping our planet while becoming
                      financially successful!
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-other"
                      role="tabpanel"
                      aria-labelledby="nav-other-tab"
                    ></div>
                  </div>

                  <div className="row">
                    <div className="col-xl-12">
                      <form action="" data-trp-original-action="">
                        <ul className="formulario-chart">
                          <li>
                            <label>Valor a invertir</label>
                            <br />
                            <input
                              type="text"
                              name="currency-field"
                              id="valor_mensual_one"
                              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                              defaultValue="$833.33"
                              data-type="currency"
                            />
                          </li>
                          <li className="hide-this">
                            <label>Total months:</label>
                            <br />
                            <input
                              type="number"
                              id="meses_global"
                              defaultValue="120"
                              disabled={true}
                            />
                          </li>
                          <li className="hide-this">
                            <label>Valor total anual</label>
                            <br />
                            <input
                              type="text"
                              name="currency-field"
                              id="valor_anual"
                              className="currency-field"
                              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                              defaultValue="$9,999.96"
                              data-type="currency"
                            />
                          </li>
                          <li>
                            <label>
                              Annual returns: 12% recommended
                            </label>
                            <br />
                            <input
                              type="number"
                              id="rentabilidad_one"
                              defaultValue="12"
                              placeholder="12"
                            />
                          </li>
                          <li>
                            <div className="calcular">
                              <button type="button" onClick={()=>updateChartOne()}>
                                Calculate
                              </button>
                            </div>
                          </li>
                          <li>
                            <label>Total Revenue Generated</label>
                            <br />
                            <input
                              type="text"
                              name="currency-field"
                              id="valor_global_one"
                              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                              defaultValue="$2,588.19"
                              data-type="currency"
                            />
                          </li>
                        </ul>
                        <input
                          type="hidden"
                          name="trp-form-language"
                          defaultValue="en"
                        />
                      </form>
                    </div>
                  </div>

                  <div className="row graficas-op" style={{display: "flex"}}>
                    <div className="col-xl-7 col-12">
                      <h3 className="tittle-graph">Profitability Time Line</h3>
                      <div className="box-chart-bar">
                        <div className="chartjs-size-monitor">
                          <div className="chartjs-size-monitor-expand">
                            <div className=""></div>
                          </div>
                          <div className="chartjs-size-monitor-shrink">
                            <div className=""></div>
                          </div>
                        </div>
                        <canvas
                          id="myChartBarOne"
                          height="301"
                          className="chartjs-render-monitor"
                          style={{display: "block", width: "603px", height: "301px"}}
                          width="603"
                        ></canvas>
                      </div>
                    </div>
                    <div className="col-xl-5 col-12">
                      <h3 className="tittle-graph">Total Revenue Generated</h3>
                      <div className="box-chart-pie">
                        <div className="chartjs-size-monitor">
                          <div className="chartjs-size-monitor-expand">
                            <div className=""></div>
                          </div>
                          <div className="chartjs-size-monitor-shrink">
                            <div className=""></div>
                          </div>
                        </div>
                        <canvas
                          id="myChartPieOne"
                          height="206"
                          className="chartjs-render-monitor"
                          style={{display: "block", width: "413px", height: "206px"}}
                          width="413"
                        ></canvas>
                      </div>
                    </div>
                  </div>

                  <div className="contenedor-botones-inversion">
                    <div className="row d-flex align-items-center">
                      <div className="col-xl-6 col-6 d-flex justify-content-end">
                        <a
                          className="estilo-1"
                          href="https://app.treeconomy.com.co/projects/"
                          target="_blank"
                        >
                          Start one time investment
                        </a>
                      </div>
                      <div className="col-xl-6 col-6">
                        <button
                          type="button"
                          className="estilo-2"
                          data-toggle="modal"
                          data-target="#exampleModalCenterOne"
                        >
                          Check investment plan
                        </button>
                      </div>
                    </div>
                  </div>
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