import { ThemeProvider } from "@/hooks/ThemeProvider"
import { AnimatePresence, motion } from "framer-motion"
import router from "next/navigation"
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.scss'
import Header from "@/components/layout/header/Header";
import MotionPage from "@/components/animation/MotionPage";
import Footer from "@/components/layout/footer/Footer";
import ToastContainerWrapper from "@/components/layout/ToastContainerWrapper";

export const metadata = {
  title: 'Home',
  description: 'Home page with main info',
}

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
        <html lang="en">
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
