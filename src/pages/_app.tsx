import { ThemeProvider } from '@/hooks/ThemeProvider';
import { fixTimeoutTransition } from '@/services/animationHotfix';
import '@/styles/globals.scss'
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps, router }: AppProps) {
    fixTimeoutTransition(300);
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={router.route}
            >
                <ThemeProvider>
                    <Component {...pageProps} key={router.route}/>
                </ThemeProvider>
            </motion.div>
        </AnimatePresence>
    )
}
