import Promo from '@/components/screens/home/promo/Promo';
import RecentPosts from '@/components/screens/home/recent-posts/RecentPosts';
import Works from '@/components/screens/works/Works';
import { FC } from 'react'
import styles from '../works/Works.module.scss'
import { WorksProps } from '@/app/page';
import { BlogsProps } from '@/app/blog/page';

const Home: FC<WorksProps & BlogsProps> = ({works, blogs}) => {

    return (
        <>
            <Promo/>
            <RecentPosts blogs={blogs}/>
            <Works heading={<span className={styles.label}>Featured works</span>} works={works}/>
        </>
    )
}

export default Home;