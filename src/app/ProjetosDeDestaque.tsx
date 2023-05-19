import Image from 'next/image'
import styles from '../styles/projetosdedestque.module.css'
import { hagridExtrabold } from '@/styles/fonts'
import Link from 'next/link'

import img18 from 'public/img/18.png'
import img19 from 'public/img/19.png'
import img20 from 'public/img/20.png'
import img21 from 'public/img/21.png'
import img24 from 'public/img/24semmargem.png'

const ProjetosDeDestque = () => {
  return (
    <>
      <div className={styles.container} id='projetos'>
        <div className={styles.conteudo}>

          <Link href='/projetos' className={styles.box1}>
            <Image
              src={img18}
              alt='Imagem de uma tela de celular'
              quality={25}
            />
          </Link>

          <Link href='/projetos' className={styles.box2}>
            <Image
              src={img20}
              alt='Imagem de uma tela de celular'
              quality={25}
            />
          </Link>

          <Link href='/projetos' className={styles.box3}>
            <h3 className={hagridExtrabold.className}>Projetos de Destaque</h3>
            <Image
              src='/gif/clients.gif'
              width={100}
              height={100}
              alt='git education'
              quality={5}
            />
          </Link>

          <Link href='/projetos' className={styles.box4}>
            <Image
              src={img19}
              alt='Imagem de uma tela de celular'
              quality={25}
            />
          </Link>

          <Link href='/projetos' className={styles.box5}>
            <Image
              src={img21}
              alt='Imagem de uma tela de celular'
              quality={25}
            />
          </Link>

          <Link href='/projetos' className={styles.box6}>
            <Image
              src={img24}
              alt='Imagem de uma tela de celular'
              quality={25}
            />
          </Link>

        </div >
      </div >
    </>
  )
}

export default ProjetosDeDestque
