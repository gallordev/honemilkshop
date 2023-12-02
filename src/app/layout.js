import Footer from '@/components/Footer'
import './globals.css'
import Header from '@/components/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
          {children}
      </body>
    </html>
  )
}

