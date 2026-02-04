import { motion } from "framer-motion";

export function SideFloatingText() {
  return (
    <div className="absolute right-0  top-0 overflow-hidden hidden md:flex pointer-events-none z-20">
      <motion.div
        animate={{ y: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="flex flex-col gap-12 items-center"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-col gap-12">
            <span className="side-text">React Native</span>
            <span className="side-text">React</span>
            <span className="side-text">Express</span>
            <span className="side-text">Nodejs</span>
            <span className="side-text">JavaScript</span>
            <span className="side-text">Tailwind CSS</span>
            <span className="side-text">MongoDB</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
// import { motion } from "framer-motion";

// export function SideFloatingText() {
//   const skills = [
//     "React Native",
//     "React",
//     "Express",
//     "Node.js",
//     "JavaScript",
//     "Tailwind CSS",
//     "MongoDB",
//   ];

//   return (
//     <div className="absolute right-0 top-0 h-full hidden md:flex overflow-hidden pointer-events-none z-20">
//       <motion.div
//         animate={{ y: ["0%", "-50%"] }}
//         transition={{
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 2.5, // fast smooth
//           ease: "linear",
//         }}
//         className="flex flex-col gap-12 items-center"
//       >
//         {[...Array(2)].map((_, i) => (
//           <div key={i} className="flex flex-col gap-12">
//             {skills.map((skill, idx) => (
//               <span key={idx} className="side-text">
//                 {skill}
//               </span>
//             ))}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }
