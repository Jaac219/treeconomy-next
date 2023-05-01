import Head from 'next/head'
import HMain from '../components/main/index.js'

/**esta data debe venir desde la api y se debe llamar 
desde el gesStaticProps */

import en from '../lang/en.json'
import es from '../lang/es.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>Treeconomy - Invierte en Arboles - Retornos mayores al 12%</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        {/* para el manejo del efecto fondo de noche, lo dejo temporalmente hay que migrarlo de jquery
        a react component */}
        <script type="text/javascript" src="./jquery.min.js" id="jquery-core-js"></script>
        <script type="text/javascript" src="./script-stars.js" id="script_stars-js"></script>
      <HMain/>
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
