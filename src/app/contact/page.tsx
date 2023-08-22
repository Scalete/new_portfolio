import MotionPage from '@/components/animation/MotionPage';
import Contact from '@/components/screens/contact/Contact';
import { NextPage } from 'next'

export const metadata = {
    title: 'Contact',
    description: 'Contact page when you can send message',
}

const ContactPage: NextPage = () => {
    return (
        <MotionPage>
            <Contact/>
        </MotionPage>
    )
}

export default ContactPage;