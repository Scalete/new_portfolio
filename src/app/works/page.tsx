import MotionPage from '@/components/animation/MotionPage';
import Works from '@/components/screens/works/Works';
import { getAllWorks } from '@/services/asyncActions';

const WorksPage = async () => {
    const { works } = await getAllWorksData();

    return (
        <MotionPage>
            <Works heading={<h1>Works</h1>} works={works}/>
        </MotionPage>
    )
}

async function getAllWorksData() {

    const works = await getAllWorks();

    return {
        works
    };
};

export default WorksPage;