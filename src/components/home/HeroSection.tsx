import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Briefcase, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { fadeUp, staggerContainer } from "@/config/motion";
import { appConfig } from "@/config/appConfig";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const stats = [
    { value: appConfig.stats.industryTrainers, label: "Industry Trainers", suffix: "+", icon: Users },
    { value: appConfig.stats.realTimeProjects, label: "Real-Time Projects", suffix: "+", icon: Briefcase },
    { value: appConfig.stats.learnersTrailed, label: "Learners Trained", suffix: "+", icon: BookOpen },
    { value: appConfig.stats.courses, label: "Software & SAP Courses", suffix: "", icon: Award },
  ];

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        // className="absolute inset-0 bg-cover bg-center bg-no-repeat"
         className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center -60px",
          } as React.CSSProperties}
        // style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/70" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.15%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      {/* Animated floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full border border-primary-foreground/10"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-20 w-96 h-96 rounded-full border border-primary-foreground/10"
      />
      
      {/* <div className="container mx-auto px-4 py-20 md:py-32 relative z-10"> */}
      
      <div className="container mx-auto px-4 pt-14 pb-20 md:pt-20 md:pb-28 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-medium mb-6 border border-primary-foreground/20">
              🚀 Transform Your Career with Industry Experience
            </span>
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
           Build Industry-Ready Skills with{" "}
            <span className="text-accent">Real-World Project Experience</span>
          </motion.h1>
          
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/85 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Learn directly from working professionals. Build real-time projects inside our company and become industry ready.
          </motion.p>
          
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to="/courses">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                Explore Courses
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
                Register Now 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-5 md:p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300"
              >
                <stat.icon className="w-7 h-7 text-accent mx-auto mb-3" />
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-primary-foreground/75">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
