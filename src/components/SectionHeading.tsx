import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

const SectionHeading = ({ label, title, subtitle, align = "left", children }: SectionHeadingProps) => {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 mb-12 md:mb-16 ${alignment}`}
    >
      {label && (
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans font-medium">
          {label}
        </span>
      )}
      {title ? (
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-foreground leading-tight">
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
