import { ThemeProvider } from '@/hooks/ThemeProvider';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
