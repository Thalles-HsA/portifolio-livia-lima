import Image from "next/image";
import styles from '../styles/components/Footer.module.css'
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs'
import { hagridRegular2 } from "@/styles/fonts";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h5>Marcas incriveis para qual já trabalhei</h5>
      <div className={styles.logo}>
        <Image
          src='/img/Footer/bondinho.svg'
          width={150}
          height={150}
          alt="Logo"
          quality={10}
        />
        <Image
          src='/img/Footer/d1000.svg'
          width={150}
          height={150}
          alt="Logo"
          quality={10}
        />
        <Image
          src='/img/Footer/clubMed.svg'
          width={150}
          height={150}
          alt="Logo"
          quality={10}
        />
        <Image
          src='/img/Footer/shoppingTijuca.svg'
          width={150}
          height={150}
          alt="Logo"
          quality={10}
        />
      </div>
      <div>
        <p>
          <span className={hagridRegular2.className}>@2023 - </span>
          Lívia Lima || Developed By:  <a href="https://www.linkedin.com/in/thalleshsa" target='_blank'>  Thalles Henrique</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer