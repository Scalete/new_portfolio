import Layout from '@/components/layout/Layout';
import { WorkItem } from '@/components/screens/works/Works';
import WorkFull from '@/components/screens/works/pdp/WorkFull';
import { getWorkById } from '@/services/asyncActions';
import { GetServerSideProps, NextPage } from 'next';

export interface FullWork extends WorkItem {
    headers: {
        title: string,
        subheaders: {
            title: string;
            description: string;
            images: string[];
        }[]
    }[]
}

export interface WorkFullPageProps {
    work: FullWork;
}

const WorkFullPage: NextPage<WorkFullPageProps> = ({ work }) => {
    return (
        <Layout>
            <WorkFull work={work}/>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
    
    const { id } = context.params;
    const work = await getWorkById(id);

    return {
        props: {
            work,
        }
    };
};

export default WorkFullPage;