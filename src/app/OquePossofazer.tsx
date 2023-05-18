import Image from 'next/image'
import styles from '../styles/oquepossofazer.module.css'

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
              alt='git education'
            />
            <h2>
              O que posso fazer por você e pela sua empresa
            </h2>
          </div>
          <div className={styles.descricao}>
            <div>
              <Image
                src='/img/15.png'
                width={200}
                height={200}
                alt='About'
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
                src='/img/16.png'
                width={200}
                height={200}
                alt='About'
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
                src='/img/17.png'
                width={200}
                height={200}
                alt='About'
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

