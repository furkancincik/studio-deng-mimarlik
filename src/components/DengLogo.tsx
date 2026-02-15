import { motion } from "framer-motion";

interface DengLogoProps {
  animated?: boolean;
  size?: "sm" | "md" | "lg" | "hero";
  light?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: { deng: "text-xl", mimarlik: "text-[8px]", gap: "gap-0.5", tracking: "tracking-[0.35em]" },
  md: { deng: "text-2xl md:text-3xl", mimarlik: "text-[9px]", gap: "gap-1", tracking: "tracking-[0.4em]" },
  lg: { deng: "text-4xl md:text-5xl", mimarlik: "text-[10px] md:text-xs", gap: "gap-1.5", tracking: "tracking-[0.45em]" },
  hero: { deng: "text-6xl md:text-8xl lg:text-[10rem]", mimarlik: "text-xs md:text-sm lg:text-base", gap: "gap-2 md:gap-3", tracking: "tracking-[0.5em]" },
};

const DengLogo = ({ animated = false, size = "md", light = false, className = "" }: DengLogoProps) => {
  const s = sizeConfig[size];
  const color = light ? "text-primary-foreground" : "text-foreground";

  if (!animated) {
    return (
      <div className={`flex flex-col ${s.gap} ${className}`}>
        <div className="relative">
          <span className={`font-display font-bold ${s.deng} ${color} tracking-[-0.04em] leading-none block`}>
            DENG
          </span>
          {/* Architectural cut line through the D */}
          <div
            className={`absolute top-1/2 left-0 h-px ${light ? "bg-gold/60" : "bg-gold/80"}`}
            style={{ width: "0.6em" }}
          />
        </div>
        <span className={`font-display font-medium ${s.mimarlik} ${s.tracking} uppercase ${light ? "text-primary-foreground/50" : "text-muted-foreground"} leading-none`}>
          Mimarlık
        </span>
      </div>
    );
  }

  // Animated version — architectural construction
  const letterDelay = 0.15;
  const letters = ["D", "E", "N", "G"];

  return (
    <div className={`flex flex-col ${s.gap} ${className}`}>
      {/* Grid lines — blueprint scaffolding */}
      <div className="relative">
        {/* Horizontal grid lines */}
        {[0, 33, 66, 100].map((pos, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gold/15"
            style={{ top: `${pos}%` }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{
              duration: 2.5,
              times: [0, 0.3, 0.7, 1],
              delay: i * 0.05,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Vertical structural lines */}
        {[0, 25, 50, 75, 100].map((pos, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gold/10"
            style={{ left: `${pos}%` }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{
              duration: 2.5,
              times: [0, 0.25, 0.65, 1],
              delay: i * 0.04 + 0.1,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Letter outlines appear first (wireframe phase) */}
        <div className="relative flex">
          {letters.map((letter, i) => (
            <span key={`outline-${i}`} className="relative">
              {/* Wireframe stroke letter */}
              <motion.span
                className={`font-display font-bold ${s.deng} tracking-[-0.04em] leading-none inline-block`}
                style={{
                  WebkitTextStroke: light ? "1px rgba(255,255,255,0.2)" : "1px rgba(0,0,0,0.15)",
                  color: "transparent",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, 0] }}
                transition={{
                  duration: 2,
                  times: [0, 0.3, 0.6, 0.9],
                  delay: 0.2 + i * letterDelay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {letter}
              </motion.span>

              {/* Solid letter fades in on top */}
              <motion.span
                className={`font-display font-bold ${s.deng} ${color} tracking-[-0.04em] leading-none inline-block absolute inset-0`}
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.9 + i * letterDelay,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {letter}
              </motion.span>
            </span>
          ))}
        </div>

        {/* Architectural cut line through the D */}
        <motion.div
          className={`absolute top-1/2 left-0 h-px ${light ? "bg-gold/60" : "bg-gold/80"}`}
          style={{ width: "0.6em" }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      {/* Mimarlık subtitle */}
      <motion.span
        className={`font-display font-medium ${s.mimarlik} ${s.tracking} uppercase ${light ? "text-primary-foreground/50" : "text-muted-foreground"} leading-none`}
        initial={{ opacity: 0, letterSpacing: "0.8em" }}
        animate={{ opacity: 1, letterSpacing: s.tracking.includes("0.5") ? "0.5em" : s.tracking.includes("0.45") ? "0.45em" : s.tracking.includes("0.4") ? "0.4em" : "0.35em" }}
        transition={{ duration: 1, delay: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Mimarlık
      </motion.span>
    </div>
  );
};

export default DengLogo;
