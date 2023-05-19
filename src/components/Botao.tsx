import styles from '@/styles/botao.module.css'
import { hagridExtrabold } from '@/styles/fonts'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  href: string
  target?: string
}

const Botao = ({ href, target='' }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <Link href={href} legacyBehavior>
          <a className={`${styles.botao} ${hagridExtrabold.className}`} target={target}>
            Veja mais
          </a>
        </Link>
        <Image
          src='/gif/toque.gif'
          width={100}
          height={100}
          alt='Toque'
          quality={10}
        />
      </div >
    </>
  )
}

export default Botao