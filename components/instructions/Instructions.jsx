import Image from 'next/image'
import form from '../../assets/images/formulario-de-contacto.png'
import home from '../../assets/images/hogar.svg'
import call from '../../assets/images/llamada-telefonica.svg'

import styles from '../../styles/Home.module.css'

const Instructions = () => {
    return (
        <div className={styles.instructions}>
            <div className={styles.titles}>
            <h1>¿CÓMO FUNCIONA?</h1>
            <h3>Es muy fácil, en pocos pasos tenes tu préstamo inmediato.</h3>
            </div>
            <div className={styles.icons}>
                <div className={styles.containerImage}>
                    <Image src={form} alt="form" width={100} height={100}/>
                    <p>Llenas el formulario!</p>
                </div>
                <div className={styles.containerImage}>
                    <Image src={call} alt="call" width={100} height={100}/>
                    <p>Nos comunicamos, cargamos tus datos!</p>
                </div>
                <div className={styles.containerImage}>
                    <Image src={home} alt="home" width={100} height={100}/>
                    <p>Y al otro día tenes tu préstamo en tu casa!</p>
                </div>
            </div>
        </div>
    )
}

export default Instructions;

//<div>Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>