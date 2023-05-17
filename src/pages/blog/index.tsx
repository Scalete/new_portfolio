import Layout from '@/components/layout/Layout';
import Blog from '@/components/screens/blog/Blog';
import { getAllBlogs } from '@/services/asyncActions';
import { NextPage } from 'next'

export interface BlogItem {
    _id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    descriptionImg: string;
    categories: string[];
    date: string;
}

export interface IFullBlog extends BlogItem {
    headers: {
        title: string,
        description: string;
    }[]
}

export interface BlogsProps {
    blogs: IFullBlog[];
}

const BlogPage: NextPage<BlogsProps> = ({blogs}) => {
    return (
        <Layout>
            <Blog blogs={blogs}/>
        </Layout>
    )
}

export async function getServerSideProps() {

    const blogs = await getAllBlogs();
    return {
        props: {
            blogs,
        },
    };
};

export default BlogPage;