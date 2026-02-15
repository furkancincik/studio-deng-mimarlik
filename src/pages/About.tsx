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
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Hakkımızda</span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-foreground mt-3 mb-6 leading-tight">
              Stüdyo Hakkında
            </h1>
            <div className="h-5 w-96 max-w-full bg-muted rounded" />
          </motion.div>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.label} className={`py-24 md:py-32 ${i % 2 === 0 ? "bg-secondary" : ""}`}>
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <SectionHeading label={section.label} title={section.title} subtitle="İçerik buraya eklenecek" />
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-4 bg-muted rounded" style={{ width: `${85 - j * 10}%` }} />
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`aspect-[4/3] bg-muted flex items-center justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <span className="text-muted-foreground text-sm font-sans">Görsel alanı</span>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default About;
