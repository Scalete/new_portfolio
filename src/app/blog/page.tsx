import MotionPage from '@/components/animation/MotionPage';
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

export interface BlogProps {
    blog: BlogItem;
}

const BlogPage = async () => {

    const { blogs } = await getAllBlogsData();

    return (
        <MotionPage>
            <Blog blogs={blogs}/>
        </MotionPage>
    )
}

async function getAllBlogsData() {

    const blogs = await getAllBlogs();
    return {
        blogs,
    };
};

export default BlogPage;