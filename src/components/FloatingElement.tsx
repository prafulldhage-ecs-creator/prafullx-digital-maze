import { useState } from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
  text: string;
  index: number;
  type: "skill" | "fact";
  total: number;
}

const FloatingElement = ({ text, index, type, total }: FloatingElementProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate position based on type and index
  const getPosition = () => {
    if (type === "skill") {
      const positions = [
        { top: "15%", left: "5%" },
        { top: "25%", right: "8%" },
        { top: "45%", left: "3%" },
        { top: "60%", right: "5%" },
        { top: "75%", left: "8%" },
        { top: "85%", right: "10%" },
      ];
      return positions[index % positions.length];
    } else {
      const positions = [
        { top: "20%", right: "15%" },
        { top: "35%", left: "12%" },
        { top: "55%", right: "12%" },
        { top: "70%", left: "5%" },
      ];
      return positions[index % positions.length];
    }
  };

  const position = getPosition();
  const delay = index * 0.5;

  return (
    <motion.div
      className="absolute pointer-events-auto hidden lg:block"
      style={position}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isHovered ? 1 : 0.6, 
        scale: isHovered ? 1.1 : 1,
        rotate: isHovered ? [0, -5, 5, 0] : 0,
      }}
      transition={{ 
        delay: delay,
        duration: 0.5,
        rotate: { duration: 0.3 }
      }}
      whileHover={{ scale: 1.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`
          px-4 py-2 rounded-lg cursor-pointer select-none
          ${type === "skill" 
            ? "bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan" 
            : "bg-neon-magenta/10 border border-neon-magenta/30 text-neon-magenta"
          }
          ${isHovered ? "shadow-lg" : ""}
        `}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4 + index,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        style={{
          boxShadow: isHovered 
            ? type === "skill"
              ? "0 0 20px hsl(180 100% 50% / 0.4)"
              : "0 0 20px hsl(320 100% 60% / 0.4)"
            : "none"
        }}
      >
        <span className="font-heading text-xs md:text-sm whitespace-nowrap">
          {text}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default FloatingElement;
