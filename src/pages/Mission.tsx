import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const Mission = () => {
  const sections = [
    { label: "Misyon", title: "Misyonumuz", icon: "01" },
    { label: "Vizyon", title: "Vizyonumuz", icon: "02" },
    { label: "İlkeler", title: "Temel İlkelerimiz", icon: "03" },
    { label: "Sürdürülebilirlik", title: "Sürdürülebilirlik Yaklaşımı", icon: "04" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] bg-primary flex items-end overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary-foreground/20 rounded-full" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 border border-primary-foreground/10 rounded-full" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold font-display block mb-4">Amaç</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-primary-foreground leading-[1.05]">
              Misyon <span className="italic font-normal">&</span> Vizyon
            </h1>
          </motion.div>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.label} className={`py-24 md:py-32 ${i % 2 === 0 ? "bg-warm-cream" : ""}`}>
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <span className="text-6xl md:text-8xl font-serif font-medium text-gold/30">{section.icon}</span>
              </motion.div>
              <div className="lg:col-span-6">
                <SectionHeading label={section.label} title={section.title} subtitle="İçerik buraya eklenecek" />
                <div className="space-y-3 max-w-lg">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="h-4 bg-muted rounded" style={{ width: `${90 - j * 15}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Mission;
