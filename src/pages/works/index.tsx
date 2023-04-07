import { NextPage } from 'next'
import Works from '@/components/screens/works/Works';
import Layout from '@/components/layout/Layout';
import { WorksProps } from '..';
import { getAllWorks } from '@/services/asyncActions';

const WorksPage: NextPage<WorksProps> = ({works}) => {
    return (
        <Layout>
            <Works title='Works' works={works}/>
        </Layout>
    )
}

export async function getServerSideProps() {

    const works = await getAllWorks();
    return {
        props: {
            works,
        },
    };
};

export default WorksPage;