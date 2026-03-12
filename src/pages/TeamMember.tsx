import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { placeholderTeam, placeholderProjects } from "@/data/placeholder";

const TeamMember = () => {
  const { id } = useParams();
  const member = placeholderTeam.find((m) => m.id === id) || placeholderTeam[0];
  const relatedProjects = placeholderProjects.filter((p) => member.projectIds.includes(p.id)).slice(0, 2);

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
                <div className="aspect-[3/4] overflow-hidden relative group sticky top-28 rounded-lg">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <span className="text-muted-foreground text-sm font-sans">Fotoğraf</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-terracotta group-hover:w-full transition-all duration-700" />
                </div>
              </div>

              <div className="lg:col-span-7 lg:col-start-6 space-y-10">
                <div>
                  <span className="text-[11px] tracking-[0.25em] uppercase text-terracotta font-display font-medium block mb-3">
                    {member.title}
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif font-medium text-foreground">
                    {member.name}
                  </h1>
                  <p className="text-muted-foreground font-sans mt-3">{member.expertise}</p>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-[11px] tracking-[0.3em] uppercase text-terracotta font-display font-medium mb-5">Biyografi</h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {member.biography}
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-[11px] tracking-[0.3em] uppercase text-terracotta font-display font-medium mb-5">Sosyal Medya</h3>
                  <div className="flex gap-4">
                    {Object.entries(member.socialLinks).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="group/link inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans capitalize"
                      >
                        {platform}
                        <ArrowUpRight size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>

                {relatedProjects.length > 0 && (
                  <div className="border-t border-border pt-8">
                    <h3 className="text-[11px] tracking-[0.3em] uppercase text-terracotta font-display font-medium mb-6">İlgili Projeler</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {relatedProjects.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                      ))}
                    </div>
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

export default TeamMember;
