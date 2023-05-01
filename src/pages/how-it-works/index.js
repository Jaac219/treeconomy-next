import Head from 'next/head'
import { useState } from 'react'

import en from '../../lang/en'
import es from '../../lang/es'

export default function HowItWorks() {
  const [tab, setTab] = useState("description")

  const handleClick = (e, tabName) => {
    e.preventDefault()
    setTab(tabName)
  }

  const RoadMap = () => {
    return (
      <div
        className="tab-pane fade active show"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <section className="project-plan">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 section-init">
                <h2>Hoja de ruta</h2>
                <p>
                  Hemos construido un plan integral de diez años para garantizar
                  un desarrollo eficaz y eficiente del proyecto? el trimestre de
                  inicio se establecerá tres meses antes de la temporada de
                  lluvias
                </p>
                <p className="text-green">Comienzo</p>
              </div>
            </div>

            <div className="row">
              <div className="timeline">
                <h2 className="timeline__item timeline__item--year">
                  <span>1</span>
                  AÑO
                </h2>

                <div className="timeline__item">
                  <div className="container-year">
                    <h3>Año 1 (T1)</h3>
                  </div>
                  <h3 className="timeline__title">Consolidación</h3>
                  <ul>
                    <li>Consolidación de las inversiones</li>
                    <li>Estudio inicial de suelos</li>
                    <li>Firma de contratos de arrendamiento</li>
                    <li>Construcción de invernaderos</li>
                  </ul>
                </div>

                <div className="timeline__item">
                  <div className="container-year">
                    <h3>Año 1 (T2)</h3>
                  </div>
                  <h3 className="timeline__title">Preparación del terreno</h3>
                  <ul>
                    <li>
                      Construcción de cercas, limpieza del terreno, estudio
                      detallado de suelos y fertilización del terreno
                    </li>
                  </ul>
                </div>

                <div className="timeline__item">
                  <div className="container-year">
                    <h3>Año 1 (T3)</h3>
                  </div>
                  <h3 className="timeline__title">Re-siembra</h3>
                  <ul>
                    <li>Siembra de 1100 árboles por hectárea</li>
                    <li>Control de plagas</li>
                  </ul>
                </div>

                <div className="timeline__item">
                  <div className="container-year">
                    <h3>Año 1 (T4)</h3>
                  </div>
                  <h3 className="timeline__title">Re-siembra</h3>
                  <ul>
                    <li>Control de calidad de las plántulas sembradas</li>
                    <li>Resiembra de plántulas defectuosas</li>
                  </ul>
                </div>

                <h2 className="timeline__item timeline__item--year">
                  <span>2</span>
                  AÑOS
                </h2>

                <div className="timeline__item">
                  <div className="container-year">
                    <h3>Año 2</h3>
                  </div>
                  <h3 className="timeline__title">Primer mantenimiento</h3>
                  <ul>
                    <li>
                      Control de plagas, fertilización del terreno, poda de
                      ramas de los árboles
                    </li>
                  </ul>
                </div>

                <h2 className="timeline__item timeline__item--year">
                  <span>3</span>
                  AÑOS
                </h2>

                <div className="timeline__item">
                  <div className="container-year">
                    <h3>Año 3</h3>
                  </div>
                  <h3 className="timeline__title">
                    Segundo mantenimiento y primera entresaca
                  </h3>
                  <ul>
                    <li>
                      Control de plagas, fertilización del terreno, poda de
                      ramas de los árboles
                    </li>
                    <li>Corte selectivo para reducir la densidad de árboles</li>
                  </ul>
                </div>

                <h2 className="timeline__item timeline__item--year">
                  <span>4</span>
                  AÑOS
                </h2>

                <div className="timeline__item">
                  <div className="container-year">
                    <h3>Año 4</h3>
                  </div>
                  <h3 className="timeline__title">Tercer mantenimiento</h3>
                  <ul>
                    <li>Control de plagas</li>
                    <li>Fertilización</li>
                    <li>Poda de ramas</li>
                  </ul>
                </div>

                <h2 className="timeline__item timeline__item--year">
                  <span>5</span>
                  AÑOS
                </h2>

                <div className="timeline__item">
                  <div className="container-year">
                    <h3>Año 5 - 6</h3>
                  </div>
                  <h3 className="timeline__title">
                    Mantenimiento y venta de certificados de carbono
                  </h3>
                  <ul>
                    <li>Control de plagas, fertilización y poda de ramas</li>
                    <li>
                      Comercialización del primer lote de certificados de
                      carbono
                    </li>
                  </ul>
                </div>

                <h2 className="timeline__item timeline__item--year">
                  <span>6</span>
                  AÑOS
                </h2>

                <div className="timeline__item">
                  <div className="container-year">
                    <h3>Año 7</h3>
                  </div>
                  <h3 className="timeline__title">Segunda entresaca</h3>
                  <ul>
                    <li>Corte selectivo para reducir la densidad de árboles</li>
                    <li>Comercialización de la madera generada</li>
                  </ul>
                </div>

                <h2 className="timeline__item timeline__item--year">
                  <span>7</span>
                  AÑOS
                </h2>

                <div className="timeline__item">
                  <div className="container-year">
                    <h3>Año 8 - 9</h3>
                  </div>
                  <h3 className="timeline__title">
                    Inicio de negociaciones para comercializar la madera
                  </h3>
                  <ul>
                    <li>
                      Preparación de negociaciones con aliados a precios de
                      mercado
                    </li>
                    <li>Busqueda de compradores potenciales adicionales</li>
                  </ul>
                </div>

                <h2 className="timeline__item timeline__item--year">
                  <span>8</span>
                  AÑOS
                </h2>

                <div className="timeline__item">
                  <div className="container-year">
                    <h3>Año 10</h3>
                  </div>
                  <h3 className="timeline__title">Cierre de negociaciones</h3>
                  <ul>
                    <li>Venta del segundo lote de certificados de carbono</li>
                    <li>
                      Cerrar negociaciones con aserraderos socios si se trata de
                      los mejores precios.
                    </li>
                  </ul>
                </div>

                <h2 className="timeline__item timeline__item--year">
                  <span>9</span>
                  AÑOS
                </h2>
                <h2 className="timeline__item timeline__item--year">
                  <span>10</span>
                  AÑOS
                </h2>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-xl-12 section-init">
                  <p className="text-end">Fin del proyecto</p>
                  <div className="end__timeline__item">
                    <h3 className="end__timeline__title">
                      Transferencia del 100% de las utilidades a los
                      inversionistas
                    </h3>
                    <ul>
                      <li>
                        Reporte completo de utilidades generadas en el proyecto
                        y transferencia a los inversionistas
                      </li>
                      <li>Comienzo del proyecto nuevamente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  const Description = () => {
    return (
      <div
        className="tab-pane fade active show"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <section className="infografia">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="info-responsive-d">
                  <img
                    data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Plataforma-online-para-intercambio-de-tokens-entre-usuarios-2esp.jpg"
                    className=" ls-is-cached lazyloaded"
                    src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Plataforma-online-para-intercambio-de-tokens-entre-usuarios-2esp.jpg"
                    loading="lazy"
                  />
                </div>
                <div className="info-responsive-m">
                  <div className="slide-info-m">
                    <div>
                      <img
                        alt="Paso principal"
                        data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/fondee.jpg"
                        className=" lazyloading"
                        src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/fondee.jpg"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <img
                        alt="paso 1"
                        data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/1e.jpg"
                        className=" lazyloading"
                        src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/1e.jpg"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <img
                        alt="paso 2"
                        data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/2e.jpg"
                        className=" lazyloading"
                        src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/2e.jpg"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <img
                        alt="paso 3"
                        data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/3e.jpg"
                        className=" lazyloading"
                        src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/3e.jpg"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <img
                        alt="paso 4"
                        data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/4e.jpg"
                        className=" lazyloading"
                        src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/4e.jpg"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <img
                        alt="paso-5	"
                        data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/5es.jpg"
                        className=" lazyloading"
                        src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/5es.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <p className="texto-infografia">
                  Descarga nuestro PDF con el análisis detallado de inversión
                </p>

                <a
                  className="boton-infografia"
                  target="_blank"
                  href="https://treeconomy.com.co/wp-content/uploads/2020/06/20200531-Treeconomy-Anal%C3%ADsis-de-inversi%C3%B3n.pdf"
                >
                  Descargar PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="world">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h2>Dos tipos de inversión </h2>
              </div>
            </div>
            <div className="row d-flex align-items-center">
              <div className="col-xl-6 p-0">
                <div className="inversion unica">
                  <h3>Inversión mensual recurrente: (Recomendado) </h3>
                  <p>
                    Bajo el modelo de inversión recurrente o suscripción
                    mensual, decides un monto a invertir en árboles o la
                    cantidad de unidades mensuales a adquirir y este será
                    cargado a tú tarjeta de crédito mes a mes de forma
                    automática.
                  </p>
                  <a href="https://app.treeconomy.com.co/projects/">
                    Empezar Ahora!
                  </a>
                </div>
              </div>
              <div className="col-xl-6 p-0">
                <div className="inversion mensual">
                  <h3>Inversión única: </h3>
                  <p>
                    Con la inversión de pago único se realiza una sola
                    transacción, requiriendo volver a realizar el proceso de
                    compra manualmente para adquirir árboles adicionales.
                  </p>
                  <a href="https://app.treeconomy.com.co/projects/">
                    Invertir ahora!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="explicacion explicacion-uno">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-xl-6">
                <h3>El comercio de árboles accesible: </h3>
                <h2>“La idea fantástica detrás de Treeconomy”</h2>
                <p></p>
                <p>
                  Con Treeconomy, por primera vez en la historia,{' '}
                  <strong>
                    ¡puedes invertir en árboles sin tener que esperar hasta su
                    madurez para recibir tus utilidades!
                  </strong>{' '}
                  Simplemente ve a la plataforma, elije los árboles que deseas
                  vender y ofrécelos a otros usuarios – de esta forma, podrás
                  recibir tus utilidades más rápido
                </p>
              </div>
              <div className="col-xl-6">
                <img
                  alt="Detras-de-treeconomy"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/06/Group-2171.png"
                  className=" lazyloaded"
                  src="https://treeconomy.com.co/wp-content/uploads/2020/06/Group-2171.png"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="explicacion explicacion-dos">
          <div className="container">
            <div className="recuadro-explicacion">
              <div className="row d-flex align-items-center">
                <div className="col-xl-6">
                  <img
                    alt="Sostenibilidad-treeconomía"
                    data-src="https://treeconomy.com.co/wp-content/uploads/2020/10/Grupo-2184-pc.png"
                    className=" lazyloaded"
                    src="https://treeconomy.com.co/wp-content/uploads/2020/10/Grupo-2184-pc.png"
                    loading="lazy"
                  />
                </div>
                <div className="col-xl-6">
                  <h2>Sigue tú inversión e impacto: </h2>
                  <p></p>
                  <p>
                    Nuestra plataforma está diseñada para ofrecer
                    actualizaciones continuas sobre el estado de tus inversiones
                    y el impacto positivo generado; desde información gráfica
                    sobre las utilidades generada y el carbono capturado hasta
                    la ubicación e imagenes de tus árboles. Todo en una sola
                    plataforma, fácil de usar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cards-sostenible facilities">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h2></h2>
              </div>
            </div>
            <div className="row d-flex align-items-center slide-sostenible">
              <div className="col-xl-4">
                <div className="card-contact">
                  <h2>Sostenible: </h2>
                  <p>
                    ¿Sabía que una hectárea de árboles absorbe 40 tonelada de
                    CO2 al año, el equivalente a 8 automóviles de una ciudad
                    normal llena de gente? Entonces, cada árbol que está
                    plantando está ayudando a combatir el cambio climático.{' '}
                  </p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card-contact down">
                  <h2>Responsable </h2>
                  <p>
                    Al invertir en árboles en treeconomy estás contribuyendo a
                    la proliferación de bosques reforestados en la región,
                    reduciendo la presión sobre bosques naturales y su
                    consecuente conservación. Recuerda, cada árbol cuenta
                  </p>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card-contact">
                  <h2>Social</h2>
                  <p>
                    El impacto social es enorme, ya que el proceso de
                    mantenimiento de sus árboles dará empleo a cientos de
                    personas en áreas rurales donde hoy en día la única opción
                    es trabajar por menos del salario mínimo colombiano 6.5
                    dólares por día.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <p className="texto-aux">
                  Cada acción que haces deja una huella ... con tus inversiones
                  estás impactando de forma positiva al medio ambiente.
                  ¡Siéntete orgulloso!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="por-colombia por-desktop">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h2>¿Por qué Colombia?</h2>
                <p>
                  Colombia cuenta con algunas de las mejores condiciones para
                  plantar árboles en el planeta:
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <ul className="razones razones-desktop">
                  <li className="por-desktop-normal">
                    <div className="centrado-try">
                      <h3>Medio Ambiente:</h3>
                      <p>
                        {' '}
                        Calidad del suelo, precipitaciones, altitud, flujos de
                        agua y humedad óptimas para el desarrollo de proyectos
                        forestales – habilita un crecimiento acelerado de las
                        plantaciones
                      </p>
                    </div>
                  </li>

                  <li className="por-desktop-normal">
                    <div className="centrado-try">
                      <h3>Demanda de madera</h3>
                      <p>
                        Precio de la madera y subproductos al alza – se espera
                        que su demanda se duplique para el año 2030 en Colombia
                        como resultado de mayor actividad de los mercados
                        domésticos y de exportación (UPRA, 2019)
                      </p>
                    </div>
                  </li>

                  <li className="por-desktop-normal">
                    <div className="centrado-try">
                      <h3>Políticas públicas</h3>
                      <p>
                        Plan nacional para impulsar a 2030 el aumento de la
                        productividad y la competitividad económica en un marco
                        de sostenibilidad ambiental – 7 de los 8 temas tratados
                        en este acuerdo están relacionados con la industria
                        forestal
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <ul className="razones">
                  <li className="por-desktop-normal">
                    <div className="centrado-try">
                      <h3>Subsidios e impuestos</h3>
                      <p>
                        Subsidio (CIF) de entre el 40 y 50% sobre los costos de
                        siembra y mantenimiento de los primeros 4 años de las
                        plantaciones. Excepción del impuesto sobre la renta en
                        el desarrollo de proyectos forestales en zonas
                        vulnerables
                      </p>
                    </div>
                  </li>

                  <li className="por-desktop-normal">
                    <div className="centrado-try">
                      <h3>Ubicación</h3>
                      <p>
                        Ubicación geográfica estratégica para el comercio - el
                        acceso al Océano Pacifico y al Mar Caribe facilita la
                        integración con los mercados internacionales de
                        exportación{' '}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="por-colombia por-mobile">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h2>¿Por qué Colombia?</h2>
                <p>
                  Colombia cuenta con algunas de las mejores condiciones para
                  plantar árboles en el planeta:
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <ul className="razones razones-mobile">
                  <li className="por-mobile-normal">
                    <div className="centrado-try">
                      <h3>Medio Ambiente:</h3>
                      <p>
                        {' '}
                        Calidad del suelo, precipitaciones, altitud, flujos de
                        agua y humedad óptimas para el desarrollo de proyectos
                        forestales – habilita un crecimiento acelerado de las
                        plantaciones
                      </p>
                    </div>
                  </li>
                  <li className="por-mobile-normal">
                    <div className="centrado-try">
                      <h3>Demanda de madera</h3>
                      <p>
                        Precio de la madera y subproductos al alza – se espera
                        que su demanda se duplique para el año 2030 en Colombia
                        como resultado de mayor actividad de los mercados
                        domésticos y de exportación (UPRA, 2019)
                      </p>
                    </div>
                  </li>
                  <li className="por-mobile-normal">
                    <div className="centrado-try">
                      <h3>Políticas públicas</h3>
                      <p>
                        Plan nacional para impulsar a 2030 el aumento de la
                        productividad y la competitividad económica en un marco
                        de sostenibilidad ambiental – 7 de los 8 temas tratados
                        en este acuerdo están relacionados con la industria
                        forestal
                      </p>
                    </div>
                  </li>
                  <li className="por-mobile-normal">
                    <div className="centrado-try">
                      <h3>Subsidios e impuestos</h3>
                      <p>
                        Subsidio (CIF) de entre el 40 y 50% sobre los costos de
                        siembra y mantenimiento de los primeros 4 años de las
                        plantaciones. Excepción del impuesto sobre la renta en
                        el desarrollo de proyectos forestales en zonas
                        vulnerables
                      </p>
                    </div>
                  </li>
                  <li className="por-mobile-normal">
                    <div className="centrado-try">
                      <h3>Ubicación</h3>
                      <p>
                        Ubicación geográfica estratégica para el comercio - el
                        acceso al Océano Pacifico y al Mar Caribe facilita la
                        integración con los mercados internacionales de
                        exportación{' '}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="calculos-anuales">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-xl-6">
                <img
                  alt=""
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/658.png"
                  className=" ls-is-cached lazyloaded"
                  src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/658.png"
                  loading="lazy"
                />
              </div>
              <div className="col-xl-6">
                <p>
                  Especie de rápido crecimiento que puede llegar a medir 30
                  metros de altura y 80 centímetros de diametro. Como pocas
                  especies, se caracteriza por su capacidad de desarrollarse sin
                  dificultad, tanto en regiones húmedas como secas. Además,
                  cuenta con una aportación óptima de materia orgánica (hojas y
                  ramas) al ecosistema, mejorando las condiciones del suelo y
                  ayudando a conservar y retener el agua en la zona
                </p>
                <ul>
                  <li>
                    Años de crecimiento:<span>9 - 11 </span>
                  </li>
                  <li>
                    Capacidad de captura de carbono:
                    <span>40 Toneladas por hectárea / Año</span>
                  </li>
                  <li>
                    Utilidad estimada:<span>290% 10 años (12)</span>
                  </li>
                  <li>
                    Costo:<span>7 a 8 USD por árbol</span>
                  </li>
                </ul>
                <a href="">Invertir ahora!</a>
              </div>
            </div>
          </div>
        </section>

        <section className="explicacion explicacion-uno">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h2 className="titulo-urg">
                  ¿Por qué Treeconomy? Transparencia
                </h2>
              </div>
            </div>
            <div className="row d-flex align-items-center">
              <div className="col-xl-6">
                <p className="texto-urg"></p>
                <p>
                  ¡Creemos en la transparencia! Y por ello la exigimos a nuestro
                  equipo y a nuestros inversionistas. De ahí la razón por la que
                  implementamos la tecnología Blockchain en nuestra plataforma.
                  Con Blockchain, aseguramos la seguridad de nuestra información
                  en todo momento, así como su disponibilidad para cualquier
                  proceso de auditoria. ¡Transparencia total!
                </p>
              </div>
              <div className="col-xl-6">
                <img
                  alt="Detras-de-treeconomy"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Group-2181.png"
                  className=" lazyloaded"
                  src="https://treeconomy.com.co/wp-content/uploads/2020/05/Group-2181.png"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>
          Treeconomy - Invierte en Arboles - Retornos mayores al 12%
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="video-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 p-0"></div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className={`nav-link ${tab == 'description' && 'active show'}`}
                  id="home-tab"
                  data-toggle="tab"
                  href="#"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  onClick={(e)=>handleClick(e, 'description')}
                >
                  Como Funciona
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${tab == 'roadMap' && 'active show'}`}
                  id="profile-tab"
                  data-toggle="tab"
                  href="#"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  onClick={(e)=>handleClick(e, 'roadMap')}
                >
                  Hoja de ruta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content" id="myTabContent">
        {tab == 'roadMap' ? <RoadMap /> : <Description/>}
      </div>
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