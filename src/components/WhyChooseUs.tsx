import { Users, Clock, Lightbulb, Headphones, Award, Shield, Rocket, Target } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled developers with years of experience in modern technologies.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver projects on schedule.",
  },
  {
    icon: Lightbulb,
    title: "Agile Methodology",
    description: "Flexible development approach that adapts to your needs.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your systems run smoothly.",
  },
];

const guarantees = [
  { icon: Award, text: "100% Quality Guaranteed" },
  { icon: Shield, text: "Secure & Reliable Solutions" },
  { icon: Rocket, text: "Fast Turnaround Time" },
  { icon: Target, text: "Goal-Oriented Approach" },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="heading-lg mt-3 mb-6">
              We Make Your <span className="text-gradient">Vision Reality</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              At ZiptoCode Tech Solution, we combine technical expertise with creative
              thinking to deliver solutions that exceed expectations. Our commitment
              to quality and customer satisfaction sets us apart.
            </p>
            
            {/* Guarantee Badges */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {guarantees.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn-primary inline-block">
              Work With Us
            </a>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Value Proposition */}
        <div className="mt-16 glass-card p-8 text-center">
          <h3 className="heading-md mb-4">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Join 30+ satisfied clients who have trusted ZiptoCode Tech Solution to build their digital presence. 
            From startups to established enterprises, we deliver results that matter.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="px-4 py-2 bg-primary/10 rounded-full">Free Consultation</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">No Hidden Costs</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;