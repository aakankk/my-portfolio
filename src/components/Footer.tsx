import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/50 border-t border-border/30">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on innovative projects, 
              or simply chat about technology and mathematics.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href="https://github.com/aakanksha21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground portfolio-transition hover:scale-110 portfolio-glow"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/aakanksha-kumari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground portfolio-transition hover:scale-110 portfolio-glow"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:aakanksha21@iitk.ac.in"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground portfolio-transition hover:scale-110 portfolio-glow"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            {/* Contact Button */}
            <Button 
              size="lg" 
              className="portfolio-glow portfolio-transition hover:scale-105 mb-8"
              asChild
            >
              <a href="mailto:aakanksha21@iitk.ac.in">
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div className="border-t border-border/30 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>© 2025 Aakanksha Kumari. Made with</span>
                <Heart className="h-4 w-4 text-primary fill-current" />
                <span>and lots of coffee</span>
              </div>

              {/* Back to Top */}
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground portfolio-transition"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-6 text-sm text-muted-foreground">
              <p>Final Year Undergraduate • Mathematics & Scientific Computing • IIT Kanpur</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;