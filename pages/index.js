import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import HeroArea from '../components/HeroArea';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import DownloadSection from '../components/DownloadSection';
import ReviewSection from '../components/ReviewSection';
import Footer from '../components/Footer';


export default function Home() {

  return (
    <div >
      <Head>
        <title>Quran Talk</title>
        <meta key='desc' name="description" content="Quran Talk" />
        
        <link key='apple' rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
        <link key='32x32' rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
        <link key='16x16' rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
        <link key='manifest' rel="manifest" href="favicon/site.webmanifest"/>
        <link key='mask-icon' rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta key='title-color' name="msapplication-TileColor" content="#da532c"/>
        <meta key='theme-color' name="theme-color" content="#ffffff"></meta>
      </Head>

      <Header/>
       
      <main className='container mx-auto flex flex-col'>
        <HeroArea classes="order-0 md:order-1"/>
        <SectionOne classes="order-2 md:order-1"/>
        <SectionTwo classes="order-3 md:order-1"/>
        <SectionThree classes="order-4 md:order-1"/>
        <DownloadSection classes="order-1 md:order-1"/>
        <ReviewSection classes="order-5 md:order-1"/>
      </main>
 
      <Footer/>
    </div>
  )
}
