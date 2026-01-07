import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              ZiptoCode Tech Solution
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-xl mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Your Idea{" "}
            <span className="text-gradient">Our Code</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            We build websites, web apps, and smart IT solutions for businesses,
            organizations, and educational institutions. Your digital transformation
            starts here.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="#contact" className="btn-primary flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="btn-outline">
              Explore Services
            </a>
          </div>

          {/* Feature Pills */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { icon: Code, text: "Custom Development" },
              { icon: Zap, text: "Fast Delivery" },
              { icon: Shield, text: "Secure Solutions" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
