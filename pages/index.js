import { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image'

import FormLoan from '../components/formloan/Formloan'
import styles from '../styles/Home.module.css';
import Instructions from '../components/instructions/Instructions';
import wave from '../assets/images/waves.svg'


export default function Home() {
  const [cuotas, setCuotas] = useState(null)

  const handleCuotas = (e,num) => {
    e.preventDefault()
    setCuotas(num)
  }

  const prestamoEnCuotas = (num,divisor) => {
    let aux
    let total = 0
    switch(divisor){
      case 1:
        aux = (30 * num)/100 + num 
        total = Math.round(aux/divisor)
      break;
      case 3: 
        aux = (40 * num)/100 + num 
        total = Math.round(aux/divisor)
      break;
      case 6:
        aux = (50 * num)/100 + num 
        total = Math.round(aux/divisor)
      break;
      case 12:
        aux = (60 * num)/100 + num 
        total = Math.round(aux/divisor)
      break;
      default:
        break;
    }
    return total
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.containerMain}>
          <div className={styles.containerForm}>
            <h1>¿Necesitas efectivo?</h1>
            <h3>Dejanos tus datos asi nos comunicamos para otorgarte tu credito</h3>
          </div>
          <div className={styles.containerForm}>
            <FormLoan cuotas={cuotas} handleCuotas={handleCuotas} prestamoEnCuotas={prestamoEnCuotas}/>
          </div>
        </div>
        <div className={styles.containerWaves}>
          <Image src={wave} alt="waves" className={styles.waves}/>
        </div>
      </main>
      <Instructions/>
      <footer className={styles.footer}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt enim eu magna mollis viverra ac sit amet neque. Sed laoreet aliquet congue. Morbi rhoncus, erat a dapibus fringilla, metus nulla dapibus velit, at ullamcorper lorem lectus ac risus. Nam laoreet elementum dolor, sed imperdiet massa. Etiam eget metus facilisis, rhoncus libero id, placerat lectus. Praesent pellentesque fringilla lorem, in interdum sapien ornare vestibulum. Donec quis mattis est. Integer id lacus eu purus sodales consectetur. Phasellus interdum ultricies ipsum. In non quam sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </footer>
    </div>
  )
}
