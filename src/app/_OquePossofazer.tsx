import Image from 'next/image'
import styles from '../styles/app/oquepossofazer.module.css'

const OQuePossoFazer = () => {
  return (
    <>
      <div className={styles.container} id='oquepossofazer'>
        <div className={styles.conteudo}>
          <div className={styles.titulo}>
            <Image
              src='/gif/expertise.gif'
              width={100}
              height={100}
              alt='gif animado escrito expertise'
              quality={5}
            />
            <h2>
              O que posso fazer por você e pela sua empresa
            </h2>
          </div>
          <div className={styles.descricao}>
            <div>
              <Image
                src='/img/PaginaInicial/15.png'
                width={200}
                height={200}
                alt='Imagem de uma pessoa trabalhando no notebook e uma agenda na mesa'
                quality={10}
              />
              <div>
                <h3>Redaçao</h3>
                <p>
                  Produção de conteúdo para diferentes formatos e canais, incluindo Ghost Writing
                </p>
              </div>
            </div>
            <div>
              <Image
                src='/img/PaginaInicial/16.png'
                width={200}
                height={200}
                alt='Imagem de duas mulheres trabalhando com livros e caderno na mesa'
                quality={10}
              />
              <div>
                <h3>Estratégia Criativa</h3>
                <p>
                  Produção de conteúdo para diferentes formatos e canais, incluindo Ghost Writing
                </p>
              </div>
            </div>
            <div>
              <Image
                src='/img/PaginaInicial/17.png'
                width={200}
                height={200}
                alt='Imagem de mão colocando postite em um projeto'
                quality={10}
              />
              <div>
                <h3>Planejamento de Conteúdo</h3>
                <p>
                  Produção de conteúdo para diferentes formatos e canais, incluindo Ghost Writing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default OQuePossoFazer

