import Image from 'next/image'
import styles from '@/styles/projetos.module.css'
import { hagridExtrabold } from '@/styles/fonts'

const ClubMed = () => {
  return (
    <>
      <div className={styles['conteudo-vertical']}>
        <div className={styles['conteudo-vertical-descricao']}>
          <h2>
            Coordenação de Conteúdo
          </h2>
          <h3 className={hagridExtrabold.className}>
            Club Med Trancoso
          </h3>
          <hr />
          <p>
            Bem-estar e lifestyle
          </p>
        </div>
        <div className={styles['conteudo-vertical-imagens']}>
          <Image
            src='/img/46.png'
            width={500}
            height={500}
            alt='git education'
          />
          <Image
            src='/img/47.png'
            width={500}
            height={500}
            alt='git education'
          />
          <Image
            src='/img/48.png'
            width={500}
            height={500}
            alt='git education'
          />
          <Image
            src='/img/49.png'
            width={500}
            height={500}
            alt='git education'
          />
        </div>
      </div>

      <div className={styles['conteudo-vertical']}>
        <div className={styles['conteudo-vertical-descricao']}>
          <h2>
            Coordenação de Conteúdo
          </h2>
          <h3 className={hagridExtrabold.className}>
            Club Med Trancoso
          </h3>
          <hr />
          <p>
          Experiências Gastronômicas
          </p>
        </div>
        <div className={styles['conteudo-vertical-imagens']}>
          <Image
            src='/img/50.png'
            width={500}
            height={500}
            alt='git education'
          />
          <Image
            src='/img/51.png'
            width={500}
            height={500}
            alt='git education'
          />
          <Image
            src='/img/52.png'
            width={500}
            height={500}
            alt='git education'
          />
          <Image
            src='/img/53.png'
            width={500}
            height={500}
            alt='git education'
          />
        </div>
      </div>
    </>

  )
}

export default ClubMed
