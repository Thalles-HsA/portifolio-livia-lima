import Image from 'next/image'
import styles from '@/styles/projetos.module.css'
import { hagridExtrabold, hagridRegular2 } from '@/styles/fonts'
import VideoPlayer from '@/components/Video'

const D1000 = () => {
  return (
    <>
      <div className={styles['conteudo-vertical']}>
        <div className={styles['conteudo-vertical-descricao']}>
          <h2>
            Coordenação de Conteúdo
          </h2>
          <h3 className={hagridExtrabold.className}>
            Número <span className={hagridRegular2.className}>21</span>
          </h3>
          <hr />
          <p>
            Para a marca de dermocosméticos e  maquiagens da rede, além do planejamento de pauta e coordenação da produção de conteúdo junto da equipe de Criação, atuei diretamente na estratégia de influenciadoras e na produção de briefings criativos.
          </p>
        </div>
        <div className={styles['conteudo-vertical-imagens']}>
          <Image
            src='/img/42.png'
            width={500}
            height={500}
            alt='git education'
            quality={50}
          />
          <VideoPlayer videoUrl="/video/video2.mp4" />
        </div>
      </div>

      <div className={styles['conteudo-horizontal']}>
        <div className={styles['conteudo-horizontal-imagens']}>
          <VideoPlayer videoUrl="/video/video2.mp4" />
          <VideoPlayer videoUrl="/video/video2.mp4" />
          <VideoPlayer videoUrl="/video/video2.mp4" />
        </div>
        <div className={styles['conteudo-horizontal-descricao']}>
          <h2>
            Estratégia de influenciadoras
          </h2>
          <h3 className={hagridExtrabold.className}>
            Número <span className={hagridRegular2.className}>21</span>
          </h3>
          <hr />
          <p>
            Além da produção estratégica de conteúdo feita na casa, também fui responsável pela estratégia de conteúdo de influenciadores: da curadoria de referência e construção de briefings criativos até  o cronograma de distribuição.

          </p>
          <br />
          <p>
            Apostamos em uma divulgação orgânica dos produtos, através de vlogs, reviews e tutoriais: inserindo os produtos com naturalidade na rotina das influenciadoras, evidenciando ao público consumidor que a marca faz parte da vida prática e real.
          </p>
        </div>


      </div>

      <div className={styles['conteudo-vertical']}>
        <div className={styles['conteudo-vertical-descricao']}>
          <h2>
            Coordenação de Conteúdo
          </h2>
          <h3 className={hagridExtrabold.className}>
            Farmalife
          </h3>
          <hr />
          <p>
            Planejamento estratégico e produção de conteúdo para as redes da Farmalife. Cobertura de ações, redação de roteiros de vídeo e demais desdobramentos.
          </p>
        </div>
        <div className={styles['conteudo-vertical-imagens']}>
          <Image
            src='/img/43.png'
            width={500}
            height={500}
            alt='git education'
            quality={50}
          />
          <VideoPlayer videoUrl="/video/video2.mp4" />
          <VideoPlayer videoUrl="/video/video2.mp4" />
        </div>
      </div>

      <div className={styles['conteudo-vertical']}>
        <div className={styles['conteudo-vertical-descricao']}>
          <h2>
            Coordenação de Conteúdo
          </h2>
          <h3 className={hagridExtrabold.className}>
            Drogaria Rosário
          </h3>
          <hr />
          <p>
            Planejamento estratégico para as redes, gestão da produção de conteúdo e elaboração de roteiros para peças criativas.
          </p>
        </div>
        <div className={styles['conteudo-vertical-imagens']}>
          <Image
            src='/img/44.png'
            width={500}
            height={500}
            alt='git education'
            quality={50}
          />
          <VideoPlayer videoUrl="/video/video2.mp4" />
        </div>
      </div>

      <div className={styles['conteudo-vertical']}>
        <div className={styles['conteudo-vertical-descricao']}>
          <h2>
            Coordenação de Conteúdo
          </h2>
          <h3 className={hagridExtrabold.className}>
            Drogarias Tamoio
          </h3>
          <hr />
          <p>
            Planejamento estratégico de pauta, coordenação da produção de conteúdo e redação de roteiros para peças criativas.
          </p>
        </div>
        <div className={styles['conteudo-vertical-imagens']}>
          <Image
            src='/img/45.png'
            width={500}
            height={500}
            alt='git education'
            quality={50}
          />
          <VideoPlayer videoUrl="/video/video2.mp4" />
        </div>
      </div>

      <div className={styles.resultados}>
        <div className={styles['resultados-titulo']}>
          <div>
            <h3>
              Resultados
            </h3>
            <p>
              Alguns dos resultados mais relevantes atingidos durante o período de atuação (agosto de <span className={hagridRegular2.className}>2022</span> a março de <span className={hagridRegular2.className}>2023</span>)
            </p>
          </div>
          <Image
            src='/trofeu.svg'
            width={120}
            height={120}
            alt='git education'
            quality={50}
          />
        </div>

        <div className={styles['resultados-descricao']} >
          <p>
            <strong>
              Número <span className={hagridRegular2.className}>21</span>
            </strong>
          </p>
          <ul>
            <li>
              Tivemos um aumento de <span className={hagridRegular2.className}>1165</span>% no engajamento, alcançando mais de <span className={hagridRegular2.className}>1</span>mi de usuários. marcando o maior alcance do ano. Também registramos um crescimento de <span className={hagridRegular2.className}>23</span>% nas impressões (com a marca de <span className={hagridRegular2.className}>2,2</span>mi) e de <span className={hagridRegular2.className}>158</span>% nas interações.
            </li>
          </ul>
          <p>
            <strong>
              Farmalife:
            </strong>
          </p>
          <ul>
            <li>Durante o período, alcançamos mais de <span className={hagridRegular2.className}>300</span>k de contas e atingimos mais de <span className={hagridRegular2.className}>867</span>k de impressões.</li>
          </ul>
          <p>
            <strong>
              Drogaria Rosário:
            </strong>
          </p>
          <ul>
            <li>
              Durante os meses de gestão, em março e abril de <span className={hagridRegular2.className}>2023</span>, alcançamos mais de <span className={hagridRegular2.className}>350</span>k de contas (aumento de <span className={hagridRegular2.className}>305</span>%) e atingimos mais de <span className={hagridRegular2.className}>2,6</span>mi de impressões (um aumento de <span className={hagridRegular2.className}>219</span>%).
            </li>
          </ul>
          <p>
            <strong>
              Drogaria Tamoio:
            </strong>
          </p>
          <ul>
            <li>
              Nesta conta, alcançamos mais de <span className={hagridRegular2.className}>208</span>k de usuários (um aumento de <span className={hagridRegular2.className}>9,2</span>%) e marcamos mais de <span className={hagridRegular2.className}>1,149</span>mi de impressões
            </li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default D1000
