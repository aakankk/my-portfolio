import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Users, 
  Trophy, 
  Calendar,
  MapPin,
  Star,
  Award
} from "lucide-react";

const Experience = () => {
  const positions = [
    {
      title: "Secretary",
      organization: "Fine Arts Team, Antaragni, IIT Kanpur",
      duration: "2022-23",
      type: "Leadership Role",
      location: "IIT Kanpur",
      responsibilities: [
        "Co-led a team of volunteers in a 6-volunteer providing logistics and F & B support across the 3 days of the cultural fest",
        "Organized 6+ fine arts events worth 20K+ prizes witnessing a total participation of 200+ from 30+ colleges of India"
      ],
      impact: "Successfully managed one of IIT Kanpur's largest cultural festivals with 200+ participants"
    },
    {
      title: "Junior Executive", 
      organization: "Enactus, Techkriti, IIT Kanpur",
      duration: "2021-22",
      type: "Executive Role",
      location: "IIT Kanpur",
      responsibilities: [
        "Co-ordinated with 14-member team to assemble 1st ever database of students from 30+ schools of Madhya Pradesh",
        "Registered for joint data setup & 1st time marketing strategy bringing outreach to 35k+ school exhibitions and workshops"
      ],
      impact: "Built comprehensive database reaching 35,000+ students across 30+ schools"
    },
    {
      title: "Junior Executive",
      organization: "Udgosh, IIT Kanpur", 
      duration: "2021-22",
      type: "Executive Role",
      location: "IIT Kanpur",
      responsibilities: [
        "Conducted open school quiz & talks witnessed by 150+ students of 6th-12th class divided across 3 pools",
        "Registered 18 schools for 6 open quiz activities bringing marketing & promotional of fest"
      ],
      impact: "Engaged 150+ students across 18 schools in educational activities and competitions"
    }
  ];

  const achievements = [
    {
      title: "FIITJEE Scholarship",
      description: "100% tuition waiver of 2.5L+ being top 10% of 1L+ students across India",
      year: "Academic",
      type: "scholarship"
    },
    {
      title: "National Science Olympiad",
      description: "International Rank 283 conducted by SOF in 20k+ schools in 14+ countries", 
      year: "Competition",
      type: "award"
    },
    {
      title: "Science, Art and Craft Exhibition",
      description: "Merit certificate for designing a model on judicious utilization of water",
      year: "Exhibition",
      type: "certificate"
    },
    {
      title: "Strategy Consulting & Digital Marketing",
      description: "Certified in virtual experience program by BCG and Fundamentals of digital marketing by Google",
      year: "Professional",
      type: "certification"
    },
    {
      title: "Machine Learning & Python",
      description: "Introduction to machine learning for trading by QuantInsti & First Python programme of UST by Coursera",
      year: "Technical",
      type: "certification"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience & <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building teams, driving impact, and creating meaningful change through 
              leadership and innovation
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-10 text-center">
              Positions of <span className="text-primary">Responsibility</span>
            </h3>
            
            <div className="space-y-8">
              {positions.map((position, index) => (
                <Card 
                  key={index} 
                  className="portfolio-card-gradient border-border/50 portfolio-shadow portfolio-transition hover:scale-[1.01] hover:portfolio-glow"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2 flex items-center gap-3">
                          <Briefcase className="h-5 w-5 text-primary" />
                          {position.title}
                        </CardTitle>
                        <p className="text-lg font-semibold text-primary mb-2">
                          {position.organization}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {position.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </div>
                        </div>
                      </div>
                      
                      <Badge 
                        variant="default" 
                        className="bg-primary text-primary-foreground self-start md:self-center"
                      >
                        {position.type}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1">→</span>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-primary">Impact:</span>
                      </div>
                      <p className="text-muted-foreground">{position.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-bold mb-10 text-center">
              Scholastic <span className="text-primary">Achievements</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="portfolio-card-gradient border-border/50 portfolio-transition hover:scale-105 hover:portfolio-glow"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        {achievement.type === 'scholarship' && <Trophy className="h-6 w-6 text-primary" />}
                        {achievement.type === 'award' && <Award className="h-6 w-6 text-primary" />}
                        {achievement.type === 'certificate' && <Star className="h-6 w-6 text-primary" />}
                        {achievement.type === 'certification' && <Badge className="h-6 w-6 text-primary" />}
                      </div>
                      
                      <Badge 
                        variant="outline" 
                        className="border-primary text-primary mb-3"
                      >
                        {achievement.year}
                      </Badge>
                      
                      <h4 className="font-bold text-lg mb-3 text-primary">
                        {achievement.title}
                      </h4>
                    </div>
                    
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="portfolio-card-gradient border-border/50 portfolio-shadow max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to <span className="text-gradient">Collaborate?</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm always excited to work on challenging projects and contribute to innovative teams. 
                  Let's build something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:aakanksha21@iitk.ac.in"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold portfolio-glow portfolio-transition hover:scale-105"
                  >
                    Get In Touch
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;