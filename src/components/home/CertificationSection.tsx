import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { slideLeft, slideRight, staggerContainer } from "@/config/motion";
import certificationBg from "@/assets/certification-bg.jpg";

const CERTIFICATE_IMAGE = "/placeholder.svg";

export const CertificationSection = () => {
  const benefits = [
    "Industry-recognized certification",
    "Verified by working professionals",
    "Based on real project completion",
    "Validates practical skills",
    "Shareable on LinkedIn",
    "Includes project portfolio",
  ];

  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${certificationBg})`,
          backgroundPosition: "left -380px",
          backgroundSize: "150% auto",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto"
        >
          {/* Certificate Preview */}
          <motion.div variants={slideLeft} className="relative order-2 lg:order-1">
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-3 md:p-4 border border-primary-foreground/20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="overflow-hidden shadow-elevated bg-card"
              >
                <img
                  src={CERTIFICATE_IMAGE}
                  alt="SakyaEduTech certificate template"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Floating Verified Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              animate={{ y: [0, -8, 0] }}
              className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              Verified Certificate
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={slideRight} className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-medium text-sm uppercase tracking-wider"
            >
              Industry Recognition
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-6"
            >
              Earn Your Certification
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Certificates are issued after successful evaluation and project completion. Our certifications are recognized by
              industry professionals and validate your practical skills.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-primary-foreground/90 text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
