import Layout from '@/components/layout/Layout';
import Promo from '@/components/promo/Promo';
import Image from 'next/image';
import { FC } from 'react'

const Home: FC = () => {
  return (
    <Layout>
        <Promo/>
    </Layout>
  )
}

export default Home;