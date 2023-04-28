import Head from 'next/head'
import HMain from '../components/main/index.js'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Treeconomy - Invierte en Arboles - Retornos mayores al 12%</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <script type="text/javascript" src="./jquery.min.js" id="jquery-core-js"></script>
        <script type="text/javascript" src="./scripts.min.js" id=" -js"></script>
        
        <script type="text/javascript" src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/js/Chart.bundle.min.js?ver=1.0" id="script_chartBundle-js"></script>
        <script type="text/javascript" src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/js/sakura.js?ver=1.0" id="sakura_js-js"></script>
        <script type="text/javascript" src="https://www.treeconomy.com.co/wp-content/themes/Treeconomy/js/script-stars.js?ver=1.0" id="script_stars-js"></script>
      <HMain/>
   
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
