import Layout from '@/components/layout/Layout';
import WorkFull from '@/components/screens/works/pdp/WorkFull';
import { NextPage } from 'next';
import { FC } from 'react'

const WorkFullPage: NextPage = () => {
    return (
        <Layout>
            <WorkFull/>
        </Layout>
    )
}

export default WorkFullPage;