import Image from 'next/image';
import { FC } from 'react'
import styles from './Works.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { WorkItem } from './Works';

interface IWorkItemProps {
    work: WorkItem;
}

const WorkItem: FC<IWorkItemProps> = ({work}) => {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        router.push(`/works/${work._id}`);
    }
    
    return (
        <div className={styles.worksItem}>
            <div className={styles.imageWrapper}>
                <Image src={work.smallImg} width={246} height={180} alt="Work Item"/>
            </div>
            
            <div className={styles.worksContent}>
                <h2>{work.title}</h2>
                <div className={styles.options}>
                    <span className='year-change'>{work.date.slice(0, 4)}</span><span>{work.categories.join(', ')}</span>
                </div>
                <p>{work.shortDescription}</p>
                <Link className='action main' href='' onClick={handleClick}>More</Link>
            </div>
        </div>
    )
}

export default WorkItem;