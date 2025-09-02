import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Name & Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold portfolio-transition hover:scale-105">
              <span className="text-gradient">Aakanksha</span>
              <br />
              <span className="text-foreground">Kumari</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Final Year Undergraduate
            </p>
            
            <p className="text-lg text-primary font-semibold">
              Mathematics & Scientific Computing • IIT Kanpur
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl">
              Passionate <span className="text-primary font-semibold">Full-Stack Developer</span> and 
              <span className="text-primary font-semibold"> Machine Learning Enthusiast</span> with expertise in 
              modern web technologies and data science. Building innovative solutions at the intersection of 
              technology and mathematics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="portfolio-glow portfolio-transition hover:scale-105"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground portfolio-transition hover:scale-105"
                onClick={() => scrollToSection('about')}
              >
                About Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a 
                href="https://github.com/aakanksha21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground portfolio-transition hover:scale-110 portfolio-glow"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:aakanksha21@iitk.ac.in" 
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground portfolio-transition hover:scale-110 portfolio-glow"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/aakanksha-kumari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground portfolio-transition hover:scale-110 portfolio-glow"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce portfolio-transition hover:scale-110"
              aria-label="Scroll to next section"
            >
              <ArrowDown className="h-8 w-8 text-primary" />
            </button>
          </div>

          {/* Right Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/1acec672-1a51-46ec-890e-f9129927f47d.png"
                alt="Aakanksha Kumari" 
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl portfolio-glow portfolio-transition hover:scale-105 border-4 border-primary/30"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;