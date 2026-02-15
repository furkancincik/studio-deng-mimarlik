import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { placeholderProjects } from "@/data/placeholder";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = placeholderProjects.find((p) => p.id === id) || placeholderProjects[0];

  return (
    <Layout>
      {/* Hero Image */}
      <section className="h-[60vh] md:h-[70vh] bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-sm font-sans">Project hero image placeholder</span>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/projects" className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors mb-8 inline-block">
              ← Back to Projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-8">
              <div className="lg:col-span-2 space-y-8">
                <h1 className="text-3xl md:text-5xl font-serif font-medium text-foreground">
                  {project.name || "Project Name"}
                </h1>
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-4 bg-muted rounded" style={{ width: `${95 - i * 8}%` }} />
                  ))}
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="aspect-[4/3] bg-secondary flex items-center justify-center">
                      <span className="text-muted-foreground text-sm font-sans">Image {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {[
                  { label: "Location", value: project.location || "—" },
                  { label: "Year", value: project.year || "—" },
                  { label: "Category", value: project.category || "—" },
                  { label: "Area", value: project.squareMeters || "— m²" },
                  { label: "Materials", value: project.materials || "—" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-border pb-4">
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-1">{item.label}</p>
                    <p className="text-sm font-sans text-foreground">{item.value}</p>
                  </div>
                ))}

                {project.isOngoing && (
                  <div className="bg-secondary p-6 space-y-3">
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans">Progress</p>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-foreground rounded-full" style={{ width: `${project.progress || 0}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground font-sans">
                      Est. completion: {project.estimatedCompletion || "—"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
