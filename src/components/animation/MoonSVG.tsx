import { motion } from 'framer-motion';

//Generated with chatgpt, thank you AI
const MoonSVG = () => {
  return (
    <motion.svg className="moon" id="i-moon" xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 32 32" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      animate={{
        rotate: [0, 15, -15, 0],
        fill: ["#fff", "#000", "#fff"],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    >
      <motion.path d="M14 2C9 2 3 7 3 15s6 14 14 14 13-6 13-11C19 25 7 13 14 2Z"/>
    </motion.svg>
  )
}

export default MoonSVG;