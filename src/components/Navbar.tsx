'use client'

import Image from "next/image";
import styles from '../styles/components/Navbar.module.css'
import Link from "next/link";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import { useState } from "react";

const Navbar = () => {
  const [hide, setHide] = useState('none');

const handleHide = () => {
  if(hide === 'none') {
    setHide('block')
  } else {
    setHide('none')
  }
}
  console.log(hide)

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              src='/img/Navbar/logo.svg'
              width={30}
              height={30}
              alt="Logo"
              quality={10}
            />
            <h1>Lívia Lima</h1>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link href='#biografia'>Biografia</Link>
            </li>
            <li>
              <Link href='#deondevim'>De onde vim</Link>
            </li>
            <li>
              <Link href='#oquepossofazer'>Como te ajudo</Link>
            </li>
            <li>
              <Link href='#projetos'>Projetos</Link>
            </li>
            <li>
              <Link href='#contato'>Contato</Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className={styles['navbar-togle']}>
        <div className={styles.logo} onClick={() => handleHide()}>
          { hide !== 'block' 
            ? <AiOutlineMenuUnfold className={styles.svg}/>
            : <AiOutlineMenuFold className={styles.svg}/>
          }
        </div>
        <div style={{ display: hide }}>
          <ul>
            <li>
              <Link  
              onClick={() => handleHide()}href='#biografia'>Biografia</Link>
            </li>
            <li>
              <Link 
              onClick={() => handleHide()}
              href='#deondevim'>De onde vim</Link>
            </li>
            <li>
              <Link 
              onClick={() => handleHide()}href='#oquepossofazer'>Como te ajudo</Link>
            </li>
            <li>
              <Link 
              onClick={() => handleHide()}
              href='#projetos'>Projetos</Link>
            </li>
            <li>
              <Link 
              onClick={() => handleHide()}href='#contato'>Contato</Link>
            </li>
          </ul>
        </div>
      </nav >
    </>
  );
}
export default Navbar