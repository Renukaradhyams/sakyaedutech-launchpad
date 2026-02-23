import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/config/motion";

export const WhoWeAre = () => {
  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-sm font-semibold tracking-wide text-primary mb-3"
          >
            WHO WE ARE
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            An Industry-driven learning platform built by working professionals
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg leading-relaxed mb-10"
          >
            We are an EdTech platform created by an IT company with the mission of
            preparing learners for real industry roles. Our training approach
            focuses on practical learning, real project exposure and professional
            mentoring delivered by working industry experts.
          </motion.p>

        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-xl border bg-card p-6 text-center"
          >
            <h4 className="text-lg font-semibold mb-2">
              Industry focused learning
            </h4>
            <p className="text-muted-foreground text-sm">
              Training aligned with real company workflows and current industry
              practices.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-xl border bg-card p-6 text-center"
          >
            <h4 className="text-lg font-semibold mb-2">
              Real project exposure
            </h4>
            <p className="text-muted-foreground text-sm">
              Learners work on real project scenarios guided by experienced
              professionals.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-xl border bg-card p-6 text-center"
          >
            <h4 className="text-lg font-semibold mb-2">
              Professional mentoring
            </h4>
            <p className="text-muted-foreground text-sm">
              Continuous mentor support, reviews and feedback throughout the
              learning journey.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
