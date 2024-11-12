import { motion } from "framer-motion";

export function AnimationPage() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
   <div>
      <svg width="1000" height="650" viewBox="0 0 400 400" fill="none" >
      <motion.line
        x1="200"
        y1="100"
        x2="200"
        y2="300"
        stroke="green"
        strokeWidth="5"
        variants={draw}
        initial="hidden"
        animate="visible"
        custom={1}
      />
      <motion.line
        x1="170"
        y1="200"
        x2="200"
        y2="230"
        stroke="green"
        strokeWidth="5"
        variants={draw}
        initial="hidden"
        animate="visible"
        custom={2}
      />
        <motion.circle
        cx="150"
        cy="190"
        r="20"
        stroke="lime"
        fill="green"
        strokeWidth="5"
        variants={draw}
        initial="hidden"
        animate="visible"
        custom={3}
      />
           <motion.circle
        cx="200"
        cy="100"
        r="20"
        stroke="orange"
        fill="yellow"
        strokeWidth="5"
        variants={draw}
        initial="hidden"
        animate="visible"
        custom={4}
      />
         <motion.circle
        cx="180"
        cy="140"
        r="25"
        stroke="grey"
        fill="white"
        strokeWidth="5"
        variants={draw}
        initial="hidden"
        animate="visible"
        custom={5}
      />
      <motion.circle
        cx="150"
        cy="100"
        r="27"
        stroke="grey"
        fill="white"
        strokeWidth="5"
        variants={draw}
        initial="hidden"
        animate="visible"
        custom={6}
      />
        <motion.circle
        cx="175"
        cy="60"
        r="25"
        stroke="grey"
        fill="white"
        strokeWidth="5"
        variants={draw}
        initial="hidden"
        animate="visible"
        custom={7}
      />
        <motion.circle
        cx="225"
        cy="60"
        r="27"
        stroke="grey"
        fill="white"
        strokeWidth="5"
        variants={draw}
        initial="hidden"
        animate="visible"
        custom={8}
      />
      <motion.circle
        cx="250"
        cy="100"
        r="25"
        stroke="grey"
        fill="white"
        strokeWidth="5"
        variants={draw}
        initial="hidden"
        animate="visible"
        custom={9}
      />
      <motion.circle
        cx="225"
        cy="140"
        r="25"
        stroke="grey"
        fill="white"
        strokeWidth="5"
        variants={draw}
        initial="hidden"
        animate="visible"
        custom={10}
      />
    </svg>
   </div>
  );
}
