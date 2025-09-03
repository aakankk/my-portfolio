import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Users } from "lucide-react";
import projectsBg from "@/assets/projects-bg.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Imagify - MERN Stack Text-to-Image Generator",
      description: "AI-powered application that generates high-quality images from text prompts using OpenAI API. Built with secure REST APIs, responsive React frontend, and scalable architecture for future extensions.",
      type: "Self Project",
      date: "July '25",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "OpenAI API", "REST API"],
      highlights: [
        "Real-time image rendering with prompt-based search",
        "Enhanced user experience with scalable architecture",
        "Secure API implementation"
      ],
      github: "https://github.com/aakankk/imagify",
    },
    {
      title: "Netflix-Clone - Full Stack Streaming Platform",
      description: "Netflix-like web application using React.js for frontend & Firebase for authentication & database management. Implemented secure user authentication, dynamic content with reusable React components.",
      type: "Self Project", 
      date: "May '25",
      technologies: ["React.js", "Firebase", "Authentication", "Responsive UI"],
      highlights: [
        "Secure user authentication & database management",
        "Dynamic content with reusable components",
        "Responsive UI for enhanced user experience"
      ],
      github: "https://github.com/aakankk/netflix-clone"
    },
    {
      title: "Rice Variety Prediction using PyTorch",
      description: "Deep learning model to classify rice grain varieties based on physical characteristics from Kaggle dataset. Implemented preprocessing, feature normalization, and custom neural network architecture.",
      type: "Self Project",
      date: "Mar '25", 
      technologies: ["PyTorch", "Python", "Machine Learning", "Data Analysis"],
      highlights: [
        "End-to-end ML pipeline with training & validation",
        "Custom neural network architecture",
        "Visualization of results and model accuracy"
      ],
      github: "https://github.com/aakankk/Project1"
    },
    {
      title: "XORRO PDF Analysis",
      description: "Advanced 99% accuracy Q tracking advanced XORRO PDF analysis using Q tuning regularization and learning rate optimization. Course project under Prof. Purushottam Kar, IIT Kanpur.",
      type: "Course Project",
      date: "May '24 - June '24",
      technologies: ["Machine Learning", "PDF Analysis", "Optimization", "Python"],
      highlights: [
        "99% accuracy in XORRO PDF analysis",
        "Q tuning regularization implementation",
        "Advanced learning rate optimization"
      ],
      professor: "Prof. Purushottam Kar, IIT KANPUR"
    },
    {
      title: "Computer Vision Library using G",
      description: "Developed a library showcasing expertise in image basics, pixel manipulation & edge detection. Applied algorithms for image enhancement, color shifting & edge detection using feature extraction.",
      type: "Self Project",
      date: "May '23 - July '23",
      technologies: ["Computer Vision", "Image Processing", "Feature Extraction", "G Language"],
      highlights: [
        "Advanced pixel manipulation techniques",
        "Edge detection using feature extraction algorithms",
        "Color space transformations & enhancement"
      ],
      github: "https://github.com/aakankk/Computer-vision-using-C-"
    },
    {
      title: "Finance Equity Market Analysis",
      description: "Evaluated 20+ stocks across 7 industries benchmarking financial performance across 10+ parameters. Achieved over 4% market returns & compiled analysis findings into a comprehensive investment report.",
      type: "Self Project", 
      date: "March '23 - May '23",
      technologies: ["Financial Analysis", "Data Analysis", "Market Research", "Investment Strategy"],
      highlights: [
        "20+ stocks across 7 industries analyzed",
        "4%+ market returns achieved",
        "Comprehensive investment strategy report"
      ]
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${projectsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative solutions spanning full-stack development, 
              machine learning, and data analysis
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="portfolio-card-gradient border-border/50 portfolio-shadow portfolio-transition hover:scale-[1.02] hover:portfolio-glow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                    <Badge 
                      variant={project.type === "Self Project" ? "default" : "secondary"}
                      className={project.type === "Self Project" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {project.type}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-3 leading-tight">
                    {project.title}
                  </CardTitle>
                  
                  {project.professor && (
                    <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
                      <Users className="h-4 w-4" />
                      {project.professor}
                    </div>
                  )}
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground portfolio-transition"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;