import "../styles/globals.css"; // ✅ إذا كنت داخل جذر المشروع
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollToTop";

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
};


export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        
      </head>
      <body className="antialiased">
        <Navbar />
        <ScrollTop />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
