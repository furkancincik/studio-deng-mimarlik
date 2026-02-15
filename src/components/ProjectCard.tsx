import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/cms";

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index = 0, featured = false }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/projects/${project.id}`} className="group block">
        <div className={`relative overflow-hidden ${featured ? "aspect-[3/4]" : "aspect-[4/3]"} mb-5`}>
          <div className="w-full h-full bg-secondary transition-transform duration-[800ms] ease-out group-hover:scale-110 flex items-center justify-center">
            <span className="text-muted-foreground text-sm font-sans">Görsel alanı</span>
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
          {/* Arrow indicator */}
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-background/90 backdrop-blur flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={18} className="text-foreground" />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-3">
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold font-display font-medium">
              {project.category || "Kategori"}
            </p>
            {project.year && (
              <>
                <span className="w-1 h-1 rounded-full bg-border" />
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-display">{project.year}</p>
              </>
            )}
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300">
            {project.name || "Proje Adı"}
          </h3>
          <p className="text-sm text-muted-foreground font-sans">
            {project.location || "Konum"}
          </p>
          {project.isOngoing && project.progress !== undefined && (
            <div className="pt-3">
              <div className="h-[2px] w-full bg-border overflow-hidden">
                <motion.div
                  className="h-full bg-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <p className="text-[11px] text-muted-foreground mt-1.5 font-display">
                %{project.progress} — {project.estimatedCompletion || "Tahmini tamamlanma tarihi"}
              </p>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
