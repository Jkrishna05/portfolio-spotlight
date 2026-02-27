import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  Frontend: [
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
  ],
  "Programming & Problem Solving": [
    "Java",
    "C++",
    "Data Structures",
    "Algorithms",
    "Problem Solving",
  ],
  Tools: [
    "Git",
    "GitHub",
    "Linux",
    "Docker",
    "VS Code",
    "Vercel",
  ],
};

function SkillChip({
  skill,
  delay,
  isInView,
}: {
  skill: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay }}
      className="px-4 py-2 rounded-full border border-border bg-background
                 text-sm font-medium text-foreground
                 hover:border-primary hover:text-primary
                 hover:scale-105
                 transition-all duration-200 cursor-default"
    >
      {skill}
    </motion.span>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card">
      <div className="container mx-auto" ref={ref}>
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">
            02. Skills
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A combination of modern web technologies and strong computer science
            fundamentals that I use to build scalable, efficient, and
            production-ready applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-border 
                         bg-background/50 backdrop-blur-sm
                         hover:border-primary/40 
                         transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <SkillChip
                    key={skill}
                    skill={skill}
                    delay={0.2 + i * 0.03}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}