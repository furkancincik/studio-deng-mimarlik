import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const Mission = () => {
  const sections = [
    { label: "Misyon", title: "Misyonumuz" },
    { label: "Vizyon", title: "Vizyonumuz" },
    { label: "İlkeler", title: "Temel İlkelerimiz" },
    { label: "Sürdürülebilirlik", title: "Sürdürülebilirlik Yaklaşımı" },
  ];

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Amaç</span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-foreground mt-3 mb-6 leading-tight">
              Misyon & Vizyon
            </h1>
            <div className="h-5 w-80 max-w-full bg-muted rounded" />
          </motion.div>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.label} className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-secondary" : ""}`}>
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <SectionHeading label={section.label} title={section.title} subtitle="İçerik buraya eklenecek" align="center" />
            <div className="space-y-3 mx-auto max-w-lg">
              {Array.from({ length: 3 }).map((_, j) => (
                <div key={j} className="h-4 bg-muted rounded mx-auto" style={{ width: `${90 - j * 15}%` }} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Mission;
