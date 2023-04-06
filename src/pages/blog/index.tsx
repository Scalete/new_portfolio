import Layout from '@/components/layout/Layout';
import Blog from '@/components/screens/blog/Blog';
import { NextPage } from 'next'

const BlogPage: NextPage = () => {
    return (
        <Layout>
            <Blog/>
        </Layout>
    )
}

export default BlogPage;