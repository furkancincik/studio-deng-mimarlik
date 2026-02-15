import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Project } from "@/types/cms";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/projects/${project.id}`} className="group block">
        <div className="aspect-[4/3] bg-muted mb-4 overflow-hidden">
          <div className="w-full h-full bg-secondary group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
            <span className="text-muted-foreground text-sm font-sans">Görsel alanı</span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans">
            {project.category || "Kategori"} {project.year && `— ${project.year}`}
          </p>
          <h3 className="text-lg md:text-xl font-serif font-medium text-foreground group-hover:text-muted-foreground transition-colors">
            {project.name || "Proje Adı"}
          </h3>
          <p className="text-sm text-muted-foreground font-sans">
            {project.location || "Konum"}
          </p>
          {project.isOngoing && project.progress !== undefined && (
            <div className="pt-2">
              <div className="h-1 w-full bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-foreground rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1 font-sans">
                {project.progress}% — {project.estimatedCompletion || "Tahmini tamamlanma tarihi"}
              </p>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
