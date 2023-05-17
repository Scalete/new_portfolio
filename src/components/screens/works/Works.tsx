import { FC } from 'react'
import RecentWorkItem from './WorkItem';
import styles from './Works.module.scss'
import { useRouter } from 'next/router';

interface WorksTitleProps {
    title: string;
    works: WorkItem[];
}

export interface WorkItem {
    _id: string;
    title: string;
    shortDescription: string;
    smallImg: string;
    categories: string[];
    link: string;
    rank: number;
    date: string;
}

const Works: FC<WorksTitleProps> = ({title, works}) => {
    const router = useRouter();

    const isWorksPage = () => {
        return router.pathname === '/works';
    }

    const generateHeader = () => {
        return isWorksPage() ?
        <h1>{title}</h1>
        : <span className={styles.label}>{title}</span>
    }

    const renderWorks = () => {
        return works.map((item, i) => <li key={i}><RecentWorkItem work={item}/></li>);
    }
    
    return (
        <section className={`${styles.works} ${isWorksPage() ? styles.worksPageStyles: ''}`}>
            <div className={`container ${styles.container}`}>
                {generateHeader()}
                <ul className={styles.worksWrapper}>
                    {renderWorks()}
                </ul>
            </div>
        </section>
    )
}

export default Works;