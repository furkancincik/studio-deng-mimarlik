import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold">STUDIO</h3>
            <p className="text-sm opacity-70 font-sans leading-relaxed">
              İçerik buraya eklenecek
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase opacity-50 font-sans">Navigasyon</h4>
            <nav className="flex flex-col gap-2">
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
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity font-sans"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase opacity-50 font-sans">İletişim</h4>
            <div className="space-y-2 text-sm opacity-70 font-sans">
              <p>Adres buraya eklenecek</p>
              <p>Telefon buraya eklenecek</p>
              <p>E-posta buraya eklenecek</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase opacity-50 font-sans">Sosyal Medya</h4>
            <div className="flex gap-4">
              {["Instagram", "LinkedIn", "Twitter"].map((s) => (
                <a key={s} href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-sans">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-50 font-sans">© {new Date().getFullYear()} Studio. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity font-sans">Gizlilik Politikası</a>
            <a href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity font-sans">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
