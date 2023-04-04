import Layout from '@/components/layout/Layout';
import Promo from '@/components/promo/Promo';
import RecentPosts from '@/components/recent-posts/RecentPosts';
import { FC } from 'react'

const Home: FC = () => {
  return (
    <Layout>
        <Promo/>
        <RecentPosts/>
    </Layout>
  )
}

export default Home;