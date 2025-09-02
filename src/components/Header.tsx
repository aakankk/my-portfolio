import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" }
  ];

  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 portfolio-transition ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 portfolio-shadow' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold portfolio-transition hover:scale-105"
          >
            <span className="text-gradient">Aakanksha</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary portfolio-transition font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links & Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/aakanksha21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/20 portfolio-transition hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/aakanksha-kumari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/20 portfolio-transition hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <Button 
              size="sm" 
              className="portfolio-glow portfolio-transition hover:scale-105"
              asChild
            >
              <a href="mailto:aakanksha21@iitk.ac.in">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 portfolio-transition hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 portfolio-shadow">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-foreground hover:text-primary portfolio-transition font-medium py-2"
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="flex items-center space-x-4 pt-4 border-t border-border/30">
                  <a 
                    href="https://github.com/aakanksha21" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-primary/20 portfolio-transition"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/aakanksha-kumari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-primary/20 portfolio-transition"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <Button 
                    size="sm" 
                    className="flex-1 portfolio-glow"
                    asChild
                  >
                    <a href="mailto:aakanksha21@iitk.ac.in">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Me
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;