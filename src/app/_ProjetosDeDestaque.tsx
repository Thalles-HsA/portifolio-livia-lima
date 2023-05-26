import Image from 'next/image'
import styles from '../styles/app/projetosdedestaque.module.css'
import { hagridExtrabold } from '@/styles/fonts'
import Link from 'next/link'

import img18 from 'public/img/PaginaInicial/18.png'
import img19 from 'public/img/PaginaInicial/19.png'
import img20 from 'public/img/PaginaInicial/20.png'
import img21 from 'public/img/PaginaInicial/21.png'
import img24 from 'public/img/PaginaInicial/24semmargem.png'

const ProjetosDeDestque = () => {
  return (
    <>
      <section className={styles.container} id='projetos'>
        <div className={styles.conteudo}>
          <Link href='/projetos' className={styles.box1}>
            <Image
              src={img18}
              alt='Imagem de uma tela de celular com um perfil do instagram'
              quality={25}
            />
          </Link>
          <Link href='/projetos' className={styles.box2}>
            <Image
              src={img20}
              alt='Imagem de um espaço de evento'
              quality={25}
            />
          </Link>
          <Link href='/projetos' className={styles.box3}>
            <h3 className={hagridExtrabold.className}>Projetos de Destaque</h3>
            <Image
              src='/gif/clients.gif'
              width={100}
              height={100}
              alt='gif animado escrito clients'
              quality={5}
            />
          </Link>
          <Link href='/projetos' className={styles.box4}>
            <Image
              src={img19}
              alt='Imagem do bondinho do Pão de Açucar no rio'
              quality={25}
            />
          </Link>
          <Link href='/projetos' className={styles.box5}>
            <Image
              src={img21}
              alt='Imagem de uma mulher com chápeu escrito Club Med'
              quality={25}
            />
          </Link>
          <Link href='/projetos' className={styles.box6}>
            <Image
              src={img24}
              alt='Imagem de uma tela de celular com um perfil do instaram aberto'
              quality={25}
            />
          </Link>
        </div >
      </section >
    </>
  )
}

export default ProjetosDeDestque
