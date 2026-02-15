import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import { placeholderTeam } from "@/data/placeholder";

const Team = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionHeading label="Ekibimiz" title="Takımımız" subtitle="İçerik buraya eklenecek" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
