import { FC } from 'react'
import RecentWorkItem from './WorkItem';
import styles from './Works.module.scss'
import { useRouter } from 'next/router';

interface WorksProps {
    title: string;
}

const Works: FC<WorksProps> = ({title}) => {
    const router = useRouter();

    const isWorksPage = () => {
        return router.pathname === '/works';
    }

    const generateHeader = () => {
        return isWorksPage() ?
        <h1>{title}</h1>
        : <span className={styles.label}>{title}</span>
    }
    
    return (
        <section className={`${styles.works} ${isWorksPage() ? styles.worksPageStyles: ''}`}>
            <div className={`container ${styles.container}`}>
                {generateHeader()}
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