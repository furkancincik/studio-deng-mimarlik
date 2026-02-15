import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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
          <Link
            to="/team"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground font-display hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Ekibe Dön
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <div className="aspect-[3/4] bg-secondary flex items-center justify-center relative overflow-hidden group sticky top-28">
                  <span className="text-muted-foreground text-sm font-sans">Fotoğraf alanı</span>
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-700" />
                </div>
              </div>

              <div className="lg:col-span-7 lg:col-start-6 space-y-10">
                <div>
                  <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-display font-medium block mb-3">
                    {member.title || "Ünvan"}
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif font-medium text-foreground">
                    {member.name || "İsim Soyisim"}
                  </h1>
                  <p className="text-muted-foreground font-sans mt-3">{member.expertise || "Uzmanlık alanı"}</p>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold font-display font-medium mb-5">Biyografi</h3>
                  <div className="space-y-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="h-4 bg-muted rounded" style={{ width: `${90 - i * 10}%` }} />
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold font-display font-medium mb-5">Sosyal Medya</h3>
                  <div className="flex gap-4">
                    {["LinkedIn", "Instagram", "Twitter"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="group/link inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
                      >
                        {s}
                        <ArrowUpRight size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-[11px] tracking-[0.3em] uppercase text-gold font-display font-medium mb-6">İlgili Projeler</h3>
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
