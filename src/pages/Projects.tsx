import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { placeholderProjects } from "@/data/placeholder";

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "completed" | "ongoing">("all");

  const filtered = placeholderProjects.filter((p) => {
    if (filter === "completed") return !p.isOngoing;
    if (filter === "ongoing") return p.isOngoing;
    return true;
  });

  const filters = [
    { key: "all" as const, label: "Tümü" },
    { key: "completed" as const, label: "Tamamlanan" },
    { key: "ongoing" as const, label: "Devam Eden" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] bg-primary flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground font-sans text-sm">Görsel alanı</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[11px] tracking-[0.35em] uppercase text-primary-foreground/60 font-display block mb-4">
              Portfolyo
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-primary-foreground leading-[1.05]">
              Projeler
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 md:px-12">
          {/* Filters */}
          <div className="flex gap-8 mb-16 border-b border-border pb-4">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`relative text-sm font-display font-medium tracking-wide transition-colors pb-4 -mb-4 ${
                  filter === f.key ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
                {filter === f.key && (
                  <motion.span
                    layoutId="filter-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
