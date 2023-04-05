import Layout from '@/components/layout/Layout';
import Promo from '@/components/promo/Promo';
import RecentPosts from '@/components/recent-posts/RecentPosts';
import Works from '@/components/screens/works/Works';
import { FC } from 'react'

const Home: FC = () => {
  return (
    <Layout>
        <Promo/>
        <RecentPosts/>
        <Works title="Featured works"/>
    </Layout>
  )
}

export default Home;