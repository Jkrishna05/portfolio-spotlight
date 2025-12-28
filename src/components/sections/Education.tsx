import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Code, Trophy } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Your University Name',
    duration: '2022 - 2026',
    description: 'Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Management, Computer Networks',
    icon: GraduationCap,
  },
];

const achievements = [
  {
    title: 'LeetCode',
    description: '500+ problems solved, Top 15% globally',
    icon: Code,
  },
  {
    title: 'CodeChef',
    description: '4-star coder, Rating: 1850+',
    icon: Trophy,
  },
  {
    title: 'Hackathon Winner',
    description: 'First place in University Hackathon 2023',
    icon: Award,
  },
];

const certifications = [
  'Meta Front-End Developer Certificate',
  'Oracle Certified Java Programmer',
  'AWS Cloud Practitioner',
  'freeCodeCamp Full Stack Certification',
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding bg-card relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">04. Background</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education & Certifications */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary" />
                Education
              </h3>
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 rounded-2xl bg-gradient-card border border-border"
                >
                  <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                  <p className="text-primary font-medium mt-1">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mt-1">{edu.duration}</p>
                  <p className="text-muted-foreground mt-4 text-sm">{edu.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-primary" />
                Certifications
              </h3>
              <div className="p-6 rounded-2xl bg-gradient-card border border-border">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={cert} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-primary" />
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Trophy className="text-primary" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{achievement.title}</h4>
                      <p className="text-muted-foreground mt-1">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              {[
                { value: '500+', label: 'Problems Solved' },
                { value: '10+', label: 'Projects Built' },
                { value: '5+', label: 'Certifications' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-gradient-card border border-border text-center"
                >
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
