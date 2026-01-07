import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Rahman",
    role: "CEO, TechStart BD",
    content: "ZiptoCode delivered our e-commerce platform ahead of schedule. Their attention to detail and commitment to quality is exceptional.",
    rating: 5,
  },
  {
    name: "Sarah Khan",
    role: "Director, EduLearn",
    content: "The school management system they built has transformed how we operate. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Mohammad Ali",
    role: "Founder, HealthPlus",
    content: "Professional team with excellent communication. They understood our requirements perfectly and delivered a great solution.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 relative hover:border-primary/50 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
