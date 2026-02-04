import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "DSA",
];

export function VerticalSkillsMarquee() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 18, // ⏳ slow = premium feel
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-40 absolute"
        animate={controls}
        onHoverStart={() => controls.stop()} // ⏸ pause
        onHoverEnd={() =>
          controls.start({
            y: ["0%", "-50%"],
            transition: {
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            },
          })
        }
      >
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2       text-white
              text-2xl md:text-3xl lg:text-4xl
              font-bold
              tracking-wider font-mono text-center rotate-[90deg]     transition"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
