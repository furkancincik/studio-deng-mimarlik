import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const Mission = () => {
  const sections = [
    {
      label: "Misyon",
      title: "Misyonumuz",
      icon: "01",
      text: "İnsanların yaşam kalitesini yükselten, çevreye duyarlı ve estetik değeri yüksek mimari çözümler üretmek. Her projede kullanıcı deneyimini merkeze alarak, işlevsel ve ilham verici mekânlar tasarlamak. Yerel yapı kültürünü çağdaş mimari pratiğiyle buluşturarak, Türkiye'nin mimarlık sahnesine özgün katkılarda bulunmak.",
    },
    {
      label: "Vizyon",
      title: "Vizyonumuz",
      icon: "02",
      text: "Uluslararası ölçekte tanınan, sürdürülebilir tasarım ilkeleriyle hareket eden öncü bir mimarlık stüdyosu olmak. 2030 yılına kadar tüm projelerimizde karbon nötr standartlara ulaşmayı ve mimarlık eğitimine aktif katkıda bulunmayı hedefliyoruz. Tasarımın gücüyle toplumsal değişime katkı sağlamak en büyük vizyonumuzdur.",
    },
    {
      label: "İlkeler",
      title: "Temel İlkelerimiz",
      icon: "03",
      text: "Dürüstlük: Malzeme, yapı ve tasarım sürecinde şeffaflığı esas alırız. İnovasyon: Geleneksel yapı bilgisini teknolojik yeniliklerle harmanlayarak ilerleriz. İş birliği: Müşterilerimiz, mühendisler ve zanaatkârlarla eşit ortaklık anlayışıyla çalışırız. Mükemmeliyet: Her detayda en yüksek kalite standardını hedefleriz.",
    },
    {
      label: "Sürdürülebilirlik",
      title: "Sürdürülebilirlik Yaklaşımımız",
      icon: "04",
      text: "Çevresel sorumluluk, tasarım sürecimizin her aşamasında yer alır. Pasif enerji sistemleri, yeşil çatı uygulamaları, yağmur suyu toplama ve geri dönüştürülmüş malzeme kullanımı projelerimizin standart bileşenleridir. LEED ve BREEAM sertifikasyonlarına uygun projeler geliştiriyor, yapay aydınlatma ihtiyacını minimize eden doğal ışık stratejileri uyguluyoruz.",
    },
  ];

  return (
    <Layout>
      <section className="relative h-[50vh] md:h-[60vh] bg-primary flex items-end overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary-foreground/20 rounded-full" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 border border-primary-foreground/10 rounded-full" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[11px] tracking-[0.35em] uppercase text-terracotta-light font-display block mb-4">Amaç</span>
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
                <span className="text-6xl md:text-8xl font-serif font-medium text-terracotta/30">{section.icon}</span>
              </motion.div>
              <div className="lg:col-span-6">
                <SectionHeading label={section.label} title={section.title} />
                <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-lg">
                  {section.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Mission;
