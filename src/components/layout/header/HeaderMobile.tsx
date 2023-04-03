import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import styles from './Header.module.scss'

const HeaderMobile: FC = () => {
    const [isOpen, setOpen] = useState(false);

    const handleIsOpen = () => {
        setOpen(!isOpen);
    };
    
    const closeSideBar = () => {
        setOpen(false);
    };

    return (
        <div id="outer-container" className={styles.mobile}>
            <Menu right
                  isOpen={isOpen} 
                  onOpen={handleIsOpen} 
                  onClose={handleIsOpen} 
                  customBurgerIcon={<Image width={30} height={18} src="/burger.svg" alt="Menu" />}
            >
                <Link className="menu-item" href="/works" onClick={closeSideBar}>Works</Link>
                <Link className="menu-item" href="/blog" onClick={closeSideBar}>Blog</Link>
                <Link className="menu-item" href="/contact" onClick={closeSideBar}>Contact</Link>
            </Menu>
        </div>
        
    )
}

export default HeaderMobile;