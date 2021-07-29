import Head from 'next/head'
import NavigationMenu from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="love, light + vibes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationMenu/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}