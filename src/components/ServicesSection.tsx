import { 
  Globe, 
  Smartphone, 
  Cog, 
  Search, 
  Database, 
  Shield,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Beautiful, responsive websites built with modern technologies like HTML, CSS, and JavaScript.",
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    description: "Powerful web apps using React, TypeScript, and Firebase for seamless user experiences.",
  },
  {
    icon: Cog,
    title: "IT Automation",
    description: "Streamline your workflows with custom automation solutions that save time and reduce errors.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your online visibility with proven SEO strategies and technical optimization.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Secure and scalable database architecture for your business data needs.",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "24/7 support and maintenance to keep your systems running smoothly.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Solutions That Drive <span className="text-gradient">Success</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive IT services to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all duration-300"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-outline inline-flex items-center gap-2">
            View All Services <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
