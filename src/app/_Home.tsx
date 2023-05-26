import Image from 'next/image'
import styles from '../styles/app/home.module.css'
import { hagridExtrabold, hagridRegular2 } from '@/styles/fonts'

const Home = () => {
  return (
      <section className={styles.container} id='home'>
        <div className={styles.descricao}>
          <div>
            <h1>Lívia Lima</h1>
            <h2 className={hagridExtrabold.className}>
              Portifólio
            </h2>
          </div>
          <div>
            <p>
              TRANSFORMANDO MARCAS PELA COMUNICAÇÃO COM <span className={hagridRegular2.className}>100% DE AUTENTICIDADE E CONEXÃO</span>
            </p>
          </div>
        </div>
        <div className={styles.gif}>
          <Image
            src='/gif/gif-arcoires.gif'
            width={150}
            height={150}
            alt='gif animado de um arco-ires'
            priority
            quality={5}
          />
          <Image
            src='/gif/gif-circulo.gif'
            width={150}
            height={150}
            alt='gif animado de circulos'
            priority
            quality={5}
          />
          <Image
            src='/gif/gif-quadrado.gif'
            width={150}
            height={150}
            alt='gifi animado de quadrados'
            priority
            quality={5}
          />
        </div>
      </section>
  )
}

export default Home

