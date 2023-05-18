import { getRankedWorks, getRecentBlogs } from '@/services/asyncActions';
import Home from '@/components/screens/home/Home';
import { WorkItem } from '@/components/screens/works/Works';
import { NextPage } from 'next'
import { BlogsProps } from './blog';

export interface WorksProps {
    works: WorkItem[];
}

const HomePage: NextPage<WorksProps & BlogsProps> = ({works, blogs}) => {
  return <Home works={works} blogs={blogs}/>
}

export async function getServerSideProps() {

    const works = await getRankedWorks();
    const blogs = await getRecentBlogs();
    
    return {
        props: {
            works,
            blogs
        },
    };
}

export default HomePage;