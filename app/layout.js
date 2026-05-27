import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/Reset.css'
import '@/styles/Tokens.css'
import '@/styles/Style.css'
import '@/styles/Theme.css'
import '@/styles/Components.css'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://theplayyears.com'),
  title: {
    default: 'Play Years | Activity cards for babies 0-12 months',
    template: '%s | Play Years',
  },
  description:
    'Co-created with early childhood experts, the Play Years™ First-Year Deck gives you research-backed ways to play with your baby. So you always know what to do—and why it matters.',
  openGraph: {
    title: 'Play Years | Activity cards for babies 0-12 months',
    description:
      'Co-created with early childhood experts, the Play Years™ First-Year Deck gives you research-backed ways to play with your baby.',
    images: ['/images/og-image.png'],
    url: 'https://theplayyears.com',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="on-light">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
