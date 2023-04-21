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
