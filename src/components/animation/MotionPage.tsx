import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionPageProps {
    children: ReactNode;
}

const MotionPage = ({ children }: MotionPageProps) => (
    
    <motion.div 
        initial="initial" 
        animate="animate"
        exit="exit"
        variants={{
            initial: { opacity: 0, x: 100 }, 
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -100 }
        }}
        transition={{ duration: 0.2 }}
    >
        {children}
    </motion.div>
);

export default MotionPage;