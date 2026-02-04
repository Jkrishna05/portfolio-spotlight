import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  Frontend: [
    'React',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'HTML',
    'CSS',
    'Next.js',
  ],
  Backend: [
    'Node.js',
    'Express.js',
    'REST APIs',
    'MongoDB',
    'PostgreSQL',
  ],
  DSA: [
    'Java',
    'Data Structures',
    'Algorithms',
    'Problem Solving',
  ],
  Tools: [
    'Git',
    'GitHub',
    'Linux',
    'Docker',
    'VS Code',
    'Vercel',
  ],
};

function SkillChip({ skill, delay }: { skill: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="px-4 py-2 rounded-full border border-border bg-background
                 text-sm font-medium text-foreground
                 hover:border-primary hover:text-primary
                 transition-colors cursor-default"
    >
      {skill}
    </motion.span>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-card">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">02. Skills</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <SkillChip
                    key={skill}
                    skill={skill}
                    delay={0.2 + i * 0.03}
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
