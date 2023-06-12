import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import styles from './Header.module.scss'
import { routes } from '@/app/layout';

const HeaderMobile: FC = () => {
    const [isOpen, setOpen] = useState(false);

    const handleIsOpen = () => {
        setOpen(!isOpen);
    };
    
    const closeSideBar = () => {
        setOpen(false);
    };

    const renderRoutes = () => {
        return routes.map((item, i) => <li key={i}><Link className="menu-item" href={item.link} onClick={closeSideBar}>{item.name}</Link></li>);
    }

    return (
        <div id="outer-container" className={styles.mobile}>
            <Menu right
                  isOpen={isOpen} 
                  onOpen={handleIsOpen} 
                  onClose={handleIsOpen} 
                  bodyClassName={ "disable-scroll" }
                  customBurgerIcon={<svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h30M0 10h30M0 19h30" stroke="#21243D" strokeWidth="1.6"/></svg>}
            >
                {renderRoutes()}
            </Menu>
        </div>
        
    )
}

export default HeaderMobile;