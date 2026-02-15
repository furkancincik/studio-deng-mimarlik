import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold">STUDIO</h3>
            <p className="text-sm opacity-70 font-sans leading-relaxed">
              Content will be added here
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase opacity-50 font-sans">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {["About", "Mission & Vision", "Projects", "Team", "Blog", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity font-sans"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase opacity-50 font-sans">Contact</h4>
            <div className="space-y-2 text-sm opacity-70 font-sans">
              <p>Address will be added here</p>
              <p>Phone will be added here</p>
              <p>Email will be added here</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase opacity-50 font-sans">Social</h4>
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
          <p className="text-xs opacity-50 font-sans">© {new Date().getFullYear()} Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity font-sans">Privacy Policy</a>
            <a href="#" className="text-xs opacity-50 hover:opacity-100 transition-opacity font-sans">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
