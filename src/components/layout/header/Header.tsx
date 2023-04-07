import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import HeaderMobile from './HeaderMobile'
import { useRouter } from 'next/router'
import ThemeToggle from '@/components/theme/ThemeToggle'

const Header: FC = () => {

    const routes = [
        {link: '/', name: 'Main'}, 
        {link: '/works', name: 'Works'}, 
        {link: '/blog', name: 'Blog'}, 
        {link: '/contact', name: 'Contact'}
    ];

    const router = useRouter();

    const renderRoutes = () => {
        return routes.map((item, i) => <li key={i}><Link className={`${styles.hoverUnderlineAnimation} ${router.pathname == item.link ? styles.active: ''}`} href={item.link}>{item.name}</Link></li>);
    }
    
    return (
        <header className={styles.header}>
            <ThemeToggle />
            <nav className={styles.desktop}>
                <ul>
                    {renderRoutes()}
                </ul>
            </nav>
            <HeaderMobile/>
        </header>
    )
}

export default Header;