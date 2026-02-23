import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, TrendingUp, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { fadeUp, staggerContainer } from "@/config/motion";

const values = [
  {
    icon: Heart,
    title: "Student-Centric",
    description: "Every decision we make is guided by what's best for our students' success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality in curriculum design and training delivery.",
  },
  {
    icon: TrendingUp,
    title: "Industry Relevance",
    description: "Our courses are continuously updated to match current market demands.",
  },
];

const About = () => {
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
              Our Story
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              About <span className="text-accent">SakyaEduTech</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80">
              Transforming lives through quality education and career-focused training since our inception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-5">
                Your Partner in Professional Growth
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  SakyaEduTech is a leading IT company-driven EdTech platform dedicated to bridging the gap between academic knowledge and industry requirements. We specialize in software training, SAP training, and career-oriented learning programs.
                </p>
                <p>
                  Founded with the vision of empowering individuals with practical, job-ready skills, we have helped hundreds of professionals advance their careers and achieve their goals through real-time project experience.
                </p>
                <p>
                  Our team of working professionals brings real-world expertise to every training session, ensuring that every student gains not just theoretical knowledge, but practical skills that employers value.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-muted rounded-xl p-6 md:p-8"
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { value: "2500+", label: "Learners Trained" },
                  { value: "95%", label: "Satisfaction Rate" },
                  { value: "25+", label: "Industry Trainers" },
                  { value: "150+", label: "Real-Time Projects" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-card rounded-lg">
                    <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                To provide industry-aligned education and training that empowers individuals with practical skills, enabling them to build successful careers and contribute meaningfully to the global workforce.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                To be the most trusted and preferred education partner for professionals seeking to enhance their skills and advance their careers in the dynamic world of technology and business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Values
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            >
              What Drives Us
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center bg-card rounded-xl p-6 shadow-card border border-border hover:border-accent/30 hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-accent/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-5">
              Our Commitment to You
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
              At SakyaEduTech, we are committed to your success. From the moment you enroll to the day you land your dream job, we stand by you with quality training, personalized guidance, and unwavering support. Your growth is our mission, and your success is our greatest reward.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
