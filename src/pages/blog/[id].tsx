import Layout from '@/components/layout/Layout'
import FullBlog from '@/components/screens/blog/full-blog/FullBlog';
import { GetServerSideProps, NextPage } from 'next'
import { IFullBlog } from '.';
import { getBlogById } from '@/services/asyncActions';

export interface BlogFullPageProps {
    blog: IFullBlog;
}

const BlogFullPage: NextPage<BlogFullPageProps> = ({blog}) => {
    return (
        <Layout>
            <FullBlog blog={blog} />
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

    const blog = await getBlogById(id);

    if (!blog) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            blog,
        }
    };
};

export default BlogFullPage;