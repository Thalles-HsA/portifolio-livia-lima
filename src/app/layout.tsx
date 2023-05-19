import '../styles/globals.css'
import { hagridRegular } from '@/styles/fonts'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Portifólio Lívia Lima',
  description: 'Site Portifólio criado com NextJs',
  viewport: {
    minwidth: 'device-width',
    initialScale: 1,
    maximumScale: 1,

  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={hagridRegular.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
