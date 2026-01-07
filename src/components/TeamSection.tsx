import { Linkedin, Github, Mail } from "lucide-react";

const team = [
  {
    name: "Md Ridoan Mahmud Zisan Zisan",
    role: "Founder & Lead Developer",
    specialization: "Full-Stack Development",
  },
  {
    name: "Anonymous 1",
    role: "UI/UX Designer",
    specialization: "Design & Branding",
  },
  {
    name: "Anonymous 2",
    role: "Backend Developer",
    specialization: "Database & APIs",
  },
  {
    name: "Anonymous 3",
    role: "Project Manager",
    specialization: "Client Relations",
  },
];

const TeamSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Meet the <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate team dedicated to delivering exceptional digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group glass-card p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/40 transition-colors duration-300">
                <span className="text-3xl font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-1">
                {member.role}
              </p>
              <p className="text-muted-foreground text-xs mb-4">
                {member.specialization}
              </p>

              <div className="flex items-center justify-center gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
