import Image from 'next/image'
import styles from '../styles/app/deondevim.module.css'
import { hagridRegular2 } from '@/styles/fonts'

const DeOndeVim = () => {
  return (
    <>
      <section className={styles.container} id='deondevim'>
        <div className={styles.conteudo}>
          <div>
            <div className={styles.titulo}>
              <h2>
                De onde vim
              </h2>
              <Image
                src='/gif/education.gif'
                width={150}
                height={150}
                alt='git escrito education'
                quality={5}
              />
            </div>
            <div className={styles.descricao}>
              <div>
                <Image
                  src='/img/PaginaInicial/bolarosa.svg'
                  width={50}
                  height={50}
                  alt='um circulo rosa'
                  quality={5}
                />
                <h3>Campo Grande para o Mundo</h3>
                <p>
                  Cresci em Campos Grande, zona oeste do Rio de janeiro, e venho de uma família migrante nordestina.
                </p>
                <br />
                <p>
                  Minha primeira formação de vida começou aqui!
                </p>
                <br />
                <p className={hagridRegular2.className}>
                  <strong>
                    1995 - Atualmente
                  </strong>
                </p>
              </div>
              <div>
                <Image
                  src='/img/PaginaInicial/bolaazul.svg'
                  width={50}
                  height={50}
                  alt='um circulo azul'
                  quality={5}
                />
                <h3>FACHA</h3>
                <p>
                  Bacharel em Jornalismo
                </p>
                <br />
                <p className={hagridRegular2.className}>
                  <strong>
                    2016 - 2020
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div >
      </section >
    </>

  )
}

export default DeOndeVim

