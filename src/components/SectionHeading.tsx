import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
  large?: boolean;
}

const SectionHeading = ({ label, title, subtitle, align = "left", children, large = false }: SectionHeadingProps) => {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-4 mb-14 md:mb-20 ${alignment}`}
    >
      {label && (
        <span className="text-[11px] tracking-[0.35em] uppercase text-gold font-display font-medium">
          {label}
        </span>
      )}
      {title ? (
        <h2
          className={`font-serif font-medium tracking-tight text-foreground leading-[1.1] ${
            large
              ? "text-4xl md:text-5xl lg:text-6xl"
              : "text-3xl md:text-4xl lg:text-5xl"
          }`}
        >
          {title}
        </h2>
      ) : (
        <div className="h-10 w-64 bg-muted rounded" />
      )}
      {subtitle ? (
        <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed font-sans">
          {subtitle}
        </p>
      ) : (
        <div className="h-5 w-48 bg-muted rounded" />
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeading;
