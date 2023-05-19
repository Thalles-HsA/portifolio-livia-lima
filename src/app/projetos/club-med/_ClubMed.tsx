import Image from 'next/image'
import styles from '@/styles/app/projetos/projetos.module.css'
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
            src='/img/ClubMed/46.png'
            width={500}
            height={500}
            alt='Imagens de posts do instagram'
            quality={25}
          />
          <Image
            src='/img/ClubMed/47.png'
            width={500}
            height={500}
            alt='Imagens de posts do instagram'
            quality={25}
          />
          <Image
            src='/img/ClubMed/48.png'
            width={500}
            height={500}
            alt='Imagens de posts do instagram'
            quality={25}
          />
          <Image
            src='/img/ClubMed/49.png'
            width={500}
            height={500}
            alt='Imagens de posts do instagram'
            quality={25}
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
            src='/img/ClubMed/50.png'
            width={500}
            height={500}
            alt='Imagens de posts do instagram'
            quality={25}
          />
          <Image
            src='/img/ClubMed/51.png'
            width={500}
            height={500}
            alt='Imagens de posts do instagram'
            quality={25}
          />
          <Image
            src='/img/ClubMed/52.png'
            width={500}
            height={500}
            alt='Imagens de posts do instagram'
            quality={25}
          />
          <Image
            src='/img/ClubMed/53.png'
            width={500}
            height={500}
            alt='Imagens de posts do instagram'
            quality={25}
          />
        </div>
      </div>
    </>
  )
}

export default ClubMed
