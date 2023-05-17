import { FC } from 'react'
import styles from './RecentPosts.module.scss';

const RecentPostItem: FC = () => {
    return (
        <div className={styles.recentPostItem}>
            <h3>Making a design system from scratch</h3>
            <div className={styles.recentPostItemOptions}>
                <span>12 Feb 2020</span>
                <span>Design, Pattern</span>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
    )
}

export default RecentPostItem