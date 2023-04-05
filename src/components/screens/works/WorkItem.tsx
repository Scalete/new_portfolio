import Image from 'next/image';
import { FC } from 'react'
import styles from './Works.module.scss'

interface IWorkItemProps {
    image: string;
    title: string;
    year: string;
    category: string;
    text: string;
}

const WorkItem: FC<IWorkItemProps> = ({image, title, year, category, text}) => {
    return (
        <div className={styles.worksItem}>
            <div className={styles.imageWrapper}>
                <Image src={image} width={246} height={180} alt="Work Item"/>
            </div>
            
            <div className={styles.worksContent}>
                <h2>{title}</h2>
                <div className={styles.options}>
                    <span>{year}</span><span>{category}</span>
                </div>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default WorkItem;