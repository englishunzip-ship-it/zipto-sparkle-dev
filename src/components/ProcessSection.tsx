import { Search, Target, Code, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "We analyze your requirements and understand your business goals through detailed consultation.",
    details: ["Requirement Analysis", "Goal Definition", "Scope Planning"],
  },
  {
    icon: Target,
    step: "02",
    title: "Strategy",
    description: "We create a comprehensive plan and choose the right technologies for optimal results.",
    details: ["Tech Selection", "Timeline Planning", "Resource Allocation"],
  },
  {
    icon: Code,
    step: "03",
    title: "Development",
    description: "Our team builds your solution with clean, scalable, and maintainable code.",
    details: ["Agile Development", "Quality Assurance", "Regular Updates"],
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "We deploy your project and provide ongoing support for long-term success.",
    details: ["Deployment", "Training", "24/7 Support"],
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-card/50 to-background overflow-hidden">
      <div className="container-max">
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A streamlined process that ensures quality delivery every time.
          </p>
        </div>

        {/* Desktop Flowchart */}
        <div className="hidden lg:block relative">
          {/* Main Connection Line */}
          <div className="absolute top-32 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />
          
          {/* Animated Glow on Line */}
          <div className="absolute top-32 left-[10%] right-[10%] h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-pulse" />

          <div className="grid grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Vertical Connection */}
                <div className="absolute top-[120px] left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent -translate-x-1/2" />
                
                {/* Node on Line */}
                <div className="absolute top-[116px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 z-10" />

                {/* Card */}
                <div className="glass-card-glow p-6 text-center hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 mt-36 relative">
                  {/* Step Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-primary/80 rounded-full shadow-lg shadow-primary/30">
                    <span className="text-sm font-bold text-primary-foreground tracking-wider">
                      STEP {step.step}
                    </span>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mt-4 mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 border border-primary/20">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 pt-4 border-t border-border/30">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow to Next */}
                {index < steps.length - 1 && (
                  <div className="absolute top-[130px] -right-3 z-20 hidden lg:block">
                    <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 group">
                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-background">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{step.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="glass-card p-5 flex-1 hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
