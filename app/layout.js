// app/layout.js
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollTop from "@/components/ScrollToTop"
import ClientWrapper from "@/components/ClientWrapper"

export const metadata = {
  title: "Henka",
  description: "",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '16x16 32x32 48x48 64x64'
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head />
      <body className="antialiased bg-black text-white">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}
