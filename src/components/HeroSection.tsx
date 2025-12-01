import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FloatingElement from "./FloatingElement";

const HeroSection = () => {
  const skills = ["React", "TypeScript", "Node.js", "Premiere Pro", "After Effects", "Figma"];
  const funFacts = ["☕ Coffee Addict", "🎮 Gamer", "🌙 Night Owl", "🚀 Always Learning"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-magenta/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {skills.map((skill, index) => (
          <FloatingElement
            key={skill}
            text={skill}
            index={index}
            type="skill"
            total={skills.length}
          />
        ))}
        {funFacts.map((fact, index) => (
          <FloatingElement
            key={fact}
            text={fact}
            index={index}
            type="fact"
            total={funFacts.length}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="font-heading text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to the digital realm
          </motion.p>
          
          <motion.h1
            className="font-display text-4xl md:text-6xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-gradient glow-text mt-2">Prafull</span>
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="font-heading text-lg md:text-2xl text-muted-foreground">
              Web Developer
            </span>
            <span className="text-neon-magenta text-2xl animate-pulse">×</span>
            <span className="font-heading text-lg md:text-2xl text-muted-foreground">
              Video Editor
            </span>
          </motion.div>

          <motion.p
            className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Crafting stunning digital experiences that blend creativity with technology.
            Welcome to my digital puzzle – explore, interact, and discover.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#portfolio"
              className="group relative px-8 py-4 font-heading uppercase tracking-wider text-sm overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta" />
              <span className="absolute inset-[2px] bg-background transition-all duration-300 group-hover:bg-transparent" />
              <span className="relative text-foreground group-hover:text-background transition-colors">
                View My Work
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 font-heading uppercase tracking-wider text-sm border border-primary/50 text-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-heading text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
