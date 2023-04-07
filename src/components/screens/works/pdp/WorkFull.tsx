import { FC } from 'react'
import styles from './WorkFull.module.scss';
import Image from 'next/image';

const WorkFull: FC = () => {
    return (
        <section className={styles.fullPage}>
            <div className="container">
                <div className={styles.header}>
                    <h1>Designing Dashboards with usability in mind</h1>
                    <div className={styles.options}>
                        <span>2020</span>
                        <span>Dashboard, User Experience Design</span>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <Image src='/works/full-template.jpg' width={681} height={460} alt="Work Item"/>
                </div>
                <ul className={styles.main}>
                    <li className={styles.mainHeading}>
                        <h2>Heading 1</h2>
                        <ul className={styles.mainHeadingItem}>
                            <li>
                                <h3>Heading 2</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                <Image src='/works/full-template.jpg' width={681} height={460} alt="Work Item"/>
                                <Image src='/works/full-template.jpg' width={681} height={460} alt="Work Item"/>
                            </li>
                            
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default WorkFull;