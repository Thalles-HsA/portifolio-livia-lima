import Image from 'next/image'
import styles from '../styles/biografia.module.css'
import { hagridExtrabold } from '@/styles/fonts'

import imagemPerfil from 'public/imagemdeperfil.png'

const Biografia = () => {
  return (
    <>
      <div className={styles.container} id='biografia'>
        <div className={styles.conteudo}>
          <div>
            <div className={styles.titulo}>
              <Image
                src='/gif/about.gif'
                width={100}
                height={100}
                alt='About'
                quality={10}
              />
              <h2>Oi, eu sou a <span className={hagridExtrabold.className}>
                Lívia
              </span> </h2>
            </div>
            <div className={styles.descricao}>
              <p>
                Sou redatora e estrategista criativa.
              </p>
              <br />
              <p>
                Jornalista de formação pela FACH com especialidade em humanização de conteúdo e experiência do usuário. Apaixonada por gente, boas ideias e negócios inovadores, revoluciono a comunicação de marcas com autenticidade e conexão.
              </p>
              <br />
              <p>
                Aqui, apresento meus principais trabalhos com arketing, comunicação digital, redação criativa e criação para redes.
              </p>
            </div>
          </div>
          <Image
            src={imagemPerfil}
            alt='Imagem de perfil'
            className={styles.imagemdeperfil}
            quality={50}
          />
        </div >
      </div >
    </>

  )
}

export default Biografia

