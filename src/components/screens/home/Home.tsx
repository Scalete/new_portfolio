import Layout from '@/components/layout/Layout';
import Promo from '@/components/promo/Promo';
import RecentPosts from '@/components/recent-posts/RecentPosts';
import Works from '@/components/screens/works/Works';
import { WorksProps } from '@/pages';
import { FC } from 'react'

const Home: FC<WorksProps> = ({works}) => {
    
    return (
        <Layout>
            <Promo/>
            <RecentPosts/>
            <Works title="Featured works" works={works}/>
        </Layout>
    )
}

export default Home;