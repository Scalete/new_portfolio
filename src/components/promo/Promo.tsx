import Image from 'next/image';
import { FC } from 'react'
import styles from './Promo.module.scss'

const Promo: FC = () => {
  return (
    <section className={styles.promo}>
        <div className={`container ${styles.flex}`}>
            <div className={styles.text}>
                <h1>Hi, I am Maxim, Web Developer</h1>
                <p>I am fond of web development and make different sites, landing pages on different technologies. If you want to cooperate with me - write me a letter and we will start the project right now!</p>
                <button className="action main">Download Resume</button>
            </div>
            <div className={styles.image}>
                <Image src="/promo-img.jpg" alt="Main Image" width={243} height={243}/>
                <div className={styles.effect}></div>
            </div>
        </div>
    </section>
  )
}

export default Promo;