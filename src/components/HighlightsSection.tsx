import { Globe, TrendingUp, Cpu, Shield } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Global Standards",
    description: "We follow international best practices and coding standards.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Built to grow with your business, from startup to enterprise.",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description: "We use cutting-edge technologies for optimal performance.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every project is thoroughly tested and optimized for success.",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-y border-primary/20">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 border border-primary/30">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
