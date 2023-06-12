import { FC } from 'react'
import styles from './RecentPosts.module.scss';
import { BlogProps } from '@/app/blog/page';
import Link from 'next/link';

const RecentPostItem: FC<BlogProps> = ({blog}) => {
    return (
        <div className={styles.recentPostItem}>
            <h3>{blog.title}</h3>
            <div className={styles.recentPostItemOptions}>
                <span>{blog.date.split('T')[0]}</span>
                <span>{blog.categories.join(', ')}</span>
            </div>
            <p>{blog.shortDescription}</p>
            <Link className={styles.hoverUnderlineAnimation} href={`/blog/${blog._id}`}>More</Link>
        </div>
    )
}

export default RecentPostItem