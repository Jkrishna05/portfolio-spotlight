import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Removed unused imports to reduce bundle size
import { InteractiveBlob } from "../InteractiveBlob"
// FloatingRing and VerticalSkillsMarquee were unused and removed
import { SideFloatingText } from "@/components/SideFloatingText";



export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* <FloatingShapes /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center  mx-auto">

          {/* LEFT: Text Content */}


          <div className="text-center lg:text-left bg-slate-0">
            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6">
                Full-Stack Developer • React • Node.js • DSA
              </span> */}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi, I’m <span className="text-gradient">Jay Krishna</span>
            </motion.h1>

            {/* One-line Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 mx-auto lg:mx-0"
            >
              Full-Stack Developer building scalable web applications with React,
              Node.js, and strong DSA fundamentals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">View Projects</a>
              </Button>

              <Button variant="glass" size="xl" asChild>
                <a
                  href="/Jay_Krishna_Rout_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>

              <Button variant="glass" size="xl" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a
                  href="https://github.com/Jkrishna05"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a
                  href="https://linkedin.com/in/jay-krishna-rout-711182358"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>

          </div>

          {/* RIGHT: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-20 w-full relative"
          >
            {/* Blob / image container (responsive) */}
            <div className="w-full flex justify-center items-center">
              <div className="relative w-56 h-96 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[34rem] lg:h-[34rem]">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl w-full h-full" />
                <div className="relative w-full h-full">
                  <InteractiveBlob />
                </div>
              </div>
            </div>

            <SideFloatingText />
            {/* SideFloatingText is absolute within this relative column */}
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm font-mono">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
} 