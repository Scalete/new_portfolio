import Layout from '@/components/layout/Layout'
import FullBlog from '@/components/screens/blog/full-blog/FullBlog';
import { GetServerSideProps, NextPage } from 'next'

const BlogFullPage: NextPage = () => {
    return (
        <Layout>
            <FullBlog />
        </Layout>
    )
}

// export const getServerSideProps: GetServerSideProps = async(context) => {
    
//     const { id } = context.params;
//     const work = await getWorkById(id);

//     return {
//         props: {
//             work,
//         }
//     };
// };

export default BlogFullPage;