import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
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
    "w-full bg-transparent border-b border-border py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors";

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionHeading label="İletişim" title="Bize Ulaşın" subtitle="İçerik buraya eklenecek" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
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
                className="bg-primary text-primary-foreground px-10 py-3 text-sm font-sans tracking-wide hover:opacity-90 transition-opacity"
              >
                Mesaj Gönder
              </button>
            </motion.form>

            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  { label: "Adres", value: "Adres buraya eklenecek" },
                  { label: "Telefon", value: "Telefon buraya eklenecek" },
                  { label: "E-posta", value: "E-posta buraya eklenecek" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-1">{item.label}</p>
                    <p className="text-sm font-sans text-foreground">{item.value}</p>
                  </div>
                ))}

                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-2">Sosyal Medya</p>
                  <div className="flex gap-4">
                    {["Instagram", "LinkedIn", "Twitter"].map((s) => (
                      <a key={s} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-sans">Harita alanı</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
