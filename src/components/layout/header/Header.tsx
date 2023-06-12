'use client'

import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import HeaderMobile from './HeaderMobile'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/theme/ThemeToggle'
import { routes } from '@/app/layout'

const Header: FC = () => {

    const pathname = usePathname()

    const renderRoutes = () => {
        return routes.map((item, i) => <li key={i}><Link className={`hoverUnderlineAnimation ${pathname === item.link ? styles.active: pathname.includes(item.link + '/[id]')? styles.halfActive: ''}`} href={item.link}>{item.name}</Link></li>);
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