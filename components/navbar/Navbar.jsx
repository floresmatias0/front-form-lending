import Image from 'next/image';

import logo from '../../public/vercel.svg'
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Image src={logo} alt="logo" width={45} height={45}/>
        </nav>
    )
}

export default Navbar;