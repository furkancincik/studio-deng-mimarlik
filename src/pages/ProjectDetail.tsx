import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { placeholderProjects } from "@/data/placeholder";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = placeholderProjects.find((p) => p.id === id) || placeholderProjects[0];

  return (
    <Layout>
      {/* Full-bleed hero image */}
      <section className="relative h-[70vh] md:h-[85vh] bg-muted overflow-hidden flex items-end">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground text-sm font-sans">Proje ana görseli alanı</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-display block mb-3">
              {project.category || "Kategori"} {project.year && `— ${project.year}`}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-primary-foreground leading-[1.05]">
              {project.name || "Proje Adı"}
            </h1>
            <p className="text-primary-foreground/60 font-sans mt-3 text-lg">{project.location || "Konum"}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground font-display hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Projelere Dön
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-8">
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-4 bg-muted rounded" style={{ width: `${95 - i * 8}%` }} />
                ))}
              </div>

              {/* Image grid - asymmetric */}
              <div className="grid grid-cols-12 gap-4 mt-16">
                <div className="col-span-12 aspect-[16/9] bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground text-sm font-sans">Görsel 1</span>
                </div>
                <div className="col-span-7 aspect-square bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground text-sm font-sans">Görsel 2</span>
                </div>
                <div className="col-span-5 aspect-square bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm font-sans">Görsel 3</span>
                </div>
                <div className="col-span-12 aspect-[21/9] bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground text-sm font-sans">Görsel 4</span>
                </div>
              </div>
            </div>

            {/* Sidebar details */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-0">
              {[
                { label: "Konum", value: project.location || "—" },
                { label: "Yıl", value: project.year || "—" },
                { label: "Kategori", value: project.category || "—" },
                { label: "Alan", value: project.squareMeters || "— m²" },
                { label: "Malzemeler", value: project.materials || "—" },
              ].map((item) => (
                <div key={item.label} className="border-b border-border py-5">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-gold font-display font-medium mb-1.5">{item.label}</p>
                  <p className="text-sm font-sans text-foreground">{item.value}</p>
                </div>
              ))}

              {project.isOngoing && (
                <div className="bg-primary text-primary-foreground p-6 mt-6 space-y-3">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-gold font-display font-medium">İlerleme</p>
                  <div className="h-[2px] bg-primary-foreground/20 overflow-hidden">
                    <motion.div
                      className="h-full bg-gold"
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress || 0}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-xs text-primary-foreground/50 font-sans">
                    Tahmini tamamlanma: {project.estimatedCompletion || "—"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
