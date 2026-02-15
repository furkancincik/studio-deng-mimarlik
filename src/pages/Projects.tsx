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
    { key: "all" as const, label: "All" },
    { key: "completed" as const, label: "Completed" },
    { key: "ongoing" as const, label: "Ongoing" },
  ];

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionHeading label="Portfolio" title="Projects" subtitle="Content will be added here" />
          </motion.div>

          <div className="flex gap-6 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`text-sm font-sans tracking-wide transition-colors pb-1 ${
                  filter === f.key
                    ? "text-foreground border-b border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
