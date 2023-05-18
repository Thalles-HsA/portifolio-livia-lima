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
            <div>
              <Image
                src='/gif/about.gif'
                width={100}
                height={100}
                alt='About'
              />
              <h2 className={styles.titulo} >Oi, eu sou a <span className={hagridExtrabold.className}>
                Lívia
              </span> </h2>
            </div>
            <div className={styles.descricao}>
              <p>
                Sou <strong>redatora</strong> e <strong>estrategista criativa</strong>.
              </p>
              <br />
              <p>
                <strong>Jornalista</strong>  de formação pela FACH com especialidade em <strong>humanização de conteúdo e experiência do usuário.</strong>  Apaixonada por gente, boas ideias e negócios inovadores, revoluciono a comunicação de marcas com <strong>autenticidade e conexão.</strong>
              </p>
              <br />
              <p>
                Aqui, apresento meus principais trabalhos com <strong>arketing, comunicação digital, redação criativa e criação para redes.</strong>
              </p>
            </div>
          </div>
          <Image
            src={imagemPerfil}
            alt='Imagem de perfil'
            className={styles.imagemdeperfil}
          />
        </div >
      </div >
    </>

  )
}

export default Biografia

