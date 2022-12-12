import Head from 'next/head'
import Image from 'next/image'
import HomePage from "../components/entry_page/HomePage"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexander Cobble</title>
        <meta name="description" content="Alexander Cobble's Web Dev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
