import NavbarProjetos from '@/components/NavbarProjetos'
import styles from '@/styles/projetosresumo.module.css'
import { hagridExtrabold, hagridRegular, hagridRegular2 } from '@/styles/fonts'
import Image from 'next/image'
import Botao from '@/components/Botao'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  viewport: {
    width: '1200',
  },
};

export default function Home() {
  return (
    <>
      <NavbarProjetos />
      <div className={styles.resumo}>
        <div className={styles['resumo-descricao']}>
          <h2>
            Coordenação de Conteúdo
          </h2>
          <h3 className={hagridExtrabold.className}>
            Parque Bondinho Pão de Açúcar
          </h3>
          <hr />
          <p>
            Pela agência <span className={hagridRegular2.className}>3</span>mais, fui a pessoa responsável pela Comunicação <span className={hagridRegular2.className}>360</span>º e gestão da equipe de Criação para as redes sociais do Parque Bondinho Pão de Açúcar. Além da estratégia criativa e planejamento de conteúdo, fui responsável pelo desenvolvimento de ativações, roteiros, storytelling, briefings, desdobramento de campanhas, coberturas e captações.
          </p>
          <br />
          <p>
            Aqui, compartiharei as campanhas mais memoráveis e alguns dos conteúdos produzidos em suas editorias.
          </p>
          <Botao href='/projetos/parque-bondinho' />
        </div >
        <div className={`${styles['resumo-container-imagem']} ${styles['resumo-imagens']}`}>
            <Image
              src='/gif/celular.gif'
              width={500}
              height={500}
              alt='git education'
              className={styles.gif}
              quality={10}

            />
            <Image
              src='/img/24.png'
              width={500}
              height={500}
              alt='git education'
              className={styles.img}
              quality={10}

            />
        </div >
      </div>

      <div className={styles['resumo-invertido']}>
        <div className={`${styles['resumo-container-imagem']} ${styles['resumo-imagens']}`}>
          <h1 className={hagridRegular.className}>
            <Image
              src='/gif/celular.gif'
              width={500}
              height={500}
              alt='git education'
              className={styles.gif}
              quality={10}
            />
            <Image
              src='/img/39.png'
              width={500}
              height={500}
              alt='git education'
              className={styles.img}
              quality={10}
            />
          </h1>
        </div >
        <div className={styles['resumo-descricao']}>
          <h2>
            Coordenação  de Conteúdo
          </h2>
          <h3 className={hagridExtrabold.className}>
            Rede <span className={hagridRegular2.className}>D1000</span>
          </h3>
          <hr />
          <p>
            Também pela Agência <span className={hagridRegular2.className}>3</span>mais, fui a pessoa responsável pela comunicação digital das redes da Farmalife, Número <span className={hagridRegular2.className}>21</span>, Drogaria Rosário e Drogarias Tamoio. Além de gerenciar a equipe de Criação e cuidar da estratégia e planejamento de conteúdo, fui responsável pelo desenvolvimento de roteiros, briefings criativos para influenciadores e desdobramento de campanhas.
          </p>
          <Botao href='/projetos/d1000' />
        </div >

      </div>

      <div className={styles.resumo}>
        <div className={styles['resumo-descricao']}>
          <h2>
            Coordenação  de Conteúdo e Comunidade

          </h2>
          <h3 className={hagridExtrabold.className}>
            Club Med Trancoso
          </h3>
          <hr />
          <p>
            Recebi o desafio de me mudar para o sul da Bahia e coordenar a produção de conteúdo, planejamento estratégico de redes, comunicação interna e cobertura de eventos no resort, com foco no rebranding da unidade e explorando a narrativa &quot;um paraíso tropical com atmosfera boemia única&quot;.
          </p>
          <Botao href='/projetos/club-med' />
        </div >
        <div className={`${styles['resumo-container-imagem']} ${styles['resumo-imagens']}`}>
          <h1 className={hagridRegular.className}>
            <Image
              src='/gif/celular.gif'
              width={500}
              height={500}
              alt='git education'
              className={styles.gif}
              quality={10}
            />
            <Image
              src='/img/40.png'
              width={500}
              height={500}
              alt='git education'
              className={styles.img}
              quality={10}
            />
          </h1>
        </div >
      </div>

      <div className={styles['resumo-invertido']} id='shopping'>
        <div className={`${styles['resumo-container-imagem']} ${styles['resumo-imagens']}`}>
          <h1 className={hagridRegular.className}>
            <Image
              src='/gif/shopping.gif'
              width={500}
              height={500}
              alt='git education'
              className={styles.gif}
              quality={10}
            />

          </h1>
        </div >
        <div className={styles['resumo-descricao']} >
          <h2>
            Roteiro e texto de peças publicitárias para o
          </h2>
          <h3 className={hagridExtrabold.className}>
            Shopping Tijuca
          </h3>
          <hr />
          <p>
            Clique na imagem para acessar  o meu Behance com esses e outro projetos
          </p>
          <Botao href='https://www.behance.net/liviamlima' target='_blank'/>
        </div >

      </div>
    </>

  )
}
