import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import prafullPhoto from "@/assets/prafull-photo.jpg";

const skills = [
  { name: "Python (Learning)", level: 30, color: "from-neon-purple to-neon-blue" },
  { name: "HTML", level: 100, color: "from-neon-cyan to-neon-blue" },
  { name: "CSS", level: 88, color: "from-neon-blue to-neon-purple" },
  { name: "JavaScript", level: 60, color: "from-neon-purple to-neon-magenta" },
  { name: "Video Editing", level: 80, color: "from-neon-magenta to-neon-cyan" },
  { name: "UI/UX Design", level: 80, color: "from-neon-cyan to-neon-purple" },
];

const timeline = [
  { year: "2022", title: "Started Learning Video Editing", description: "Began exploring video editing tools and techniques" },
  { year: "2024", title: "Started Web Development", description: "Began my journey with HTML, CSS, and JavaScript" },
  { year: "2024", title: "PrafullX WebStudio", description: "Launched my own creative studio brand" },
  { year: "2025+", title: "Growing & Learning", description: "Expanding skills in web development and creative content" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-primary">About Me</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            The <span className="text-gradient">Story</span> Behind The Code
          </h2>
        </motion.div>

        {/* Photo Section */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Outer Glow Ring */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple opacity-60 blur-xl"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            
            {/* Neon Border */}
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Photo Container */}
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-background"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={prafullPhoto}
                alt="Prafull - Web Developer & Video Editor"
                className="w-full h-full object-cover object-top"
              />
              
              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
            
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/60"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Bio & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 md:p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a second-year student at <span className="text-primary">Atharva University, Mumbai</span>, and a{" "}
                <span className="text-secondary">Frontend Web Developer</span> with experience in building 
                responsive and user-friendly web interfaces. I enjoy creating clean designs and bringing ideas to life through code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm learning <span className="text-primary">Python</span> and developing a strong interest 
                in <span className="text-secondary">AI & Machine Learning</span> to expand my technical skills. I believe 
                in continuous learning and aim to combine frontend development with future-focused technologies.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative pl-12 pb-8 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-muted border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="font-display text-xs text-primary">{item.year}</span>
                  <h4 className="font-heading text-lg font-semibold text-foreground mt-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-heading text-xl font-semibold mb-8 text-foreground">
              Technical <span className="text-gradient">Skills</span>
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-heading text-sm text-foreground">{skill.name}</span>
                    <span className="font-display text-xs text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {[
                { value: "10+", label: "Projects" },
                { value: "5+", label: "Clients" },
                { value: "1+", label: "Years" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.2)" }}
                >
                  <span className="font-display text-2xl md:text-3xl font-bold text-gradient">{stat.value}</span>
                  <p className="font-heading text-xs text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
