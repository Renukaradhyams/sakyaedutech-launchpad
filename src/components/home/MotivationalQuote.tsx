import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import quoteBg from "@/assets/quote-bg.jpg";

export const MotivationalQuote = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${quoteBg})` }}
      />
      
      {/* Overlay with blur effect */}
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
      
      {/* Subtle decorative circles */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/10"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary-foreground/10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <div className="w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border border-accent/30">
              <Quote className="w-7 h-7 text-accent" />
            </div>
          </motion.div>
          
          {/* Quote Text */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-8"
          >
            "Learning builds careers.{" "}
            <span className="text-accent">Practice builds professionals.</span>"
          </motion.blockquote>
          
          {/* Decorative Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"
          />
          
          {/* Attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-primary-foreground/60 text-base md:text-lg"
          >
            — SakyaEduTech Philosophy
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
