import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-studio.jpg";
import project1Img from "@/assets/projects/project-1.jpg";
import project3Img from "@/assets/projects/project-3.jpg";
import project4Img from "@/assets/projects/project-4.jpg";

const sections = [
  {
    label: "Hikayemiz",
    title: "2014'ten Bugüne",
    text: "Deng Mimarlık, 2014 yılında Erkan Demirel ve Selin Arıkan tarafından İstanbul'da kurulmuştur. Kuruluşumuzdan bu yana, çağdaş mimarlık pratiğinde sürdürülebilirlik, malzeme duyarlılığı ve mekânsal kaliteyi bir arada sunan projeler üretmekteyiz. Hollanda, Japonya ve İsviçre'deki uluslararası deneyimlerimizi Anadolu'nun zengin yapı kültürüyle harmanlayarak, özgün bir tasarım dili geliştirdik.",
    image: aboutImg,
  },
  {
    label: "Yaklaşım",
    title: "Tasarım Yaklaşımımız",
    text: "Her projeye bağlamını anlayarak başlıyoruz. Arazinin topografyası, iklim koşulları, yerel malzeme geleneği ve kullanıcı ihtiyaçları tasarımımızın temel girdileridir. Doğal ışık kullanımı, iç-dış mekan ilişkisi ve malzeme dürüstlüğü tasarım felsefemizin merkezinde yer almaktadır. Parametrik tasarım araçlarını geleneksel el çizimleriyle birleştirerek, hem teknolojik hem de insani bir süreç yürütüyoruz.",
    image: project1Img,
  },
  {
    label: "Değerler",
    title: "Değerlerimiz",
    text: "Sürdürülebilirlik bizim için bir trend değil, bir sorumluluktur. LEED ve BREEAM sertifikasyonlarına uygun projeler geliştiriyor, yerel malzeme kullanımını teşvik ediyoruz. Ekibimizle birlikte şeffaf, katılımcı ve yenilikçi bir çalışma kültürü benimsiyoruz. Müşterilerimizle kurduğumuz güven ilişkisi, uzun soluklu iş birliklerinin temelidir.",
    image: project3Img,
  },
  {
    label: "Felsefe",
    title: "Mimari Felsefemiz",
    text: "Mimarlığın, insanların günlük yaşamını doğrudan etkileyen en güçlü sanat formu olduğuna inanıyoruz. Her yapı, içinde yaşayan insanların hikayesini anlatmalıdır. Gereksiz süslemeden kaçınırken, malzeme dokusu, ışık oyunları ve mekânsal oranlarla duygusal derinlik yaratmayı hedefliyoruz. Mimarlık bizim için sadece bina yapmak değil, deneyim tasarlamaktır.",
    image: project4Img,
  },
];

const About = () => {
  return (
    <Layout>
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={aboutImg} alt="Deng Mimarlık stüdyo" className="w-full h-full object-cover" />
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
                <SectionHeading label={section.label} title={section.title} />
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {section.text}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`lg:col-span-6 ${i % 2 !== 0 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"} aspect-[4/3] overflow-hidden relative group`}
              >
                <img src={section.image} alt={section.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-terracotta group-hover:w-full transition-all duration-700" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default About;
