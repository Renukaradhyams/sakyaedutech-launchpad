import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { slideLeft, slideRight, staggerContainer } from "@/config/motion";

export const HowToRegister = () => {
  const steps = [
    "Fill the registration form with your details",
    "Select your preferred course",
    "Choose if you're a student or working professional",
    "Our training team contacts you within 24 hours",
    "Get batch details and training mode options",
    "Start your industry-ready learning journey",
  ];

  return (
    <section className="py-24 md:py-36 bg-gradient-to-br from-primary via-primary to-accent/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.15%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      {/* Decorative circles */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full border border-primary-foreground/10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full border border-primary-foreground/10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto"
        >
          {/* Content */}
          <motion.div variants={slideLeft}>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-6">
              How to Register for a Course?
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Fill the registration form, select your course and our training team will contact you shortly with batch and training mode details.
            </p>

            <div className="space-y-3 mb-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-accent-foreground" />
                  </div>
                  <span className="text-primary-foreground text-sm md:text-base">{step}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/register">
              <Button variant="hero" size="lg" className="group">
                Register Now 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Illustration */}
          <motion.div
            variants={slideRight}
            className="relative"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-primary-foreground/20">
              <div className="bg-card rounded-xl p-5 md:p-6 shadow-elevated">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">Registration Form</h3>
                    <p className="text-xs text-muted-foreground">Quick and easy process</p>
                  </div>
                </div>

                {/* Form Preview */}
                <div className="space-y-3">
                  <div className="h-9 bg-muted rounded-lg" />
                  <div className="h-9 bg-muted rounded-lg" />
                  <div className="h-9 bg-muted rounded-lg" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-9 bg-muted rounded-lg" />
                    <div className="h-9 bg-muted rounded-lg" />
                  </div>
                  <div className="h-20 bg-muted rounded-lg" />
                  <div className="h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-medium text-sm">Submit Registration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -8, 0] }}
              transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full font-semibold text-xs shadow-lg flex items-center gap-1.5"
            >
              <CheckCircle className="w-3 h-3" />
              No Payment Required
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, 8, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-card text-foreground px-3 py-1.5 rounded-full font-semibold text-xs shadow-lg border border-border"
            >
              📞 We'll call you back
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
