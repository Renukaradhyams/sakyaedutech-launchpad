import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Users, Briefcase, HeadphonesIcon, Award, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { fadeUp, staggerContainer } from "@/config/motion";

const reasons = [
  {
    icon: BookOpen,
    title: "Industry-Relevant Curriculum",
    description: "Our courses are designed in collaboration with working professionals to ensure you learn skills that employers are actively seeking.",
    highlights: [
      "Updated course content matching market demands",
      "Real-world case studies and scenarios",
      "Latest tools and technologies coverage",
    ],
  },
  {
    icon: Users,
    title: "Working Professional Trainers",
    description: "Learn from currently employed professionals with hands-on industry experience who bring practical insights to every session.",
    highlights: [
      "Currently working in IT companies",
      "Real project experience sharing",
      "Personalized mentorship approach",
    ],
  },
  {
    icon: Target,
    title: "Real-Time Project Experience",
    description: "We believe in learning by doing. Work on actual projects inside our company environment throughout your training.",
    highlights: [
      "Work inside company environment",
      "Project-based learning approach",
      "Industry workflow exposure",
    ],
  },
  {
    icon: Briefcase,
    title: "Career Guidance & Support",
    description: "From resume building to interview preparation, we support you at every step of your career journey.",
    highlights: [
      "Resume and LinkedIn optimization",
      "Mock interview sessions",
      "Job placement assistance",
    ],
  },
];

const testimonials = [
  {
    quote: "SakyaEduTech's training was exactly what I needed. The real-time project experience made all the difference in my interviews.",
    name: "Rajesh K.",
    role: "Software Developer",
  },
  {
    quote: "The trainers are excellent and always available to clear doubts. The industry exposure helped me understand real work culture.",
    name: "Priya M.",
    role: "Full Stack Developer",
  },
];

const WhyUs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent/80 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-medium mb-4 border border-primary-foreground/20">
              Our Difference
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Why <span className="text-accent">SakyaEduTech</span>?
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80">
              Discover what makes us the preferred choice for professional training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-muted rounded-xl p-6 md:p-8 border border-border">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-5">
                      <reason.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-5 leading-relaxed">
                      {reason.description}
                    </p>
                    <ul className="space-y-2">
                      {reason.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-foreground text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                    <reason.icon className="w-20 h-20 md:w-24 md:h-24 text-primary/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeUp}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            >
              The SakyaEduTech Difference
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { icon: Award, label: "Industry Certification" },
              { icon: HeadphonesIcon, label: "Mentor Support" },
              { icon: Users, label: "Small Batch Sizes" },
              { icon: Briefcase, label: "Job Assistance" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-5 md:p-6 shadow-card border border-border hover:border-accent/30 text-center transition-all duration-300"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="font-semibold text-foreground text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3"
            >
              Student Success
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            >
              What Our Students Say
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border"
              >
                <div className="text-3xl text-accent mb-3">"</div>
                <p className="text-foreground text-sm md:text-base mb-5 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-accent/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8">
              Join SakyaEduTech today and take the first step towards a successful future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;
