import Image from 'next/image';
import { FC } from 'react'
import styles from './Works.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IWorkItemProps {
    image: string;
    title: string;
    year: string;
    categories: string[];
    text: string;
}

const WorkItem: FC<IWorkItemProps> = ({image, title, year, categories, text}) => {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        router.push(`${router.pathname}/1`);
    }

    const renderCategories = () => {
        return categories.join(', ');
    }    
    
    return (
        <div className={styles.worksItem}>
            <div className={styles.imageWrapper}>
                <Image src={image} width={246} height={180} alt="Work Item"/>
            </div>
            
            <div className={styles.worksContent}>
                <h2>{title}</h2>
                <div className={styles.options}>
                    <span className='year-change'>{year}</span><span>{renderCategories()}</span>
                </div>
                <p>{text}</p>
                <Link className='action main' href='' onClick={handleClick}>More</Link>
            </div>
        </div>
    )
}

export default WorkItem;