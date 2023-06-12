import MotionPage from '@/components/animation/MotionPage';
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

const WorkFullPage = async({ params }: { params: { id: string } }) => {

    const { work } = await getWorkFull(params.id);

    return (
        <MotionPage>
            <WorkFull work={work}/>
        </MotionPage>
        
    )
}

const getWorkFull = async(id: string) => {

    const work = await getWorkById(id);

    return {
        work
    };
};

export default WorkFullPage;