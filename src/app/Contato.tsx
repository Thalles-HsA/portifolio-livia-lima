import Image from 'next/image'
import styles from '../styles/contato.module.css'
import { hagridExtrabold, hagridRegular2 } from '@/styles/fonts'
import { FaLinkedin } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'

import img22 from 'public/img/22.png'

const Contato = () => {
  return (
    <>
      <div className={styles.container} id='contato'>
        <div className={styles.conteudo}>
          <div className={styles.descricao}>
            <h3 className={hagridExtrabold.className}>
              Fale Comigo!
            </h3>
            <div>
              <div className={styles.contatos}>
                <TbWorldWww />
                <div>
                  <h4>WEBSITE</h4>
                  <a href='https://www.behance.net/livialima' target='_blank'>https://www.behance.net/livialima</a>
                </div>
              </div>

              <div className={styles.contatos}>
                <MdEmail />
                <div>
                  <h4>E-mail</h4>
                  <a href='mailto:livialimams@gmail.com'>livialimams@gmail.com</a>
                </div>
              </div>

              <div className={styles.contatos}>
                <BsFillTelephoneFill />
                <div>
                  <h4>Telefone</h4>
                  <a href='tel:21982207556' className={hagridRegular2.className}>(21) 98220-7556</a>
                </div>
              </div>
            </div>
            <div className={styles.icons}>
              <p>
                <strong>
                  PARA VER MAIS DO MEU TRABALHO, VISITE MEU LINKEDIN
                </strong>
              </p>
              <a href="https://www.linkedin.com/in/livialimams/" target="_blank" ><FaLinkedin /></a>
            </div>
            <div className={styles.balao}>
              <Image
                src='/gif/balaodetexto.gif'
                width={100}
                height={100}
                alt='git education'
                quality={5}
              />
            </div>
          </div>
          <div className={styles.imagem}>
            <Image
              src='/img/22.png'
              width={500}
              height={500}
              alt='git education'
              quality={25}
            />
          </div>
        </div >
      </div >
    </>
  )
}

export default Contato