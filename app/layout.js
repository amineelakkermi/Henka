// app/layout.js
import "../styles/globals.css"
import ClientWrapper from "@/components/ClientWrapper"

export const metadata = {
  title: "Henka",
  description: "نحن مكتب استثمار عائلي (Family Office) نعمل على تنمية ثروات العائلة برؤية استراتيجية طويلة المدى. نُترجم القيم العائلية إلى قرارات استثمارية متزنة، تُوازن بين الطموح والاتزان، وتُحقق الاستدامة عبر الأجيال.",
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
      <body className="antialiased bg-black text-white">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}
