import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Driven by curiosity and fueled by innovation, I'm passionate about creating 
              technology solutions that make a meaningful impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Currently pursuing my final year in Mathematics and Scientific Computing at 
                  <span className="text-primary font-semibold"> IIT Kanpur</span>, I've cultivated 
                  a unique blend of mathematical rigor and technological innovation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My passion lies in building full-stack applications, exploring machine learning 
                  algorithms, and contributing to open-source projects. I believe in the power of 
                  technology to solve real-world problems and create positive impact.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="portfolio-card-gradient border-border/50 portfolio-transition hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">6+</div>
                    <div className="text-sm text-muted-foreground">Key Projects</div>
                  </CardContent>
                </Card>
                
                <Card className="portfolio-card-gradient border-border/50 portfolio-transition hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary">Multiple</div>
                    <div className="text-sm text-muted-foreground">Achievements</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Content - Education & Info */}
            <div className="space-y-6">
              {/* Education */}
              <Card className="portfolio-card-gradient border-border/50 portfolio-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold">Education</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="default" className="bg-primary text-primary-foreground">
                          2021 - Present
                        </Badge>
                        <Badge variant="outline" className="border-primary text-primary">
                          Current
                        </Badge>
                      </div>
                      <h4 className="text-xl font-semibold mb-2">B.S. Mathematics & Scientific Computing</h4>
                      <p className="text-primary font-semibold mb-1">
                        Indian Institute of Technology, Kanpur
                      </p>
                      <p className="text-muted-foreground">
                        Specializing in computational mathematics, data structures, and algorithm design
                      </p>
                    </div>

                    <div className="border-l-2 border-muted pl-6">
                      <Badge variant="secondary" className="mb-2">2020</Badge>
                      <h4 className="text-lg font-semibold mb-1">CBSE(XII)</h4>
                      <p className="text-muted-foreground">JVM Shyamali, Ranchi</p>
                    </div>

                    <div className="border-l-2 border-muted pl-6">
                      <Badge variant="secondary" className="mb-2">2018</Badge>
                      <h4 className="text-lg font-semibold mb-1">CBSE(X)</h4>
                      <p className="text-muted-foreground">DAV Public School Gandhi Nagar, Ranchi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="portfolio-card-gradient border-border/50 portfolio-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <MapPin className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-bold">Contact</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-lg font-semibold text-primary">aakankshak21@iitk.ac.in</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-lg font-semibold">IIT Kanpur, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;