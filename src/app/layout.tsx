import '../styles/globals.css'
import { hagridRegular } from '@/styles/fonts'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Portifolio Lívia Lima',
  description: 'Site Portifólio criado com NextJs',
  viewport: {
    width: 'device-width',
  },
  icons:  {
    icon: 'public/favicon.ico'
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={hagridRegular.className}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
