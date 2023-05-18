import Image from "next/image";
import styles from '../styles/Footer.module.css'
import {BsFacebook, BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs'
import { hagridRegular2 } from "@/styles/fonts";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <BsFacebook />
        <a href="https://www.linkedin.com/in/livialimams/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <BsTwitter />
        <BsInstagram />
      </div>
      <h5>Marcas incriveis para qual já trabalhei</h5>
      <div className={styles.logo}>
        <Image
          src='/bondinho.svg'
          width={150}
          height={150}
          alt="Logo"
        />
        <Image
          src='/d1000.svg'
          width={150}
          height={150}
          alt="Logo"
        />
        <Image
          src='/clubMed.svg'
          width={150}
          height={150}
          alt="Logo"
        />
        <Image
          src='/shoppingTijuca.svg'
          width={150}
          height={150}
          alt="Logo"
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