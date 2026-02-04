import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Target, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Well-structured, readable, and reusable code following best practices',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Hands-on practice with Data Structures & Algorithms',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quickly adapts to new tools, frameworks, and technologies',
  },
  {
    icon: Target,
    title: 'Goal Oriented',
    description: 'Focused on building real-world, impactful applications',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="container mx-auto" ref={ref}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">01. About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <span className="text-8xl font-bold text-gradient">JKR</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl blur-xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-2xl blur-xl" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a <span className="text-foreground font-semibold">Computer Science undergraduate </span> 
              and Full-Stack Developer with hands-on experience building modern web applications. 
              I primarily work with 
              <span className="text-primary font-semibold"> React</span>, 
              <span className="text-primary font-semibold"> JavaScript</span>, 
              <span className="text-primary font-semibold"> Node.js</span>, and 
              <span className="text-primary font-semibold"> Express.js</span>, 
              along with a strong foundation in 
              <span className="text-primary font-semibold"> Data Structures & Algorithms</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently in my <span className="text-foreground font-semibold">5th semester of B.Tech</span>, 
              I enjoy working across the stack—from building responsive user interfaces to creating 
              RESTful APIs—while continuously strengthening my core computer science fundamentals.
            </p>

            <p className="text-sm text-muted-foreground">
              Tech Stack: React, JavaScript, Node.js, Express, C++, Tailwind CSS, Git, GitHub
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <item.icon className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
