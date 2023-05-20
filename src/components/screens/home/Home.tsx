import Layout from '@/components/layout/Layout';
import Promo from '@/components/screens/home/promo/Promo';
import RecentPosts from '@/components/screens/home/recent-posts/RecentPosts';
import Works from '@/components/screens/works/Works';
import { WorksProps } from '@/pages';
import { BlogsProps } from '@/pages/blog';
import { FC } from 'react'
import styles from '../works/Works.module.scss'

const Home: FC<WorksProps & BlogsProps> = ({works, blogs}) => {

    return (
        <Layout>
            <Promo/>
            <RecentPosts blogs={blogs}/>
            <Works heading={<span className={styles.label}>Featured works</span>} works={works}/>
        </Layout>
    )
}

export default Home;