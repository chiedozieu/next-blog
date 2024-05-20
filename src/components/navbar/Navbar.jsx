import styles from './navbar.module.css'
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

 
 const Navbar = () => {
   return (
     <div className={styles.container}>
      <div className="styles.social">
        <Link href='#'><CiFacebook /></Link>
        <Link href='#'><CiInstagram /></Link>
        <Link href='#'><PiTiktokLogoThin /></Link>
        <Link href='#'><CiYoutube /></Link>
      </div>
      <div className="styles.logo">Chikenemma</div>
      <div className="styles.links">
      <ThemeToggle />
        <Link href='/'>Homepage</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/about'>About</Link> 
        <AuthLinks />
      </div>
     </div>
   )
 }
 
 export default Navbar
 