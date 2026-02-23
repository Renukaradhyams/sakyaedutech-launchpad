import { motion } from "framer-motion";
import {
  UserCircle,
  BookOpen,
  Wrench,
  Briefcase,
  Users,
  GitBranch,
  CheckCircle,
  Award,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/config/motion";
import roadmapBg from "@/assets/roadmap-bg.jpg";

const roadmapSteps = [
  {
    icon: UserCircle,
    title: "Profile Understanding",
    description:
      "We assess if you're a student or working professional to customize your learning path.",
  },
  {
    icon: BookOpen,
    title: "Core Technical Foundation",
    description:
      "Build strong fundamentals with structured curriculum and practical exercises.",
  },
  {
    icon: Wrench,
    title: "Tool-Based Training",
    description:
      "Hands-on experience with industry-standard tools and technologies.",
  },
  {
    icon: Briefcase,
    title: "Real-Time Project",
    description:
      "Work on actual projects inside our company environment with real deliverables.",
  },
  {
    icon: Users,
    title: "Mentor Reviews",
    description:
      "Sprint-based learning with continuous feedback from working professionals.",
  },
  {
    icon: GitBranch,
    title: "Industry Workflows",
    description:
      "Learn agile methodologies, code reviews, and team collaboration practices.",
  },
  {
    icon: CheckCircle,
    title: "Final Evaluation",
    description:
      "Comprehensive assessment of skills through project presentations and reviews.",
  },
  {
    icon: Award,
    title: "Certification",
    description:
      "Industry-recognized certificate upon successful completion of all modules.",
  },
];

export const RoadmapSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${roadmapBg})` }}
      />
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-sm font-semibold tracking-wider text-primary mb-3"
            >
              OUR TRAINING APPROACH
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5"
            >
              How We Train You
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-base md:text-lg"
            >
              A structured learning journey designed for real industry roles
            </motion.p>
          </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group relative rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Step badge */}
              <div className="absolute -top-3 left-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground shadow">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4 flex items-center justify-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary">
                  <step.icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
