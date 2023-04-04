import Link from 'next/link';
import { FC } from 'react'
import RecentPostItem from './RecentPostItem';
import styles from './RecentPosts.module.scss';

const RecentPosts: FC = () => {
    return (
        <section className={styles.recentPosts}>
            <div className="container">
                <div className={styles.recentPostsHeader}>
                    <span>Recent posts</span>
                    <Link href="/blog">View all</Link>
                </div>
                <ul className={styles.recentPostsWrapper}>
                    <li><RecentPostItem /></li>
                    <li><RecentPostItem /></li>
                </ul>
            </div>
        </section>
    )
}

export default RecentPosts;