import { ThemeProvider } from "@/hooks/ThemeProvider"
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.scss'
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ToastContainerWrapper from "@/components/layout/ToastContainerWrapper";
import { Heebo } from 'next/font/google'

export const metadata = {
  title: 'Home',
  description: 'Home page with main info',
}

const heebo = Heebo({
    subsets: ['latin'],
    display: 'swap',
})

export const routes = [
    {link: '/', name: 'Main'}, 
    {link: '/works', name: 'Works'}, 
    {link: '/blog', name: 'Blog'}, 
    {link: '/contact', name: 'Contact'}
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    
    return (
        <html lang="en" className={heebo.className}>
            <body>
                <ThemeProvider>
                    <Header/>
                        <main>
                            {children}
                        </main>
                        <ToastContainerWrapper/>
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>
    )
}
