import Layout from '@/components/layout/Layout';
import { WorkItem } from '@/components/screens/works/Works';
import WorkFull from '@/components/screens/works/pdp/WorkFull';
import { getWorkById } from '@/services/asyncActions';
import { GetServerSideProps, NextPage } from 'next';

export interface FullWork extends WorkItem {
    headers: {
        title: string,
        description: string,
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
    
    const id = context.params?.id;
    
    if (!id || typeof id !== 'string') {
        return {
            notFound: true,
        }
    }

    const work = await getWorkById(id);

    if (!work) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            work,
        }
    };
};

export default WorkFullPage;