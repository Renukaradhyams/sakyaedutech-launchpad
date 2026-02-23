import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Monitor, Award, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/config/motion";
import coursesData from "@/data/courses.json";

export const CoursesPreview = () => {
  const featuredCourses = coursesData.slice(0, 6);

  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3"
          >
            Our Programs
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Industry-Ready Courses
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg"
          >
            A quick preview of our programs. Click any course to explore full
            details.
          </motion.p>
        </motion.div>

        {/* New block structure */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {featuredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative"
            >
              <Link to={`/courses/${course.id}`} className="block h-full">
                <motion.div
                  className="group relative h-full rounded-xl border border-border bg-card overflow-hidden shadow-card transition-all duration-300"
                  variants={{
                    rest: { y: 0, boxShadow: "0 8px 20px rgba(0,0,0,0.04)" },
                    hover: { y: -6, boxShadow: "0 18px 40px rgba(0,0,0,0.12)" },
                  }}
                >
                  {/* Top accent bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary to-accent" />

                  <div className="p-6 flex flex-col h-full">
                    {/* Meta */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 bg-accent/15 text-accent rounded-full text-xs font-medium">
                        {course.level}
                      </span>

                      {course.certification && (
                        <div className="flex items-center gap-1 text-accent text-xs">
                          <Award className="w-3.5 h-3.5" />
                          <span>Certified</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground leading-snug mb-4 transition-colors duration-300 group-hover:text-primary">
                      {course.title}
                    </h3>

                    {/* Info */}
                    <div className="mt-auto space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">
                          {course.mode}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    variants={{
                      rest: { opacity: 0, y: 10, pointerEvents: "none" },
                      hover: { opacity: 1, y: 0, pointerEvents: "auto" },
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/50 to-accent/50 flex items-center justify-center"

                  >
                    <div className="text-center px-6">
                      <div className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 text-primary-foreground text-sm font-medium">
                        View full course details
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            View all courses
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
