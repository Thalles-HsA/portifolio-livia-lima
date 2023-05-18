import Image from 'next/image'
import styles from '@/styles/projetos.module.css'
import { hagridExtrabold, hagridRegular, hagridRegular2 } from '@/styles/fonts'

const ParqueBondinho = () => {
  return (
    <>
      <div className={styles['conteudo-horizontal']}>
        <div className={styles['conteudo-horizontal-imagens']}>
          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>
        </div>
        <div className={styles['conteudo-horizontal-descricao']}>
          <h2>
            UMusic Play in Rio
          </h2>
          <h3 className={hagridExtrabold.className}>
            Parque Bondinho Pão de Açúcar + Universal Music
          </h3>
          <hr />
          <p>
            Produção de Branded Content para divulgar a ação, parceria entre o Parque e a Universal Music, com programação musical, aulas de dança, DJ e mais.
          </p>
          <br />
          <p>
            Além do planejamento e execução de coberturas para produção do conteúdo, desenvolvemos roteiro para peças de mídia.
          </p>
        </div>


      </div>

      <div className={styles['conteudo-horizontal']}>
        <div className={styles['conteudo-horizontal-descricao']}>
          <h2>
            UMusic Play in Rio
          </h2>
          <h3 className={hagridExtrabold.className}>
            Parque Bondinho Pão de Açúcar + Universal Music
          </h3>
          <hr />
          <p>
            Na estratégia, atuamos com foco na experiência do visitante, no conteúdo humanizado (em uma perspectiva &quot;pode ser você aqui&quot;) e pela imersão nas instalações.
          </p>

        </div>
        <div className={styles['conteudo-horizontal-imagens']}>
          <Image
            src='/img/31.png'
            width={500}
            height={500}
            alt='git education'
          />
        </div>
      </div>

      <div className={styles['conteudo-vertical']}>
        <div className={styles['conteudo-vertical-descricao']}>
          <h2>
            Aniversário de <span className={hagridRegular2.className}>100</span> anos

          </h2>
          <h3 className={hagridExtrabold.className}>
            Parque Bondinho Pão de Açúcar
          </h3>
          <hr />
          <p>
            Desenvolvimento de comunicação para divulgação da programação, cobertura on time, produção de contéudo e roteiros.
          </p>
        </div>
        <div className={styles['conteudo-vertical-imagens']}>
          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>
          <Image
            src='/img/33.png'
            width={500}
            height={500}
            alt='git education'
          />
        </div>
      </div>

      <div className={styles['conteudo-vertical']}>
        <div className={styles['conteudo-vertical-descricao']}>
          <h2>
            Captações de Conteúdo
          </h2>
          <h3 className={hagridExtrabold.className}>
            Parque Bondinho Pão de Açúcar
          </h3>
          <hr />
          <p>
            Além das coberturas on time pelos stories, roteirizamos, captamos e desenvolvemos conteúdos focados nas experiências.
          </p>
        </div>
        <div className={styles['conteudo-vertical-imagens']}>

          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>
          <Image
            src='/img/2.png'
            width={250}
            height={458}
            alt='git education'
          />
          <Image
            src='/img/3.png'
            width={250}
            height={458}
            alt='git education'
          />

        </div>
      </div>

      <div className={styles['conteudo-horizontal']}>
        <div className={styles['conteudo-horizontal-descricao']}>
          <h2>
            Vem Viver o Verão
          </h2>
          <h3 className={hagridExtrabold.className}>
            Parque Bondinho
          </h3>
          <hr />
          <p>
            Redação publicitária nas peças de mídia on.
          </p>
        </div>
        <div className={styles['conteudo-horizontal-imagens']}>
          <Image
            src='/img/35.png'
            width={500}
            height={500}
            alt='git education'
          />
        </div>
      </div>

      <div className={styles['conteudo-horizontal']}>
        <div className={styles['conteudo-horizontal-descricao']}>
          <h2>
            Experiências
          </h2>
          <h3 className={hagridExtrabold.className}>
            Parque Bondinho Pão de Açúcar
          </h3>
          <hr />
          <p>
            Alguns conteúdos captados, roteirizados e produzidos.
          </p>
          <br />
          <p>
            Nesta editoria, o objetivo era transmitir as experiências inesquecíveis e únicas do Parque Bondinho, pela perspectiva do público e para fortalecimento de marca.
            Além disso, aproveitamos oportunidades de fortalecer parceiros do local na divulgação, reiterando o ponto turístico como uma experiência completa e imperdível.
          </p>
        </div>
        <div className={styles['conteudo-horizontal-imagens']}>
          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>

        </div>
      </div>

      <div className={styles['conteudo-horizontal']}>
        <div className={styles['conteudo-horizontal-imagens']}>
          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>
        </div>
        <div className={styles['conteudo-horizontal-descricao']}>
          <h2>
            Experiências
          </h2>
          <h3 className={hagridExtrabold.className}>
            Parque Bondinho Pão de Açúcar
          </h3>
          <hr />
          <p>
            Mais conteúdos roteirizados e produzidos.
          </p>
        </div>
      </div>

      <div className={styles['conteudo-vertical']}>
        <div className={styles['conteudo-vertical-descricao']}>
          <h2>
            Inspiracional
          </h2>
          <h3 className={hagridExtrabold.className}>
            Parque Bondinho Pão de Açúcar
          </h3>
          <hr />
          <p>
            Nesta editoria de conteúdo, explorávamos a estética do patrimônio natural do Parque. Tendo o Morro da Urca e o Pão de Açúcar como protagonistas, criavámos narrativas para ativar a conexão do público com e instigar o desejo de conhecer ao vivo.
          </p>
          <br />
          <p>
            Aqui, as belezas naturais do Rio eram nossas protagonistas.          </p>
        </div>
        <div className={styles['conteudo-vertical-imagens']}>
          <Image
            src='/img/4.png'
            width={360}
            height={500}
            alt='git education'
          />
          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>
        </div>
      </div>

      <div className={styles['conteudo-vertical']}>
        <div className={styles['conteudo-vertical-descricao']}>
          <h2>
            Institucional
          </h2>
          <h3 className={hagridExtrabold.className}>
            Parque Bondinho Pão de Açúcar
          </h3>
          <hr />
          <p>
            Alguns conteúdos redigidos para o LinkedIn:
          </p>
        </div>
        <div className={styles['conteudo-vertical-imagens']}>
          <Image
            src='/img/36.png'
            width={500}
            height={500}
            alt='git education'
          />
          <Image
            src='/img/37.png'
            width={500}
            height={500}
            alt='git education'
          />
        </div>
      </div>

      <div className={styles['conteudo-vertical']}>
        <div className={styles['conteudo-vertical-descricao']}>
          <h2>
            TikTok
          </h2>
          <h3 className={hagridExtrabold.className}>
            Parque Bondinho Pão de Açúcar
          </h3>
          <hr />
          <p>
            Construção de estratégia criativa para Tik Tok e coordenação da produção de conteúdo para a rede. Apostamos em conteúdos de experiência, inspiracionais e trends, priorizando os formatos e narrativas do próprio Tik Tok, assim como ferramentas nativas e aúdio em alta.
          </p>
        </div>
        <div className={styles['conteudo-vertical-imagens']}>
          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>
          <video src='/video/video2.mp4' controls></video>
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
          />
        </div>

        <div className={styles['resultados-descricao']} >
          <p>
            <strong>
              No Instagram:
            </strong>
          </p>
          <ul>
            <li>Conquistamos mais de <span className={hagridRegular2.className}>42</span>k de seguidores</li>
            <li>Alcançamos mais de <span className={hagridRegular2.className}>7,5</span>mi usuários </li>
          </ul>
          <p>
            <strong>
              No Tik Tok:
            </strong>
          </p>
          <p></p>
          <ul>
            <li>Durante o período de atuação (setembro a março), registramos mais de <span className={hagridRegular2.className}>974</span>k de views e mais de <span className={hagridRegular2.className}>5</span>k novos seguidores de forma orgânica.</li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default ParqueBondinho
