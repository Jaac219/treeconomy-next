import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Treeconomy - Invierte en Arboles - Retornos mayores al 12%</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
<main role="main" id="main-dia">
      

<section id="animacion-dias" className="banner cnt-1 night">
  <canvas id="space"></canvas>
  <div className="container-fluid arbustos">



    {/* ------------ */}
    <div className="contenedor-plant-now">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h2>Inversión en reforestación accesible para todos </h2>
          </div>
        </div>
        <div className="row d-flex align-items-baseline">
          <div className="col-xl-3">
            <div className="item-plant-now wow fadeInUp">
              <img alt="" data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2054.png"
                className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
              <p className="texto-descriptivo"></p>
              <p><strong>Planta un Árbol:</strong> Invierte en arboles de diferentes edades, iniciando desde tan
                solo un árbol</p>

            </div>
          </div>

          <div className="col-xl-3">
            <div className="item-plant-now">
              <img alt="" data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2055.png"
                className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
              <p className="texto-descriptivo"></p>
              <p><strong>Sigue tu inversión:</strong> Sigue el crecimiento de tus árboles y el carbono capturado en
                la plataforma de Treeconomy</p>

            </div>
          </div>

          <div className="col-xl-3">
            <div className="item-plant-now">
              <img alt="" data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2053.png"
                className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
              <p className="texto-descriptivo"></p>
              <p><strong>Intercambia tus árboles:</strong> Conecta con otros usuarios y recibe tus utilidades más
                rápido ​</p>

            </div>
          </div>

          <div className="col-xl-3">
            <div className="item-plant-now">
              <img alt="" data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/Group-2056.png"
                className="peque lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
              <p className="texto-descriptivo"></p>
              <p><strong>Recibe tus utilidades:</strong> Recibe utilidades por la venta de tus árboles y los <a
                  href="https://es.wikipedia.org/wiki/Bonos_de_carbono" rel="noopener" target="_blank">Bonos de
                  Carbono</a> .</p>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="contenedor-botton">
              <a href="https://app.treeconomy.com.co/projects/" className="button-general">Empieza a plantar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="blog-section">
    <div className="container">
      <div className="row d-flex align-items-end">
        <div className="col-xl-4">
          <div className="contenerdor-info">
            <img alt="planta tu árbol"
              data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/undraw_video_streaming_yyld.png"
              className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
            <p>Treeconomy te ofrece la oportunidad de comenzar a hacer que tus ahorros sean importantes. ¡Con una
              inversión mensual recurrente que comienza desde $ 25 dólares, podrás lograr la estabilidad financiera
              que siempre has soñado! Además, gracias a nuestra plataforma web podras tener la flexibilidad y
              transparencia necesaria para administrar tu inversión desde cualquier lugar, en cualquier momento.
              Fácil. Seguro.</p>
            <ul className="botones">
              <li><a href="https://app.treeconomy.com.co/projects/" className="button-general">Planes Recurrentes</a>
              </li>
              <li><a href="http://18.217.49.56/" className="especial"></a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="contenedor-contador">
            <ul>
              <li><img alt="árbol" data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Group-1972.png"
                  className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <p><span className="counter">55.000</span>  árboles plantados</p>
              </li>
              <li><img alt="co2" data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Group-1973.png"
                  className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <p><span className="counter2">3.650</span>tons de CO2 capturadas</p>
              </li>
              <li><img alt="gente" data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Group-1970.png"
                  className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <p><span className="counter3">63</span> usuarios han invertido</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="blog-info">
        <div className="row">
          <div className="col-xl-6">
            <a href="https://www.treeconomy.com.co/es/noticias/">
              <h2>Noticias</h2>
            </a>
            <p></p>
            <p>Nos enorgullecemos de comprender la situación crítica que representa el cambio climático y de cómo
              podemos hacer una diferencia investigando y compartiendo información correcta y oportuna a nuestros
              usuarios. A continuación, podrás encontrar información valiosa sobre el medio ambiente, la industria
              forestal, y políticas que están impactando nuestro planeta. Fácil. Confiable. Oportuno</p>

          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">


            <div className="slide-blog-home">
              <div className="blog-feed-preview"
                onClick={()=>location.href='https://www.treeconomy.com.co/es/las-3-oportunidades-de-inversion-sostenible-que-debes-conocer/'}
                >
                <p className="texto-preview"><a
                    href="https://www.treeconomy.com.co/es/las-3-oportunidades-de-inversion-sostenible-que-debes-conocer/">Las
                    3 oportunidades de inversi&oacute;n sostenible que debes conocer.</a><span>En la actualidad,
                    cada vez son m&aacute;s las personas que buscan invertir su dinero en proyectos que no solo les
                    generen ganancias, sino que tambi&eacute;n tengan un impacto positivo en el medio ambiente y la
                    sociedad.En este art&iacute;culo te presentamos tres oportunidades de inversi&oacute;n
                    sostenible, entre ellas, la inversi&oacute;n en reforestaci&oacute;n comercial con Treeconomy.
                    &nbsp;&hellip; <a className="view-article"
                      href="https://www.treeconomy.com.co/es/las-3-oportunidades-de-inversion-sostenible-que-debes-conocer/"
                      data-no-translation="" data-trp-gettext="">Ver art&iacute;culo</a></span></p>
                <img alt="" decoding="async" loading="lazy"
                  data-srcset="https://www.treeconomy.com.co/wp-content/uploads/2023/03/01.png 6912w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/01-250x125.png 250w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/01-700x350.png 700w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/01-768x384.png 768w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/01-1536x768.png 1536w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/01-2048x1024.png 2048w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/01-18x9.png 18w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/01-120x60.png 120w"
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2023/03/01.png"
                  data-sizes="(max-width: 6912px) 100vw, 6912px"
                  className="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <div className="fecha-blog">
                  <p>23 marzo</p>
                </div>
                <div className="share-but">
                  <div className="addtoany_shortcode">
                    <div className="a2a_kit a2a_kit_size_32 addtoany_list"
                      data-a2a-url="https://www.treeconomy.com.co/es/las-3-oportunidades-de-inversion-sostenible-que-debes-conocer/"
                      data-a2a-title="Las 3 oportunidades de inversi&oacute;n sostenible que debes conocer."><a
                        className="a2a_button_facebook"
                        href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Flas-3-oportunidades-de-inversion-sostenible-que-debes-conocer%2F&amp;linkname=Las%203%20oportunidades%20de%20inversi%C3%B3n%20sostenible%20que%20debes%20conocer."
                        title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter"
                        href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Flas-3-oportunidades-de-inversion-sostenible-que-debes-conocer%2F&amp;linkname=Las%203%20oportunidades%20de%20inversi%C3%B3n%20sostenible%20que%20debes%20conocer."
                        title="Gorjeo" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin"
                        href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Flas-3-oportunidades-de-inversion-sostenible-que-debes-conocer%2F&amp;linkname=Las%203%20oportunidades%20de%20inversi%C3%B3n%20sostenible%20que%20debes%20conocer."
                        title="LinkedIn" rel="nofollow noopener" target="_blank"></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-feed-preview"
                onClick={()=>location.href='https://www.treeconomy.com.co/es/la-inversion-en-proyectos-sostenibles-una-forma-de-tener-un-impacto-positivo-en-la-sociedad/'}
                >
                <p className="texto-preview"><a
                    href="https://www.treeconomy.com.co/es/la-inversion-en-proyectos-sostenibles-una-forma-de-tener-un-impacto-positivo-en-la-sociedad/">La
                    inversión en proyectos sostenibles, una forma de tener un impacto positivo en la
                    sociedad.</a><span>La inversión en proyectos sostenibles, como la reforestación comercial,
                    puede tener un impacto positivo en la sociedad y la comunidad local. Los proyectos sostenibles
                    no solo generan empleos y oportunidades económicas, sino que también pueden ayudar a mejorar la
                    calidad de vida de las personas y proteger el medio ambiente. Uno de los mayores beneficios… <a
                      className="view-article"
                      href="https://www.treeconomy.com.co/es/la-inversion-en-proyectos-sostenibles-una-forma-de-tener-un-impacto-positivo-en-la-sociedad/"
                      data-no-translation="" data-trp-gettext="">Ver art&iacute;culo</a></span></p>
                <img alt="" decoding="async" loading="lazy"
                  data-srcset="https://www.treeconomy.com.co/wp-content/uploads/2023/03/Diseno-sin-titulo.png 1366w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/Diseno-sin-titulo-250x141.png 250w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/Diseno-sin-titulo-700x394.png 700w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/Diseno-sin-titulo-768x432.png 768w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/Diseno-sin-titulo-18x10.png 18w, https://www.treeconomy.com.co/wp-content/uploads/2023/03/Diseno-sin-titulo-120x67.png 120w"
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2023/03/Diseno-sin-titulo.png"
                  data-sizes="(max-width: 1366px) 100vw, 1366px"
                  className="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <div className="fecha-blog">
                  <p>3 marzo</p>
                </div>
                <div className="share-but">
                  <div className="addtoany_shortcode">
                    <div className="a2a_kit a2a_kit_size_32 addtoany_list"
                      data-a2a-url="https://www.treeconomy.com.co/es/la-inversion-en-proyectos-sostenibles-una-forma-de-tener-un-impacto-positivo-en-la-sociedad/"
                      data-a2a-title="La inversi&oacute;n en proyectos sostenibles, una forma de tener un impacto positivo en la sociedad.">
                      <a className="a2a_button_facebook"
                        href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fla-inversion-en-proyectos-sostenibles-una-forma-de-tener-un-impacto-positivo-en-la-sociedad%2F&amp;linkname=La%20inversi%C3%B3n%20en%20proyectos%20sostenibles%2C%20una%20forma%20de%20tener%20un%20impacto%20positivo%20en%20la%20sociedad."
                        title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter"
                        href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fla-inversion-en-proyectos-sostenibles-una-forma-de-tener-un-impacto-positivo-en-la-sociedad%2F&amp;linkname=La%20inversi%C3%B3n%20en%20proyectos%20sostenibles%2C%20una%20forma%20de%20tener%20un%20impacto%20positivo%20en%20la%20sociedad."
                        title="Gorjeo" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin"
                        href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fla-inversion-en-proyectos-sostenibles-una-forma-de-tener-un-impacto-positivo-en-la-sociedad%2F&amp;linkname=La%20inversi%C3%B3n%20en%20proyectos%20sostenibles%2C%20una%20forma%20de%20tener%20un%20impacto%20positivo%20en%20la%20sociedad."
                        title="LinkedIn" rel="nofollow noopener" target="_blank"></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-feed-preview"
                onClick={()=>location.href='https://www.treeconomy.com.co/es/la-responsabilidad-social-corporativa-impulsando-la-adquisicion-de-bonos-de-carbono-por-parte-de-las-empresas/'}
                >
                <p className="texto-preview"><a
                    href="https://www.treeconomy.com.co/es/la-responsabilidad-social-corporativa-impulsando-la-adquisicion-de-bonos-de-carbono-por-parte-de-las-empresas/">“La
                    responsabilidad social corporativa impulsando la adquisición de bonos de carbono por parte de
                    las empresas”</a><span>Las empresas adquirieron bonos de carbono por varias razones,
                    incluyendo la responsabilidad social corporativa, la gestión del riesgo y la mejora de la
                    reputación de la empresa. Los bonos de carbono son una herramienta importante para ayudar a las
                    empresas a cumplir sus objetivos de sostenibilidad y reducción de emisiones de gases de efecto…
                    <a className="view-article"
                      href="https://www.treeconomy.com.co/es/la-responsabilidad-social-corporativa-impulsando-la-adquisicion-de-bonos-de-carbono-por-parte-de-las-empresas/"
                      data-no-translation="" data-trp-gettext="">Ver art&iacute;culo</a></span></p>
                <img alt="" decoding="async" loading="lazy"
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2023/02/Diseno-sin-titulo.png"
                  className="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <div className="fecha-blog">
                  <p>27 febrero</p>
                </div>
                <div className="share-but">
                  <div className="addtoany_shortcode">
                    <div className="a2a_kit a2a_kit_size_32 addtoany_list"
                      data-a2a-url="https://www.treeconomy.com.co/es/la-responsabilidad-social-corporativa-impulsando-la-adquisicion-de-bonos-de-carbono-por-parte-de-las-empresas/"
                      data-a2a-title="?La responsabilidad social corporativa impulsando la adquisici&oacute;n de bonos de carbono por parte de las empresas?">
                      <a className="a2a_button_facebook"
                        href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fla-responsabilidad-social-corporativa-impulsando-la-adquisicion-de-bonos-de-carbono-por-parte-de-las-empresas%2F&amp;linkname=%E2%80%9CLa%20responsabilidad%20social%20corporativa%20impulsando%20la%20adquisici%C3%B3n%20de%20bonos%20de%20carbono%20por%20parte%20de%20las%20empresas%E2%80%9D"
                        title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter"
                        href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fla-responsabilidad-social-corporativa-impulsando-la-adquisicion-de-bonos-de-carbono-por-parte-de-las-empresas%2F&amp;linkname=%E2%80%9CLa%20responsabilidad%20social%20corporativa%20impulsando%20la%20adquisici%C3%B3n%20de%20bonos%20de%20carbono%20por%20parte%20de%20las%20empresas%E2%80%9D"
                        title="Gorjeo" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin"
                        href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fla-responsabilidad-social-corporativa-impulsando-la-adquisicion-de-bonos-de-carbono-por-parte-de-las-empresas%2F&amp;linkname=%E2%80%9CLa%20responsabilidad%20social%20corporativa%20impulsando%20la%20adquisici%C3%B3n%20de%20bonos%20de%20carbono%20por%20parte%20de%20las%20empresas%E2%80%9D"
                        title="LinkedIn" rel="nofollow noopener" target="_blank"></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-feed-preview"
                onClick={()=>location.href='https://www.treeconomy.com.co/es/por-que-invertir-en-treeconomy-es-una-apuesta-segura-para-el-futuro/'}
                >
                <p className="texto-preview"><a
                    href="https://www.treeconomy.com.co/es/por-que-invertir-en-treeconomy-es-una-apuesta-segura-para-el-futuro/">“Por
                    qué invertir en Treeconomy es una apuesta segura para el futuro”</a><span>Somos una empresa
                    dedicada a la inversión en bosques y reforestación en Colombia. A través de su modelo de
                    negocio, en Treeconomy buscamos impulsar el desarrollo sostenible y la conservación de los
                    bosques en el país, al mismo tiempo que ofrecemos una alternativa de inversión rentable y
                    responsable, avanzando de la mano de la tecnología… <a className="view-article"
                      href="https://www.treeconomy.com.co/es/por-que-invertir-en-treeconomy-es-una-apuesta-segura-para-el-futuro/"
                      data-no-translation="" data-trp-gettext="">Ver art&iacute;culo</a></span></p>
                <img alt="" decoding="async" loading="lazy"
                  data-srcset="https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-2.png 1640w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-2-250x141.png 250w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-2-700x394.png 700w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-2-768x433.png 768w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-2-1536x865.png 1536w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-2-18x10.png 18w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-2-120x68.png 120w"
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-2.png"
                  data-sizes="(max-width: 1640px) 100vw, 1640px"
                  className="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <div className="fecha-blog">
                  <p>20 febrero</p>
                </div>
                <div className="share-but">
                  <div className="addtoany_shortcode">
                    <div className="a2a_kit a2a_kit_size_32 addtoany_list"
                      data-a2a-url="https://www.treeconomy.com.co/es/por-que-invertir-en-treeconomy-es-una-apuesta-segura-para-el-futuro/"
                      data-a2a-title="?Por qu&eacute; invertir en Treeconomy es una apuesta segura para el futuro?">
                      <a className="a2a_button_facebook"
                        href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fpor-que-invertir-en-treeconomy-es-una-apuesta-segura-para-el-futuro%2F&amp;linkname=%E2%80%9CPor%20qu%C3%A9%20invertir%20en%20Treeconomy%20es%20una%20apuesta%20segura%20para%20el%20futuro%E2%80%9D"
                        title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter"
                        href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fpor-que-invertir-en-treeconomy-es-una-apuesta-segura-para-el-futuro%2F&amp;linkname=%E2%80%9CPor%20qu%C3%A9%20invertir%20en%20Treeconomy%20es%20una%20apuesta%20segura%20para%20el%20futuro%E2%80%9D"
                        title="Gorjeo" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin"
                        href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fpor-que-invertir-en-treeconomy-es-una-apuesta-segura-para-el-futuro%2F&amp;linkname=%E2%80%9CPor%20qu%C3%A9%20invertir%20en%20Treeconomy%20es%20una%20apuesta%20segura%20para%20el%20futuro%E2%80%9D"
                        title="LinkedIn" rel="nofollow noopener" target="_blank"></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-feed-preview"
                onClick={()=>location.href='https://www.treeconomy.com.co/es/el-poder-del-interes-compuesto-como-invertir-hoy-para-construir-riqueza-a-largo-plazo/'}
                >
                <p className="texto-preview"><a
                    href="https://www.treeconomy.com.co/es/el-poder-del-interes-compuesto-como-invertir-hoy-para-construir-riqueza-a-largo-plazo/">“El
                    poder del interés compuesto: cómo invertir hoy para lograr riqueza a largo
                    plazo”</a><span>El interés compuesto es uno de los conceptos financieros más importantes que
                    cualquier persona que desee invertir su dinero debe entender. Es una herramienta poderosa para
                    riqueza a largo plazo y es construir esencial para lograr metas financieras a largo plazo, como
                    la jubilación o la compra de una casa. ¿Qué es el interés compuesto?… <a className="view-article"
                      href="https://www.treeconomy.com.co/es/el-poder-del-interes-compuesto-como-invertir-hoy-para-construir-riqueza-a-largo-plazo/"
                      data-no-translation="" data-trp-gettext="">Ver art&iacute;culo</a></span></p>
                <img alt="" decoding="async" loading="lazy"
                  data-srcset="https://www.treeconomy.com.co/wp-content/uploads/2023/02/vecteezy_male-investor-use-a-laptop-computer-compound-interest-rate_8140442_236-scaled.jpg 2560w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/vecteezy_male-investor-use-a-laptop-computer-compound-interest-rate_8140442_236-250x167.jpg 250w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/vecteezy_male-investor-use-a-laptop-computer-compound-interest-rate_8140442_236-700x467.jpg 700w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/vecteezy_male-investor-use-a-laptop-computer-compound-interest-rate_8140442_236-768x512.jpg 768w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/vecteezy_male-investor-use-a-laptop-computer-compound-interest-rate_8140442_236-1536x1024.jpg 1536w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/vecteezy_male-investor-use-a-laptop-computer-compound-interest-rate_8140442_236-2048x1365.jpg 2048w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/vecteezy_male-investor-use-a-laptop-computer-compound-interest-rate_8140442_236-18x12.jpg 18w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/vecteezy_male-investor-use-a-laptop-computer-compound-interest-rate_8140442_236-120x80.jpg 120w"
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2023/02/vecteezy_male-investor-use-a-laptop-computer-compound-interest-rate_8140442_236-scaled.jpg"
                  data-sizes="(max-width: 2560px) 100vw, 2560px"
                  className="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <div className="fecha-blog">
                  <p>13 febrero</p>
                </div>
                <div className="share-but">
                  <div className="addtoany_shortcode">
                    <div className="a2a_kit a2a_kit_size_32 addtoany_list"
                      data-a2a-url="https://www.treeconomy.com.co/es/el-poder-del-interes-compuesto-como-invertir-hoy-para-construir-riqueza-a-largo-plazo/"
                      data-a2a-title="?El poder del inter&eacute;s compuesto: c&oacute;mo invertir hoy para lograr riqueza a largo plazo?">
                      <a className="a2a_button_facebook"
                        href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fel-poder-del-interes-compuesto-como-invertir-hoy-para-construir-riqueza-a-largo-plazo%2F&amp;linkname=%E2%80%9CEl%20poder%20del%20inter%C3%A9s%20compuesto%3A%20c%C3%B3mo%20invertir%20hoy%20para%20lograr%20riqueza%20a%20largo%20plazo%E2%80%9D"
                        title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter"
                        href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fel-poder-del-interes-compuesto-como-invertir-hoy-para-construir-riqueza-a-largo-plazo%2F&amp;linkname=%E2%80%9CEl%20poder%20del%20inter%C3%A9s%20compuesto%3A%20c%C3%B3mo%20invertir%20hoy%20para%20lograr%20riqueza%20a%20largo%20plazo%E2%80%9D"
                        title="Gorjeo" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin"
                        href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fel-poder-del-interes-compuesto-como-invertir-hoy-para-construir-riqueza-a-largo-plazo%2F&amp;linkname=%E2%80%9CEl%20poder%20del%20inter%C3%A9s%20compuesto%3A%20c%C3%B3mo%20invertir%20hoy%20para%20lograr%20riqueza%20a%20largo%20plazo%E2%80%9D"
                        title="LinkedIn" rel="nofollow noopener" target="_blank"></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-feed-preview"
                onClick={()=>location.href='https://www.treeconomy.com.co/es/sustainable-wood-production-a-renewable-resource/'}
                >
                <p className="texto-preview"><a
                    href="https://www.treeconomy.com.co/es/sustainable-wood-production-a-renewable-resource/">Producción
                    sostenible de madera: Un recurso renovable.</a><span>La lucha por conservar los bosques en
                    Colombia siempre está activa y una de las maneras más latentes para continuar, es promover la
                    producción responsable de madera, el cual protege y Contribuye a los recursos naturales y el
                    desarrollo económico con sostenibilidad. ¿Qué es la madera sostenible? La madera sostenible es
                    uno de los… <a className="view-article"
                      href="https://www.treeconomy.com.co/es/sustainable-wood-production-a-renewable-resource/"
                      data-no-translation="" data-trp-gettext="">Ver art&iacute;culo</a></span></p>
                <img alt="" decoding="async" loading="lazy"
                  data-srcset="https://www.treeconomy.com.co/wp-content/uploads/2023/02/Imagen-articulo.png 1640w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/Imagen-articulo-250x141.png 250w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/Imagen-articulo-700x394.png 700w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/Imagen-articulo-768x433.png 768w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/Imagen-articulo-1536x865.png 1536w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/Imagen-articulo-18x10.png 18w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/Imagen-articulo-120x68.png 120w"
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2023/02/Imagen-articulo.png"
                  data-sizes="(max-width: 1640px) 100vw, 1640px"
                  className="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <div className="fecha-blog">
                  <p>6 febrero</p>
                </div>
                <div className="share-but">
                  <div className="addtoany_shortcode">
                    <div className="a2a_kit a2a_kit_size_32 addtoany_list"
                      data-a2a-url="https://www.treeconomy.com.co/es/sustainable-wood-production-a-renewable-resource/"
                      data-a2a-title="Producci&oacute;n sostenible de madera: Un recurso renovable."><a
                        className="a2a_button_facebook"
                        href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fsustainable-wood-production-a-renewable-resource%2F&amp;linkname=Producci%C3%B3n%20sostenible%20de%20madera%3A%20Un%20recurso%20renovable."
                        title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter"
                        href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fsustainable-wood-production-a-renewable-resource%2F&amp;linkname=Producci%C3%B3n%20sostenible%20de%20madera%3A%20Un%20recurso%20renovable."
                        title="Gorjeo" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin"
                        href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fsustainable-wood-production-a-renewable-resource%2F&amp;linkname=Producci%C3%B3n%20sostenible%20de%20madera%3A%20Un%20recurso%20renovable."
                        title="LinkedIn" rel="nofollow noopener" target="_blank"></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-feed-preview"
                onClick={()=>location.href='https://www.treeconomy.com.co/es/4-razones-para-invertir-en-arboles/'}
                >
                <p className="texto-preview"><a
                    href="https://www.treeconomy.com.co/es/4-razones-para-invertir-en-arboles/">4 Razones para
                    invertir en Arboles</a><span>El primer grupo de oportunidades provenientes de la siembra de
                    árboles deriva de las estrategias del convenio para el crecimiento verde en Colombia…</span></p>
                <img alt="" decoding="async" loading="lazy"
                  data-srcset="https://www.treeconomy.com.co/wp-content/uploads/2023/01/4-articulos.png 1640w, https://www.treeconomy.com.co/wp-content/uploads/2023/01/4-articulos-250x141.png 250w, https://www.treeconomy.com.co/wp-content/uploads/2023/01/4-articulos-700x394.png 700w, https://www.treeconomy.com.co/wp-content/uploads/2023/01/4-articulos-768x433.png 768w, https://www.treeconomy.com.co/wp-content/uploads/2023/01/4-articulos-1536x865.png 1536w, https://www.treeconomy.com.co/wp-content/uploads/2023/01/4-articulos-18x10.png 18w, https://www.treeconomy.com.co/wp-content/uploads/2023/01/4-articulos-120x68.png 120w"
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2023/01/4-articulos.png"
                  data-sizes="(max-width: 1640px) 100vw, 1640px"
                  className="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <div className="fecha-blog">
                  <p>15 enero</p>
                </div>
                <div className="share-but">
                  <div className="addtoany_shortcode">
                    <div className="a2a_kit a2a_kit_size_32 addtoany_list"
                      data-a2a-url="https://www.treeconomy.com.co/es/4-razones-para-invertir-en-arboles/"
                      data-a2a-title="4 Reasons to invest in Trees"><a className="a2a_button_facebook"
                        href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2F4-razones-para-invertir-en-arboles%2F&amp;linkname=4%20Reasons%20to%20invest%20in%20Trees"
                        title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter"
                        href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2F4-razones-para-invertir-en-arboles%2F&amp;linkname=4%20Reasons%20to%20invest%20in%20Trees"
                        title="Gorjeo" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin"
                        href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2F4-razones-para-invertir-en-arboles%2F&amp;linkname=4%20Reasons%20to%20invest%20in%20Trees"
                        title="LinkedIn" rel="nofollow noopener" target="_blank"></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-feed-preview"
                onClick={()=>location.href='https://www.treeconomy.com.co/es/treeconomy-in-the-spotlight-reforestation-investment/'}
                >
                <p className="texto-preview"><a
                    href="https://www.treeconomy.com.co/es/treeconomy-in-the-spotlight-reforestation-investment/">Treeconomy
                    en el punto de mira: inversión en reforestación</a><span>Durante los últimos ocho meses,
                    personas de todo el mundo han visto amenazado su libre albedrío durante una pandemia que obligó
                    a todos a permanecer dentro de sus hogares los próximos meses. Nosotros, en Treeconomy, hemos
                    notado los efectos que esto creó en la moral de las personas y su perspectiva sobre el… <a
                      className="view-article"
                      href="https://www.treeconomy.com.co/es/treeconomy-in-the-spotlight-reforestation-investment/"
                      data-no-translation="" data-trp-gettext="">Ver art&iacute;culo</a></span></p>
                <img alt="" decoding="async" loading="lazy"
                  data-srcset="https://www.treeconomy.com.co/wp-content/uploads/2022/11/CkiFMeyg.jpeg 1620w, https://www.treeconomy.com.co/wp-content/uploads/2022/11/CkiFMeyg-250x167.jpeg 250w, https://www.treeconomy.com.co/wp-content/uploads/2022/11/CkiFMeyg-700x467.jpeg 700w, https://www.treeconomy.com.co/wp-content/uploads/2022/11/CkiFMeyg-768x512.jpeg 768w, https://www.treeconomy.com.co/wp-content/uploads/2022/11/CkiFMeyg-1536x1024.jpeg 1536w, https://www.treeconomy.com.co/wp-content/uploads/2022/11/CkiFMeyg-18x12.jpeg 18w, https://www.treeconomy.com.co/wp-content/uploads/2022/11/CkiFMeyg-120x80.jpeg 120w"
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2022/11/CkiFMeyg.jpeg"
                  data-sizes="(max-width: 1620px) 100vw, 1620px"
                  className="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <div className="fecha-blog">
                  <p>28 diciembre</p>
                </div>
                <div className="share-but">
                  <div className="addtoany_shortcode">
                    <div className="a2a_kit a2a_kit_size_32 addtoany_list"
                      data-a2a-url="https://www.treeconomy.com.co/es/treeconomy-in-the-spotlight-reforestation-investment/"
                      data-a2a-title="Treeconomy in the Spotlight ? Reforestation investment"><a
                        className="a2a_button_facebook"
                        href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Ftreeconomy-in-the-spotlight-reforestation-investment%2F&amp;linkname=Treeconomy%20in%20the%20Spotlight%20%E2%80%93%20Reforestation%20investment"
                        title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter"
                        href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Ftreeconomy-in-the-spotlight-reforestation-investment%2F&amp;linkname=Treeconomy%20in%20the%20Spotlight%20%E2%80%93%20Reforestation%20investment"
                        title="Gorjeo" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin"
                        href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Ftreeconomy-in-the-spotlight-reforestation-investment%2F&amp;linkname=Treeconomy%20in%20the%20Spotlight%20%E2%80%93%20Reforestation%20investment"
                        title="LinkedIn" rel="nofollow noopener" target="_blank"></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-feed-preview"
                onClick={()=>location.href='https://www.treeconomy.com.co/es/forest-plantation-and-the-quest-to-achieve-environmental-sustainability/'}>
                <p className="texto-preview"><a
                    href="https://www.treeconomy.com.co/es/forest-plantation-and-the-quest-to-achieve-environmental-sustainability/">Plantaciónes
                    forestales y la búsqueda para lograr la sostenibilidad ambiental.</a><span>En los últimos
                    años se ha intensificado la discusión sobre la sustentabilidad ambiental de las plantaciones
                    comerciales…</span></p>
                <img alt="" decoding="async" loading="lazy"
                  data-srcset="https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-1.png 1640w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-1-250x141.png 250w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-1-700x394.png 700w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-1-768x433.png 768w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-1-1536x865.png 1536w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-1-18x10.png 18w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-1-120x68.png 120w"
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2023/02/1-1.png"
                  data-sizes="(max-width: 1640px) 100vw, 1640px"
                  className="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <div className="fecha-blog">
                  <p>11 noviembre</p>
                </div>
                <div className="share-but">
                  <div className="addtoany_shortcode">
                    <div className="a2a_kit a2a_kit_size_32 addtoany_list"
                      data-a2a-url="https://www.treeconomy.com.co/es/forest-plantation-and-the-quest-to-achieve-environmental-sustainability/"
                      data-a2a-title="Forest Plantation and The Quest to Achieve Environmental Sustainability."><a
                        className="a2a_button_facebook"
                        href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fforest-plantation-and-the-quest-to-achieve-environmental-sustainability%2F&amp;linkname=Forest%20Plantation%20and%20The%20Quest%20to%20Achieve%20Environmental%20Sustainability."
                        title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter"
                        href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fforest-plantation-and-the-quest-to-achieve-environmental-sustainability%2F&amp;linkname=Forest%20Plantation%20and%20The%20Quest%20to%20Achieve%20Environmental%20Sustainability."
                        title="Gorjeo" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin"
                        href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fforest-plantation-and-the-quest-to-achieve-environmental-sustainability%2F&amp;linkname=Forest%20Plantation%20and%20The%20Quest%20to%20Achieve%20Environmental%20Sustainability."
                        title="LinkedIn" rel="nofollow noopener" target="_blank"></a></div>
                  </div>
                </div>
              </div>
              <div className="blog-feed-preview"
                onClick={()=>location.href='https://www.treeconomy.com.co/es/commercial-tree-plantations-to-tackle-climate-change/'}
                >
                <p className="texto-preview"><a
                    href="https://www.treeconomy.com.co/es/commercial-tree-plantations-to-tackle-climate-change/">Plantaciones
                    comerciales para combatir el Cambio Climático</a><span>Parece haber un gran consenso a la
                    hora de medir la relación entre las plantaciones comerciales y el calentamiento global…</span>
                </p>
                <img alt="" decoding="async" loading="lazy"
                  data-srcset="https://www.treeconomy.com.co/wp-content/uploads/2023/02/2-1.png 1640w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/2-1-250x141.png 250w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/2-1-700x394.png 700w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/2-1-768x433.png 768w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/2-1-1536x865.png 1536w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/2-1-18x10.png 18w, https://www.treeconomy.com.co/wp-content/uploads/2023/02/2-1-120x68.png 120w"
                  data-src="https://www.treeconomy.com.co/wp-content/uploads/2023/02/2-1.png"
                  data-sizes="(max-width: 1640px) 100vw, 1640px"
                  className="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                <div className="fecha-blog">
                  <p>10 octubre</p>
                </div>
                <div className="share-but">
                  <div className="addtoany_shortcode">
                    <div className="a2a_kit a2a_kit_size_32 addtoany_list"
                      data-a2a-url="https://www.treeconomy.com.co/es/commercial-tree-plantations-to-tackle-climate-change/"
                      data-a2a-title="Commercial tree plantations to tackle Climate Change"><a
                        className="a2a_button_facebook"
                        href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fcommercial-tree-plantations-to-tackle-climate-change%2F&amp;linkname=Commercial%20tree%20plantations%20to%20tackle%20Climate%20Change"
                        title="Facebook" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_twitter"
                        href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fcommercial-tree-plantations-to-tackle-climate-change%2F&amp;linkname=Commercial%20tree%20plantations%20to%20tackle%20Climate%20Change"
                        title="Gorjeo" rel="nofollow noopener" target="_blank"></a><a className="a2a_button_linkedin"
                        href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fwww.treeconomy.com.co%2Fes%2Fcommercial-tree-plantations-to-tackle-climate-change%2F&amp;linkname=Commercial%20tree%20plantations%20to%20tackle%20Climate%20Change"
                        title="LinkedIn" rel="nofollow noopener" target="_blank"></a></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="aliados">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-xl-12">
          <h2>Compañías que creen en Treeconomy</h2>
        </div>
        <div className="col-xl-12">
          <div className="slide-aliados">
            <div><img alt="" data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Treeconomy.png"
                className="img-urg lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></div>
            <div><img alt=""
                data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Treeconomy-Investing.png"
                className="img-urg lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></div>
            <div><img alt=""
                data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/iNNpulsa-Colombia-Treeconomy-scaled.jpg"
                className="img-urg lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></div>
            <div><img alt="" data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Treeconomy-Aliados.png"
                className="img-urg lazyload"
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </main>
      {/* <footer className="footer" role="contentinfo">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <h2>Mantente informado sobre opciones de inversión</h2>
          <ul className="form-footer">
            <li className="input-form"><input type="email" name="email-subscribe" id="email-subscribe"
                placeholder="Ingresa tu correo electrónico"/></li>
            <li className="button-form"><a href="#">&gt;</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <ul id="menu-footer" className="menu">
            <li id="menu-item-115"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item menu-item-115">
              <a href="https://www.treeconomy.com.co/es/" aria-current="page">Inició</a></li>
            <li id="menu-item-383" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-383"><a
                href="https://www.treeconomy.com.co/es/como-funciona/">Como Funciona</a></li>
            <li id="menu-item-669" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-669"><a
                href="https://www.treeconomy.com.co/es/calculadora-de-inversion/">Calculadora de inversion</a></li>
            <li id="menu-item-385" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-385"><a
                href="https://www.treeconomy.com.co/es/quienes-somos/">Equipo</a></li>
            <li id="menu-item-384" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-384"><a
                href="https://www.treeconomy.com.co/es/contactanos/">Contáctanos</a></li>
            <li id="menu-item-624" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-624"><a
                href="https://www.treeconomy.com.co/es/noticias/">Noticias</a></li>
            <li id="menu-item-850" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-850"><a
                href="https://www.treeconomy.com.co/es/faqs/">Preguntas frecuentes</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <ul className="redes-footer">
            <li>
              <a href="https://www.facebook.com/TheTREEconomy" target="_blank"><img alt="Facebook"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Facebook.png" className="lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></a>
            </li>
            <li>
              <a href="https://www.instagram.com/thetreeconomy/" target="_blank"><img alt="Instagram"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Instagram.png" className="lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></a>
            </li>
            <li>
              <a href="https://twitter.com/TheTreeconomy" target="_blank"><img alt="Gorjeo"
                  data-src="https://treeconomy.com.co/wp-content/uploads/2020/05/Twitter.png" className="lazyload"
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <p className="final">© 2021 TREEconomía. Reservados todos los derechos. <a href="#">Términos y condiciones</a>
          </p>
        </div>
      </div>
    </div>
  </footer>  */}
    </>
  )
}

// export async function getStaticProps(){
//   const res = await fetch('http://localhost:3000/api/header')
//   const header = await res.json()

//   return {
//     props: {
//       header
//     }
//   }
// }
