import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ridoan Zisan Portfolio",
    category: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing skills, projects and achievements with stunning animations.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://ridoan-zisan.netlify.app",
  },
  {
    title: "ZiptoCode Tech Solution",
    category: "Business Website",
    description: "Professional tech company website with modern UI, floating chat, WhatsApp integration and SEO optimization.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://ziptocode.netlify.app",
  },
  {
    title: "E-Commerce Dashboard",
    category: "Web Application",
    description: "Complete admin dashboard for managing products, orders, customers and analytics with real-time updates.",
    tags: ["React", "Firebase", "Chart.js"],
    link: "#contact",
  },
  {
    title: "School Management System",
    category: "Educational Platform",
    description: "Full-featured school management with student enrollment, attendance tracking, grade management and parent portal.",
    tags: ["TypeScript", "Node.js", "MongoDB"],
    link: "#contact",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Featured Projects
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Our Recent <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore some of our successful projects that have transformed businesses.
          </p>
          <a
            href="/store"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            View All Projects <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-4xl text-primary/30 font-bold">
                  {project.title.charAt(0)}
                </span>
              </div>

              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : "_self"}
                  rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all duration-300"
                >
                  {project.link.startsWith("http") ? "Live Preview" : "View Details"} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
