import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { placeholderTeam, placeholderProjects } from "@/data/placeholder";

const TeamMember = () => {
  const { id } = useParams();
  const member = placeholderTeam.find((m) => m.id === id) || placeholderTeam[0];
  const relatedProjects = placeholderProjects.slice(0, 2);

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <Link to="/team" className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors mb-8 inline-block">
            ← Ekibe Dön
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="aspect-[3/4] bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-sans">Fotoğraf alanı</span>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
                    {member.name || "İsim Soyisim"}
                  </h1>
                  <p className="text-lg text-muted-foreground font-sans mt-2">{member.title || "Ünvan"}</p>
                  <p className="text-sm text-muted-foreground font-sans mt-1">{member.expertise || "Uzmanlık alanı"}</p>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-4">Biyografi</h3>
                  <div className="space-y-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="h-4 bg-muted rounded" style={{ width: `${90 - i * 10}%` }} />
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-4">Sosyal Medya</h3>
                  <div className="flex gap-4">
                    {["LinkedIn", "Instagram", "Twitter"].map((s) => (
                      <a key={s} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
                        {s}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans mb-6">İlgili Projeler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedProjects.map((p, i) => (
                      <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamMember;
