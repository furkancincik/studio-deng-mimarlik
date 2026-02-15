import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import { ContactForm } from "@/types/cms";

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClasses =
    "w-full bg-transparent border-b border-border py-4 text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold transition-colors duration-300";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] bg-primary flex items-end overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold font-display block mb-4">İletişim</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-primary-foreground leading-[1.05]">
              Bize Ulaşın
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="Ad"
                  className={inputClasses}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Soyad"
                  className={inputClasses}
                  value={form.surname}
                  onChange={(e) => setForm({ ...form, surname: e.target.value })}
                />
              </div>
              <input
                type="email"
                placeholder="E-posta"
                className={inputClasses}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Telefon"
                className={inputClasses}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <textarea
                placeholder="Mesajınız"
                rows={4}
                className={`${inputClasses} resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 text-sm font-display font-medium tracking-wide hover:bg-gold transition-all duration-300"
              >
                Mesaj Gönder
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.form>

            <div className="lg:col-span-4 lg:col-start-9 space-y-10">
              <div className="space-y-8">
                {[
                  { label: "Adres", value: "Adres buraya eklenecek" },
                  { label: "Telefon", value: "Telefon buraya eklenecek" },
                  { label: "E-posta", value: "E-posta buraya eklenecek" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] tracking-[0.25em] uppercase text-gold font-display font-medium mb-1.5">{item.label}</p>
                    <p className="text-sm font-sans text-foreground">{item.value}</p>
                  </div>
                ))}

                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-gold font-display font-medium mb-3">Sosyal Medya</p>
                  <div className="flex gap-4">
                    {["Instagram", "LinkedIn", "Twitter"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="group/link inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
                      >
                        {s}
                        <ArrowUpRight size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="aspect-[4/3] bg-secondary flex items-center justify-center relative overflow-hidden group">
                <span className="text-muted-foreground text-sm font-sans">Harita alanı</span>
                <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gold group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
