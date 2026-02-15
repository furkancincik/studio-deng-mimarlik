import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const Mission = () => {
  const sections = [
    { label: "Mission", title: "Our Mission" },
    { label: "Vision", title: "Our Vision" },
    { label: "Principles", title: "Core Principles" },
    { label: "Sustainability", title: "Sustainability Approach" },
  ];

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">Purpose</span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-foreground mt-3 mb-6 leading-tight">
              Mission & Vision
            </h1>
            <div className="h-5 w-80 max-w-full bg-muted rounded" />
          </motion.div>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.label} className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-secondary" : ""}`}>
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <SectionHeading label={section.label} title={section.title} subtitle="Content will be added here" align="center" />
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
