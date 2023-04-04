import { FC } from 'react'
import RecentWorkItem from './WorkItem';
import styles from './Works.module.scss'

const Works: FC = () => {
    return (
        <section className={styles.works}>
            <div className="container">
                <span className={styles.label}>Featured works</span>
                <ul className={styles.worksWrapper}>
                    <li><RecentWorkItem image="/works/template.jpg" title="Designing Dashboards" year="2020" category="Illustration" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/></li>
                    <li><RecentWorkItem image="/works/template.jpg" title="Vibrant Portraits of 2020" year="2020" category="Illustration" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/></li>
                    <li><RecentWorkItem image="/works/template.jpg" title="36 Days of Malayalam type" year="2020" category="Illustration" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/></li>
                </ul>
            </div>
        </section>
    )
}

export default Works;