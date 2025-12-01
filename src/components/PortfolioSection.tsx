import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Play, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with React, Node.js, and Stripe integration",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "from-neon-cyan to-neon-blue",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 2,
    title: "Brand Promo Video",
    category: "Video Editing",
    description: "Cinematic brand video with motion graphics and sound design",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=60",
    tags: ["Premiere Pro", "After Effects", "Cinema 4D"],
    color: "from-neon-magenta to-neon-purple",
    liveUrl: "https://drive.google.com/drive/folders/1miCf-wiKLRkXbJ1E3XAm-ybSHeo7PkVO?usp=sharing",
    sourceUrl: null,
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard with real-time data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    tags: ["Figma", "React", "D3.js", "TypeScript"],
    color: "from-neon-purple to-neon-cyan",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 4,
    title: "Music Video Production",
    category: "Video Editing",
    description: "High-energy music video with visual effects and color grading",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60",
    tags: ["DaVinci Resolve", "After Effects", "Color Grading"],
    color: "from-neon-blue to-neon-magenta",
    liveUrl: "https://drive.google.com/drive/folders/1miCf-wiKLRkXbJ1E3XAm-ybSHeo7PkVO?usp=sharing",
    sourceUrl: null,
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Web Development",
    description: "Creative portfolio with 3D animations and interactive elements",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=60",
    tags: ["Three.js", "GSAP", "React", "WebGL"],
    color: "from-neon-cyan to-neon-magenta",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: 6,
    title: "Mobile App Design",
    category: "UI/UX Design",
    description: "Fitness tracking app with gamification elements",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
    tags: ["Figma", "Prototyping", "User Research"],
    color: "from-neon-purple to-neon-blue",
    liveUrl: "#",
    sourceUrl: "#",
  },
];

const categories = ["All", "Web Development", "Video Editing", "UI/UX Design"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-primary">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Explore my work – each project is a piece of the puzzle
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-heading text-sm uppercase tracking-wider rounded-full transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative cursor-pointer ${
                  index % 3 === 0 ? "puzzle-card" : index % 3 === 1 ? "puzzle-card-alt" : ""
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-xl bg-card aspect-[4/3]">
                  {/* Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} mix-blend-multiply`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 0.8 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content Overlay */}
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="font-heading text-xs uppercase tracking-wider text-foreground/80 mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-heading bg-background/30 backdrop-blur-sm rounded text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Border Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl border-2 border-transparent`}
                    animate={{
                      borderColor: hoveredProject === project.id 
                        ? "hsl(var(--primary) / 0.5)" 
                        : "transparent",
                      boxShadow: hoveredProject === project.id
                        ? "0 0 30px hsl(var(--primary) / 0.3)"
                        : "none",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="relative glass-strong rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <X size={20} />
              </button>
              
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              
              <div className="p-6 md:p-8">
                <span className="font-heading text-xs uppercase tracking-wider text-primary">
                  {selectedProject.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-foreground">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mt-4">
                  {selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-heading bg-muted rounded-full text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      {selectedProject.category === "Video Editing" ? "View Portfolio" : "View Live"}
                    </motion.a>
                  )}
                  {selectedProject.sourceUrl && (
                    <motion.a
                      href={selectedProject.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-heading text-sm uppercase tracking-wider rounded-lg hover:bg-primary/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Source
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
