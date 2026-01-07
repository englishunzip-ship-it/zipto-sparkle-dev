import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import ziptocodelogo from '@/assets/ziptocode-logo.png';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <nav className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          {/* Company Name with Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src={ziptocodelogo} alt="ZiptoCode" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-foreground">
              Zipto<span className="text-primary">Code</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="/store"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 btn-primary text-sm"
          >
            <ShoppingCart size={16} />
            ZiptoCode Store
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 animate-fade-up">
            <div className="flex flex-col py-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/store"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary flex items-center justify-center gap-2 mt-4 text-sm"
              >
                <ShoppingCart size={16} />
                ZiptoCode Store
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
