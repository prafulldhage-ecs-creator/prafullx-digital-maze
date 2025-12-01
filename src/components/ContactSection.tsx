import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "7498490280",
      href: "tel:7498490280",
    },
    {
      icon: Mail,
      label: "Email",
      value: "webstudioprafulx@gmail.com",
      href: "mailto:webstudioprafulx@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Worldwide",
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 via-background to-background" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-primary">Contact</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 p-4 glass rounded-xl transition-all hover:bg-muted/50 group-hover:border-primary/30"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-heading uppercase tracking-wider text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-heading text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-heading uppercase tracking-wider text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-heading text-foreground">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Easter Egg */}
            <motion.div
              className="mt-8 p-4 rounded-xl border border-dashed border-primary/30 cursor-pointer group"
              whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const messages = [
                  "🎮 Achievement Unlocked: Found the secret!",
                  "🔮 You have keen eyes, explorer!",
                  "⚡ +100 points for curiosity!",
                  "🌟 A true digital detective!",
                ];
                alert(messages[Math.floor(Math.random() * messages.length)]);
              }}
            >
              <p className="text-xs text-muted-foreground text-center group-hover:text-primary transition-colors">
                🧩 Click here if you found all the puzzle pieces...
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-heading text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-heading text-muted-foreground mb-2">
                  Subject
                </label>
                <motion.input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="Project Inquiry"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-heading text-muted-foreground mb-2">
                  Message
                </label>
                <motion.textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 font-heading uppercase tracking-wider text-sm rounded-lg flex items-center justify-center gap-2 transition-all ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-neon-cyan to-neon-magenta text-background hover:opacity-90"
                }`}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
