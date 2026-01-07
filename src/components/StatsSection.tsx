import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Award, Briefcase } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { value: 4, suffix: "+", label: "Years Experience", icon: TrendingUp },
  { value: 99, suffix: "%", label: "Client Satisfaction", icon: Award },
  { value: 30, suffix: "+", label: "Happy Clients", icon: Users },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved together with our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="glass-card-glow p-8 text-center relative overflow-hidden transition-all duration-500 hover:scale-105 hover:border-primary/50">
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Number with Enhanced Animation */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-3 relative">
                  {isVisible ? (
                    <CountUpNumber target={stat.value} suffix={stat.suffix} delay={index * 200} />
                  ) : (
                    <span className="opacity-50">0{stat.suffix}</span>
                  )}
                  {/* Glow Effect */}
                  <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Label */}
                <p className="text-muted-foreground text-sm font-medium relative z-10">{stat.label}</p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUpNumber = ({ target, suffix, delay }: { target: number; suffix: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2500;
    const steps = 80;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Easing function for smooth animation
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      current = target * easeOutQuart;

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, hasStarted]);

  return (
    <span className="inline-block tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export default StatsSection;
