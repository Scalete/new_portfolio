import { FC, PropsWithChildren, useEffect } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { ToastContainer } from 'react-toastify';
import classnames from 'classnames';
import { useTheme } from '@/hooks/ThemeProvider';

export const routes = [
    {link: '/', name: 'Main'}, 
    {link: '/works', name: 'Works'}, 
    {link: '/blog', name: 'Blog'}, 
    {link: '/contact', name: 'Contact'}
];

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {

    const { theme } = useTheme();

    useEffect(() => {
        document.body.className = classnames(`${theme}-theme`);
    }, [theme]);

    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <ToastContainer position="bottom-right" />
            <Footer/>
        </>
    )
}

export default Layout