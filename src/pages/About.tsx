import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  { label: "Hikayemiz", title: "Şirket Hikayesi" },
  { label: "Yaklaşım", title: "Tasarım Yaklaşımı" },
  { label: "Değerler", title: "Değerlerimiz" },
  { label: "Felsefe", title: "Mimari Felsefe" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] bg-muted overflow-hidden flex items-end">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground font-sans text-sm">Görsel alanı</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[11px] tracking-[0.35em] uppercase text-primary-foreground/60 font-display block mb-4">
              Hakkımızda
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-primary-foreground leading-[1.05]">
              Stüdyo Hakkında
            </h1>
          </motion.div>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.label} className={`py-28 md:py-36 ${i % 2 === 0 ? "bg-warm-cream" : ""}`}>
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className={`lg:col-span-5 ${i % 2 !== 0 ? "lg:order-2 lg:col-start-8" : ""}`}>
                <SectionHeading label={section.label} title={section.title} subtitle="İçerik buraya eklenecek" />
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-4 bg-muted rounded" style={{ width: `${85 - j * 10}%` }} />
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`lg:col-span-6 ${i % 2 !== 0 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"} aspect-[4/3] bg-secondary flex items-center justify-center relative overflow-hidden group`}
              >
                <span className="text-muted-foreground text-sm font-sans">Görsel alanı</span>
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-700" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default About;
