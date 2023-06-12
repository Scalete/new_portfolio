import { getRankedWorks, getRecentBlogs } from '@/services/asyncActions';
import Home from '@/components/screens/home/Home';
import { WorkItem } from '@/components/screens/works/Works';
import { BlogsProps } from './blog/page';
import MotionPage from '@/components/animation/MotionPage';

export interface WorksProps {
    works: WorkItem[];
}

const HomePage = async () => {

    const {works, blogs}: WorksProps & BlogsProps = await getWorksAndBlogs();

    return (
        <MotionPage>
            <Home works={works} blogs={blogs}/>
        </MotionPage>
    )
}

async function getWorksAndBlogs() {

    const worksPromise = getRankedWorks();
    const blogsPromise = getRecentBlogs();

    const [works, blogs] = await Promise.all([worksPromise, blogsPromise])
    
    return {
        works, blogs
    };
}

export default HomePage;