import Image from 'next/image';
import { useState } from 'react';

import logo from '../../assets/images/dinero.svg';
import face from '../../assets/images/facebook.png';
import insta from '../../assets/images/instagram.png';
import menu from '../../assets/images/menu.svg';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
    const [open,setOpen] = useState(false)

    return (
        <nav className={open ? styles.newNav : styles.navbar}>
            <ul className={styles.lista}>
                <Image src={logo} alt="logo" width={50} height={50}/>
                <li className={styles.pages}>¿COMO FUNCIONA?</li>
                <li className={styles.pages}>POLITICAS DE PRIVACIDAD</li>
                <li className={styles.pages}>AYUDA</li>
                <li>
                    <Image src={face} alt="facebook" width={25} height={25} className={styles.logo}/>
                    <Image src={insta} alt="instagram" width={25} height={25} className={styles.logo}/> 
                </li>
            </ul>
            <ul className={styles.hidden}>
                <Image src={logo} alt="logo" width={50} height={50}/>
                <Image onClick={() => setOpen(open ? false : true)} src={menu} alt="insta" width={50} height={50}/>
            </ul>
            <ul className={open ? styles.menu : styles.menuHidden}>
                <li className={styles.pages}>¿COMO FUNCIONA?</li>
                <li className={styles.pages}>POLITICAS DE PRIVACIDAD</li>
                <li className={styles.pages}>AYUDA</li>
                <li>
                    <Image src={face} alt="facebook" width={25} height={25} className={styles.logo}/>
                    <Image src={insta} alt="instagram" width={25} height={25} className={styles.logo}/> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;