import Layout from '@/components/layout/Layout';
import Contact from '@/components/screens/contact/Contact';
import { NextPage } from 'next'

const ContactPage: NextPage = () => {
    return (
        <Layout>
            <Contact/>
        </Layout>
    )
}

export default ContactPage;