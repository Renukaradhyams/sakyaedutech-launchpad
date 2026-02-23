import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Monitor, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { fadeUp, staggerContainer } from "@/config/motion";
import coursesData from "@/data/courses.json";

const Courses = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent/80 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-medium mb-4 border border-primary-foreground/20">
              10 Industry-Ready Programs
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4">
              Software & SAP <span className="text-accent">Training Courses</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Comprehensive training programs designed by working professionals with real-time projects and industry certification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto"
          >
            {coursesData.map((course) => (
              <motion.div
                key={course.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-elevated hover:border-accent/30 h-full flex flex-col transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-primary to-primary/90 p-5 md:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 bg-accent/20 backdrop-blur-sm text-accent rounded-full text-xs font-medium">
                      {course.level}
                    </span>
                    {course.certification && (
                      <div className="flex items-center gap-1 text-accent text-xs">
                        <Award className="w-3.5 h-3.5" />
                        <span>Certified</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-primary-foreground leading-tight">{course.title}</h3>
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">{course.shortDescription}</p>
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span className="text-foreground text-sm">Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Monitor className="w-3.5 h-3.5 text-accent" />
                      <span className="text-foreground text-sm">{course.mode}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-3.5 h-3.5 text-accent" />
                      <span className="text-foreground text-sm">By {course.trainerType}s</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-3.5 h-3.5 text-accent" />
                      <span className="text-foreground text-sm">Real-Time Project</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {course.toolsAndTechnologies.slice(0, 4).map((tool) => (
                      <span key={tool} className="px-2 py-0.5 bg-muted text-muted-foreground text-[10px] font-medium rounded">{tool}</span>
                    ))}
                  </div>
                  <Link to={`/courses/${course.id}`} className="mt-auto">
                    <Button variant="gradient" className="w-full">View Details <ArrowRight className="w-4 h-4" /></Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Floating Register Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 right-6 z-50"
      >
        <Link to="/register">
          <Button variant="gradient" size="lg" className="shadow-elevated">
            Register Now <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </motion.div>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-accent/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Not Sure Which Course?</h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">Register and our team will help you choose based on your background.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register"><Button variant="hero" size="lg">Register Now</Button></Link>
            <Link to="/contact"><Button variant="heroOutline" size="lg">Contact Us</Button></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
