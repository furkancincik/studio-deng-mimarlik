import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import DengLogo from "./DengLogo";

const navItems = [
  { label: "Hakkımızda", path: "/about" },
  { label: "Misyon & Vizyon", path: "/mission" },
  { label: "Projeler", path: "/projects" },
  { label: "Ekip", path: "/team" },
  { label: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-[0_1px_30px_-10px_hsl(var(--primary)/0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="relative group">
          <DengLogo size="sm" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-[13px] font-display font-medium tracking-wide transition-colors hover:text-foreground py-1 ${
                location.pathname === item.path ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 text-[13px] font-display font-medium tracking-wide bg-primary text-primary-foreground px-6 py-2.5 hover:bg-primary/90 transition-all duration-300 flex items-center gap-1.5 group"
          >
            İletişim
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground relative z-50"
          aria-label="Menüyü aç/kapat"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-background z-40 flex flex-col justify-center"
          >
            <nav className="flex flex-col px-12 gap-1">
              {[{ label: "Ana Sayfa", path: "/" }, ...navItems, { label: "İletişim", path: "/contact" }].map(
                (item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-3xl md:text-4xl font-serif font-medium py-3 transition-colors border-b border-border ${
                        location.pathname === item.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
