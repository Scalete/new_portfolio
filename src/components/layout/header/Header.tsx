import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import HeaderMobile from './HeaderMobile'

const Header: FC = () => {
    
    return (
        <header className={styles.header}>
            <nav className={styles.desktop}>
                <ul>
                    <li><Link className={styles.hoverUnderlineAnimation} href="/works">Works</Link></li>
                    <li><Link className={styles.hoverUnderlineAnimation} href="/blog">Blog</Link></li>
                    <li><Link className={styles.hoverUnderlineAnimation} href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <HeaderMobile/>
        </header>
    )
}

export default Header;