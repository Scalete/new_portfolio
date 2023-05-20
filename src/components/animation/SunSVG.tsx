import { motion } from 'framer-motion';

//Generated with chatgpt, thank you AI
const SunSVG = () => {
    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sun"
            animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1],
            }}
            transition={{ 
                duration: 4,
                repeat: Infinity,
            }}
        >
            <motion.circle cx="12" cy="12" r="5"/>
            <motion.path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </motion.svg>
    )
}

export default SunSVG;