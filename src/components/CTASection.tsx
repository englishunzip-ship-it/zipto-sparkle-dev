import { ArrowRight, Check, Star, Clock, Shield, Headphones, CheckCircle } from "lucide-react";

const guarantees = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We deliver every project on schedule, keeping you updated throughout.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing ensures flawless performance across all devices.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is always available to assist you.",
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description: "We work until you're 100% satisfied with the final result.",
  },
];

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Our Promise Section */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Promise
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Why Clients <span className="text-gradient">Trust Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to delivering excellence in every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 border border-primary/20">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="glass-card-glow p-8 sm:p-12 text-center max-w-4xl mx-auto">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">Rated 5/5 by our clients</span>
          </div>

          <h2 className="heading-lg mb-4">
            Let's Build Something <span className="text-gradient">Amazing</span> Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Whether you need a stunning website, a powerful web application, or smart IT automation, 
            ZiptoCode Tech Solution is here to bring your ideas to life.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Free Project Consultation", "Transparent Pricing", "Dedicated Support"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://wa.me/8809638845910" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
