import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ header }) {
  return (
    <>
      <Head>
        <title>Treeconomy</title>
        <meta name="description" content="Treeconomy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <section id="animacion-dias-header" className="header header-main top-of-page day">
        <img src={header.logo} />
		  </section>
      </main>
    </>
  )
}


export async function getStaticProps(){
  const res = await fetch('http://localhost:3000/api/header')
  const header = await res.json()

  return {
    props: {
      header
    }
  }
}
