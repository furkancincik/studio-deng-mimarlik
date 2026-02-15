import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import TeamCard from "@/components/TeamCard";
import { placeholderProjects, placeholderTeam } from "@/data/placeholder";

const Index = () => {
  const completedProjects = placeholderProjects.filter((p) => !p.isOngoing).slice(0, 3);
  const ongoingProjects = placeholderProjects.filter((p) => p.isOngoing).slice(0, 2);
  const featuredTeam = placeholderTeam.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] md:h-[90vh] bg-secondary flex items-end">
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground font-sans text-sm">Ana görsel alanı</span>
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground leading-[1.1] mb-4">
              Başlık alanı
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans mb-8">
              Slogan buraya eklenecek
            </p>
            <Link
              to="/projects"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-sans tracking-wide hover:opacity-90 transition-opacity"
            >
              Projeleri İncele
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hakkımızda Önizleme */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label="Hakkımızda" title="Stüdyo Tanıtımı" subtitle="İçerik buraya eklenecek" />
              <div className="space-y-4">
                <div className="h-4 w-full bg-muted rounded" />
                <div className="h-4 w-5/6 bg-muted rounded" />
                <div className="h-4 w-4/6 bg-muted rounded" />
              </div>
              <Link
                to="/about"
                className="inline-block mt-8 text-sm font-sans tracking-wide text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
              >
                Daha Fazla
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] bg-secondary flex items-center justify-center"
            >
              <span className="text-muted-foreground text-sm font-sans">Görsel alanı</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tamamlanan Projeler */}
      <section className="py-24 md:py-32 bg-warm-cream">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading label="Portfolyo" title="Seçili Projeler" subtitle="İçerik buraya eklenecek" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-block text-sm font-sans tracking-wide text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              Tüm Projeleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Devam Eden Projeler */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading label="Devam Eden" title="Süren Projeler" subtitle="İçerik buraya eklenecek" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Ekip */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading label="Ekibimiz" title="Takımımız" subtitle="İçerik buraya eklenecek" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTeam.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/team"
              className="inline-block text-sm font-sans tracking-wide text-foreground border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
            >
              Ekibi Tanıyın
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground">
              Çağrı başlığı alanı
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              İçerik buraya eklenecek
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 text-sm font-sans tracking-wide hover:opacity-90 transition-opacity"
            >
              Bize Ulaşın
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
