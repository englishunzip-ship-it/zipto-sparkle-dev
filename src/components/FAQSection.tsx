import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does ZiptoCode offer?",
    answer: "We offer website development, web application development, IT automation, SEO optimization, database solutions, and ongoing maintenance & support for businesses, organizations, and educational institutions.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple website may take 2-4 weeks, while complex web applications can take 2-3 months. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "What technologies do you use?",
    answer: "We work with modern technologies including HTML, CSS, JavaScript, TypeScript, React, Firebase, Node.js, and various database solutions. We choose the best stack based on your project requirements.",
  },
  {
    question: "How much does a project cost?",
    answer: "Pricing depends on project scope and complexity. We offer competitive rates and provide detailed quotes after understanding your requirements. Contact us for a free consultation.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer 24/7 support and maintenance packages to ensure your systems run smoothly after launch. We're committed to long-term partnerships with our clients.",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with four main phases: Discovery (understanding requirements), Strategy (planning), Development (building), and Launch (deployment with support).",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
