import { FC, ReactNode } from 'react'
import RecentWorkItem from './WorkItem';
import styles from './Works.module.scss'

export interface WorksTitleProps {
    heading: ReactNode;
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

const Works: FC<WorksTitleProps> = ({heading, works}) => {

    const renderWorks = () => {
        return works.map((item, i) => <li key={i}><RecentWorkItem work={item}/></li>);
    }
    
    return (
        <section className={`${styles.works}`}>
            <div className={`container ${styles.container}`}>
                {heading}
                <ul className={styles.worksWrapper}>
                    {renderWorks()}
                </ul>
            </div>
        </section>
    )
}

export default Works;