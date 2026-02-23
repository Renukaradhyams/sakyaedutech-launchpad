import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, ArrowLeft, Clock, Users, Monitor, Award, CheckCircle, 
  Briefcase, BookOpen, Wrench, GraduationCap, Quote 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "@/config/motion";
import coursesData from "@/data/courses.json";
import trainersData from "@/data/trainers.json";
import reviewsData from "@/data/reviews.json";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = coursesData.find(c => c.id === courseId);

  if (!course) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Course Not Found</h1>
            <Link to="/courses">
              <Button variant="gradient">
                <ArrowLeft className="w-4 h-4" /> Back to Courses
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Get a relevant trainer (just pick one for display)
  const trainer = trainersData[Math.floor(Math.random() * trainersData.length)];
  
  // Get reviews for this course
  const courseReviews = reviewsData.filter(r => r.course === course.title).slice(0, 2);
  const displayReviews = courseReviews.length > 0 ? courseReviews : reviewsData.slice(0, 2);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/courses" className="inline-flex items-center gap-2 text-accent hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Courses
            </Link>
            
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                {course.level}
              </span>
              <span className="px-3 py-1 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium">
                {course.mode}
              </span>
              {course.certification && (
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium flex items-center gap-1">
                  <Award className="w-3 h-3" /> Certified
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {course.title}
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-3xl">
              {course.shortDescription}
            </p>

            <div className="flex flex-wrap gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <span>By {course.trainerType}s</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent" />
                <span>Real-Time Project</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Skills & Tools */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Wrench className="w-6 h-6 text-accent" />
                  Skills & Technologies
                </motion.h2>
                
                <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-4">Skills Covered</h3>
                    <div className="space-y-2">
                      {course.skillsCovered.map(skill => (
                        <div key={skill} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-4">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {course.toolsAndTechnologies.map(tool => (
                        <span key={tool} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Real-Time Project */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-accent" />
                  Real-Time Project Experience
                </motion.h2>
                <motion.div variants={fadeUp} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-border">
                  <p className="text-foreground leading-relaxed">
                    {course.realTimeProjectDescription}
                  </p>
                </motion.div>
              </motion.div>

              {/* Curriculum */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-accent" />
                  Curriculum Modules
                </motion.h2>
                <motion.div variants={fadeUp} className="space-y-3">
                  {course.curriculumModules.map((module, index) => (
                    <div 
                      key={module}
                      className="bg-card rounded-lg p-4 border border-border flex items-center gap-4 hover:shadow-card transition-shadow"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{index + 1}</span>
                      </div>
                      <span className="text-foreground">{module}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Who Should Join */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-accent" />
                  Who Should Join?
                </motion.h2>
                <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <GraduationCap className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Students & Freshers</h3>
                    <p className="text-muted-foreground text-sm">
                      Perfect for students looking to build industry-ready skills and get their first job in tech.
                    </p>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <Briefcase className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Working Professionals</h3>
                    <p className="text-muted-foreground text-sm">
                      Ideal for professionals looking to upskill, switch careers, or advance in their current role.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Reviews */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground mb-6">
                  Learner Reviews
                </motion.h2>
                <motion.div variants={fadeUp} className="space-y-4">
                  {displayReviews.map(review => (
                    <div key={review.id} className="bg-card rounded-xl p-6 border border-border">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">{review.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{review.name}</h4>
                          <p className="text-sm text-accent">{review.course}</p>
                        </div>
                      </div>
                      <Quote className="w-6 h-6 text-accent/30 mb-2" />
                      <p className="text-muted-foreground italic">{review.projectFeedback}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-xl p-6 border border-border shadow-card sticky top-24"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">Enroll in this Course</h3>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="text-foreground font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mode</span>
                    <span className="text-foreground font-medium">{course.mode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certification</span>
                    <span className="text-foreground font-medium">{course.certification ? "Yes" : "No"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project</span>
                    <span className="text-foreground font-medium">Real-Time</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Link to="/register" className="block">
                    <Button variant="gradient" className="w-full">
                      Register for this Course <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to="/contact" className="block">
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Trainer Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-semibold text-foreground mb-4">Your Trainer</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{trainer.name}</h4>
                    <p className="text-sm text-accent">{trainer.designation}</p>
                    <p className="text-xs text-muted-foreground">{trainer.yearsOfExperience}+ years exp.</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "{trainer.mentorMessage}"
                </p>
              </motion.div>

              {/* Certification Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-border"
              >
                <Award className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Industry Certification</h3>
                <p className="text-sm text-muted-foreground">
                  Earn a verified certificate upon successful completion of your real-time project and mentor evaluation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Register Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50 lg:hidden"
      >
        <Link to="/register">
          <Button variant="gradient" size="lg" className="shadow-elevated">
            Register Now <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </motion.div>
    </Layout>
  );
};

export default CourseDetail;
