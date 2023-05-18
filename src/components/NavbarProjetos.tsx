'use client';

import { usePathname } from 'next/navigation';
import Image from "next/image";
import styles from '../styles/NavbarProjetos.module.css'
import Link from "next/link";
import { hagridRegular2 } from "@/styles/fonts";

const NavbarProjetos = () => {
  const pathname = usePathname();
  const getNavBarStyle = () => {

    if (pathname === '/projetos') {
      return `${styles.navbar}`;
    }
    return `${styles['navbar-projetos']} ${styles.navbar}`;

  };

  const getLink = () => {

    if (pathname === '/projetos') {
      return '/';
    }
    return '/projetos';

  };

  return (
    <nav className={getNavBarStyle()}>
      <div className={styles.logo}>
        <Link href={getLink()}>
          <Image
            src='/logo.svg'
            width={30}
            height={30}
            alt="Logo"
          />
          <h1>Lívia Lima</h1>
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link href='/projetos/parque-bondinho'>Parque Bondinho Pão e Açúcar</Link>
          </li>
          <li>
            <Link href='/projetos/d1000'>
              D<span className={hagridRegular2.className}>1000</span>
            </Link>
          </li>
          <li>
            <Link href='/projetos/club-med'>Club Med</Link>
          </li>
          <li>
            <Link href='/projetos/#shopping'>Shopping Tijuca</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavbarProjetos