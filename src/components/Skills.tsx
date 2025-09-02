import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Globe, 
  Laptop, 
  Brain, 
  Database,
  Server,
  Smartphone,
  Palette
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C, C++", level: 90 },
        { name: "Python", level: 95 },
        { name: "R", level: 80 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Web Technologies", 
      icon: Globe,
      skills: [
        { name: "HTML, CSS", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      title: "Software & Tools",
      icon: Laptop,
      skills: [
        { name: "MS Office", level: 95 },
        { name: "Canva", level: 80 },
        { name: "G-Suite", level: 85 },
        { name: "Git & GitHub", level: 90 }
      ]
    },
    {
      title: "Machine Learning Libraries",
      icon: Brain,
      skills: [
        { name: "NumPy", level: 90 },
        { name: "Pandas", level: 95 },
        { name: "Matplotlib", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 85 },
        { name: "Jupyter", level: 90 },
        { name: "Spacy", level: 75 }
      ]
    }
  ];

  const additionalSkills = [
    { category: "Backend", icon: Server, skills: ["Express.js", "Firebase", "REST APIs", "Authentication"] },
    { category: "Database", icon: Database, skills: ["MongoDB", "MySQL", "Firebase Firestore"] },
    { category: "Mobile", icon: Smartphone, skills: ["Responsive Design", "Progressive Web Apps"] },
    { category: "Design", icon: Palette, skills: ["UI/UX Principles", "Canva", "Modern Design Systems"] }
  ];

  return (
    <section id="skills" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning full-stack development, machine learning, 
              and modern software engineering practices
            </p>
          </div>

          {/* Main Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="portfolio-card-gradient border-border/50 portfolio-shadow portfolio-transition hover:scale-[1.02]"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <category.icon className="h-6 w-6 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-10">
              Additional <span className="text-primary">Expertise</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalSkills.map((skillSet, index) => (
                <Card 
                  key={index} 
                  className="portfolio-card-gradient border-border/50 portfolio-transition hover:scale-105 hover:portfolio-glow"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <skillSet.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold text-lg">{skillSet.category}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillSet.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground portfolio-transition"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <Card className="portfolio-card-gradient border-border/50 portfolio-shadow max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="text-gradient">Continuous Learning</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm constantly expanding my skill set and staying updated with the latest technologies. 
                  Currently exploring advanced AI/ML concepts, cloud computing, and modern DevOps practices 
                  to build more scalable and efficient solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;