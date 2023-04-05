import { NextPage } from 'next'
import Works from '@/components/screens/works/Works';
import Layout from '@/components/layout/Layout';

const WorksPage: NextPage = () => {
    return (
        <Layout>
            <Works title='Works'/>
        </Layout>
    )
}

export default WorksPage;