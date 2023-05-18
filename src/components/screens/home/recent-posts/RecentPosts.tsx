import Link from 'next/link';
import { FC } from 'react'
import RecentPostItem from './RecentPostItem';
import styles from './RecentPosts.module.scss';
import { BlogsProps } from '@/pages/blog';

const RecentPosts: FC<BlogsProps> = ({blogs}) => {

    const renderRecentBlogs = () => {
        return blogs.map((blog, i) => <li key={i}><RecentPostItem blog={blog}/></li>);
    }

    return (
        <section className={`${styles.recentPosts} theme-change recent-theme-bg`}>
            <div className="container">
                <div className={styles.recentPostsHeader}>
                    <span>Recent posts</span>
                    <Link className={styles.hoverUnderlineAnimation} href="/blog">View all</Link>
                </div>
                <ul className={styles.recentPostsWrapper}>
                    {renderRecentBlogs()}
                </ul>
            </div>
        </section>
    )
}

export default RecentPosts;