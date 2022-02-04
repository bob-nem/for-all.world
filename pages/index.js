import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>International service</title>
        <meta name="description" content="for all world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>
        <h1 className={style.title}>
          vector of correct decision
        </h1>

        
      </main>

      <footer className={style.footer}>
        <p>© Copyright 2020&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Development by <a href="https://it.for-all.world">IT_Department</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;All Rights Reserved&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Powered by <a href="https://reactjs.org" >React</a> with <a href="https://nextjs.org">NextJS</a></p>
      </footer>
    </div>
  )
}
