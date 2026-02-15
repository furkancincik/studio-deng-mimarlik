import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import TeamCard from "@/components/TeamCard";
import DengLogo from "@/components/DengLogo";
import { placeholderProjects, placeholderTeam } from "@/data/placeholder";
import { useRef } from "react";

const Index = () => {
  const completedProjects = placeholderProjects.filter((p) => !p.isOngoing).slice(0, 3);
  const ongoingProjects = placeholderProjects.filter((p) => p.isOngoing).slice(0, 2);
  const featuredTeam = placeholderTeam.slice(0, 3);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground font-sans text-sm">Ana görsel alanı</span>
        </motion.div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroTextY }}
          className="relative z-10 h-full flex flex-col justify-end container mx-auto px-6 md:px-12 pb-20 md:pb-28"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <DengLogo animated size="hero" light />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="flex items-center gap-8 mt-8"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 text-sm font-display font-medium tracking-wide hover:bg-gold hover:text-primary-foreground transition-all duration-300"
              >
                Projeleri İncele
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <p className="hidden md:block text-primary-foreground/60 font-sans text-base max-w-xs">
                Slogan buraya eklenecek
              </p>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 right-12 hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/40 font-display rotate-90 origin-center mb-6">
              Keşfet
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={16} className="text-primary-foreground/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { number: "—", label: "Tamamlanan Proje" },
              { number: "—", label: "Yıllık Deneyim" },
              { number: "—", label: "Ekip Üyesi" },
              { number: "—", label: "Ödül" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-3xl md:text-4xl font-serif font-medium text-gold">{stat.number}</p>
                <p className="text-[11px] tracking-[0.2em] uppercase opacity-50 font-display mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hakkımızda Önizleme */}
      <section className="py-28 md:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-5 lg:pr-8">
              <SectionHeading label="Hakkımızda" title="Stüdyo Tanıtımı" subtitle="İçerik buraya eklenecek" />
              <div className="space-y-3 mb-8">
                <div className="h-4 w-full bg-muted rounded" />
                <div className="h-4 w-5/6 bg-muted rounded" />
                <div className="h-4 w-4/6 bg-muted rounded" />
              </div>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-display font-medium tracking-wide text-foreground"
              >
                <span className="relative">
                  Daha Fazla
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/30 group-hover:bg-gold transition-colors duration-300" />
                </span>
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="col-span-7 aspect-[3/4] bg-secondary flex items-center justify-center"
                >
                  <span className="text-muted-foreground text-sm font-sans">Görsel alanı</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="col-span-5 aspect-[3/4] bg-muted flex items-center justify-center mt-12"
                >
                  <span className="text-muted-foreground text-sm font-sans">Görsel alanı</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tamamlanan Projeler */}
      <section className="py-28 md:py-40 bg-warm-cream relative">
        {/* Decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20">
            <SectionHeading label="Portfolyo" title="Seçili Projeler" subtitle="İçerik buraya eklenecek" />
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-display font-medium tracking-wide text-foreground mb-14 md:mb-20"
            >
              <span className="relative">
                Tüm Projeleri Gör
                <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/30 group-hover:bg-gold transition-colors duration-300" />
              </span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {completedProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Devam Eden Projeler */}
      <section className="py-28 md:py-40">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading label="Devam Eden" title="Süren Projeler" subtitle="İçerik buraya eklenecek" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {ongoingProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Ekip */}
      <section className="py-28 md:py-40 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20">
            <div>
              <span className="text-[11px] tracking-[0.35em] uppercase text-gold font-display font-medium block mb-4">
                Ekibimiz
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-primary-foreground leading-[1.1]">
                Takımımız
              </h2>
              <p className="text-primary-foreground/50 max-w-xl text-base md:text-lg leading-relaxed font-sans mt-4">
                İçerik buraya eklenecek
              </p>
            </div>
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 text-sm font-display font-medium tracking-wide text-primary-foreground mt-6 md:mt-0 mb-0"
            >
              <span className="relative">
                Ekibi Tanıyın
                <span className="absolute bottom-0 left-0 w-full h-px bg-primary-foreground/30 group-hover:bg-gold transition-colors duration-300" />
              </span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {featuredTeam.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 relative">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold font-display font-medium block mb-6">
              İletişim
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground leading-[1.1] mb-6">
              Projenizi hayata
              <br />
              <span className="italic font-normal">geçirelim</span>
            </h2>
            <p className="text-muted-foreground font-sans text-lg mb-10 max-w-lg mx-auto">
              İçerik buraya eklenecek
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 text-sm font-display font-medium tracking-wide hover:bg-gold transition-all duration-300"
            >
              Bize Ulaşın
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
