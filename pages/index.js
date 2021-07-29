import Head from 'next/head'
import Hero from './components/Hero'
import Events from './components/Events'
import Music from './components/Music'
import Videos from './components/Videos'
import NavigationMenu from './components/Nav'
import Footer from './components/Footer'
import { Box, Container } from '@chakra-ui/react'
//remember
//emails when new event, music ,video
export default function Home() {
  return ( 
    <>
    <Head>
      <title>Ozeeil</title>
      <meta name="description" content="love, light + vibes" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavigationMenu/>
    <Hero/>
    <Container maxW="container.xl" centerContent>
      <Events/>
      <Music/>
      <Videos/>
    </Container>
    
    <Footer/>
    </>
  )
}
