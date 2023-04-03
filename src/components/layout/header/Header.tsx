import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import HeaderMobile from './HeaderMobile'

const Header: FC = () => {
    
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.desktop}>
                    <ul>
                        <li><Link href="/works">Works</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <HeaderMobile/>
            </div>
        </header>
    )
}

export default Header;