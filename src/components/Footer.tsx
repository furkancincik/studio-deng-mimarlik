import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import DengLogo from "./DengLogo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Top: Big CTA area */}
        <div className="mb-20 md:mb-28">
          <p className="text-xs tracking-[0.3em] uppercase opacity-40 font-display mb-4">İletişime Geçin</p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4"
          >
            <span className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-none">
              Birlikte çalışalım
            </span>
            <ArrowUpRight
              size={40}
              className="opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-4 lg:col-span-1">
            <DengLogo size="md" light />
            <p className="text-sm opacity-50 font-sans leading-relaxed max-w-xs">
              İçerik buraya eklenecek
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase opacity-40 font-display">Sayfalar</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Hakkımızda", path: "/about" },
                { label: "Misyon & Vizyon", path: "/mission" },
                { label: "Projeler", path: "/projects" },
                { label: "Ekip", path: "/team" },
                { label: "Blog", path: "/blog" },
                { label: "İletişim", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm opacity-60 hover:opacity-100 transition-all duration-300 font-sans hover:translate-x-1 inline-flex"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase opacity-40 font-display">İletişim</h4>
            <div className="space-y-3 text-sm opacity-60 font-sans">
              <p>Adres buraya eklenecek</p>
              <p>Telefon buraya eklenecek</p>
              <p>E-posta buraya eklenecek</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase opacity-40 font-display">Sosyal Medya</h4>
            <div className="flex flex-col gap-2.5">
              {["Instagram", "LinkedIn", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-sm opacity-60 hover:opacity-100 transition-all duration-300 font-sans hover:translate-x-1 inline-flex items-center gap-1.5 group"
                >
                  {s}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40 font-sans">© {new Date().getFullYear()} Deng Mimarlık. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs opacity-40 hover:opacity-100 transition-opacity font-sans">Gizlilik Politikası</a>
            <a href="#" className="text-xs opacity-40 hover:opacity-100 transition-opacity font-sans">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
