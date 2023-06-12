import MotionPage from '@/components/animation/MotionPage';
import Contact from '@/components/screens/contact/Contact';
import { NextPage } from 'next'

const ContactPage: NextPage = () => {
    return (
        <MotionPage>
            <Contact/>
        </MotionPage>
    )
}

export default ContactPage;