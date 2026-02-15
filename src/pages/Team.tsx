import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import TeamCard from "@/components/TeamCard";
import { placeholderTeam } from "@/data/placeholder";

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] bg-primary flex items-end overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 border border-primary-foreground/30 rounded-full" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold font-display block mb-4">Ekibimiz</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-primary-foreground leading-[1.05]">
              Takımımız
            </h1>
            <p className="text-primary-foreground/50 max-w-xl text-lg font-sans mt-4">İçerik buraya eklenecek</p>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {placeholderTeam.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
