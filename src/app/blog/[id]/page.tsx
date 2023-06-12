import FullBlog from '@/components/screens/blog/full-blog/FullBlog';
import { GetServerSideProps, NextPage } from 'next'
import { IFullBlog } from '../page';
import { getBlogById } from '@/services/asyncActions';
import MotionPage from '@/components/animation/MotionPage';

export interface BlogFullPageProps {
    blog: IFullBlog;
}

const BlogFullPage = async ({params}: {params: {id: string}}) => {

    const { blog } = await getBlogFull(params.id);

    return (
        <MotionPage>
            <FullBlog blog={blog} />
        </MotionPage>
        
    )
}

const getBlogFull = async(id: string) => {

    const blog = await getBlogById(id);

    return {
        blog,
    };
};

export default BlogFullPage;