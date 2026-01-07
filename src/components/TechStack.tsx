const technologies = [
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "SEO", color: "#E91E63" },
  { name: "GitHub", color: "#E91E63" },
  { name: "Netlify", color: "#00C7B7" },
  { name: "Vercel", color: "#E91E63" },
  { name: "Automation", color: "#E91E63" },
];

const TechStack = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Tech Stack
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Technologies We <span className="text-gradient">Master</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group px-6 py-3 rounded-lg bg-card/60 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
