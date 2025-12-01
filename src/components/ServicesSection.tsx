import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Code, Video, Palette, Sparkles, ChevronRight } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Code,
    title: "Web Development",
    shortDesc: "Modern, responsive websites & web apps",
    fullDesc: "From landing pages to complex web applications, I build modern, responsive, and performant digital solutions using cutting-edge technologies like React, Next.js, and Node.js.",
    features: ["Custom Websites", "E-commerce Solutions", "Web Applications", "API Development"],
    color: "neon-cyan",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    id: 2,
    icon: Video,
    title: "Video Editing",
    shortDesc: "Cinematic videos & motion graphics",
    fullDesc: "Transform your raw footage into compelling visual stories. I specialize in professional video editing, color grading, and motion graphics that captivate your audience.",
    features: ["Video Production", "Color Grading", "Motion Graphics", "Sound Design"],
    color: "neon-magenta",
    gradient: "from-neon-magenta to-neon-purple",
  },
  {
    id: 3,
    icon: Palette,
    title: "UI/UX Design",
    shortDesc: "Beautiful, intuitive user interfaces",
    fullDesc: "Create stunning user experiences with carefully crafted interfaces. I focus on user-centered design that balances aesthetics with functionality.",
    features: ["User Interface Design", "User Experience", "Prototyping", "Design Systems"],
    color: "neon-purple",
    gradient: "from-neon-purple to-neon-cyan",
  },
];

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-primary">Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            What I <span className="text-gradient-purple">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                className={`relative glass rounded-2xl p-6 md:p-8 cursor-pointer overflow-hidden h-full`}
                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                whileHover={{ y: -5 }}
                animate={{
                  boxShadow: expandedService === service.id
                    ? `0 0 40px hsl(var(--${service.color}) / 0.3)`
                    : "none",
                }}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300`}
                  style={{ opacity: expandedService === service.id ? 0.1 : 0 }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                  animate={{
                    scale: expandedService === service.id ? 1.1 : 1,
                    rotate: expandedService === service.id ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-8 h-8 text-background" />
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {service.shortDesc}
                </p>

                {/* Expand Indicator */}
                <motion.div
                  className="flex items-center gap-2 text-primary text-sm font-heading"
                  animate={{ x: expandedService === service.id ? 5 : 0 }}
                >
                  <span>{expandedService === service.id ? "Less" : "Learn more"}</span>
                  <motion.div
                    animate={{ rotate: expandedService === service.id ? 90 : 0 }}
                  >
                    <ChevronRight size={16} />
                  </motion.div>
                </motion.div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-border mt-6">
                        <p className="text-muted-foreground text-sm mb-4">
                          {service.fullDesc}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <motion.li
                              key={feature}
                              className="flex items-center gap-2 text-sm text-foreground"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Sparkles size={14} className={`text-${service.color}`} />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-6">
            Need something custom? Let's discuss your project!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta text-background font-heading uppercase tracking-wider text-sm rounded-full"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
            <ChevronRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
