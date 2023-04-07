import { getRankedWorks } from '@/services/asyncActions';
import Home from '@/components/screens/home/Home';
import { WorkItem } from '@/components/screens/works/Works';
import axios from 'axios';
import { NextPage } from 'next'

export interface WorksProps {
    works: WorkItem[];
}

const HomePage: NextPage<WorksProps> = ({works}) => {
  return <Home works={works}/>
}

export async function getServerSideProps() {

    const works = await getRankedWorks();
    return {
        props: {
            works,
        },
    };
}

export default HomePage;