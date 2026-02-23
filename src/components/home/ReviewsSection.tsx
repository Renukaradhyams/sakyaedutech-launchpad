import { motion } from "framer-motion";
import { Star, BookOpen, Users, Lightbulb } from "lucide-react";
import { fadeUp, staggerContainer } from "@/config/motion";
import reviewsData from "@/data/reviews.json";
import reviewsBg from "@/assets/reviews-bg.jpg";

export const ReviewsSection = () => {
  // Show 4 reviews on home page
  const featuredReviews = reviewsData.slice(0, 4);

  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Background Image
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${reviewsBg})` }}
      /> */}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/98" />
      
      <div className="container mx-auto px-4 relative z-10">
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
            Success Stories
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            What Our Learners Say
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg"
          >
            Real feedback from learners who completed real-time projects with us
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-6xl mx-auto"
        >
          {featuredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl p-5 md:p-6 shadow-card border border-border hover:shadow-elevated hover:border-accent/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-primary-foreground font-bold text-base">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
                    <p className="text-xs text-accent">{review.course}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-accent fill-accent" />
                  ))}
                </div>
              </div>

              {/* Feedback Sections */}
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5 font-medium">
                      Project Experience
                    </p>
                    <p className="text-xs text-foreground leading-relaxed">{review.projectFeedback}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5 font-medium">
                      Trainer Support
                    </p>
                    <p className="text-xs text-foreground leading-relaxed">{review.trainerFeedback}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5 font-medium">
                      Industry Learning
                    </p>
                    <p className="text-xs text-foreground leading-relaxed">{review.industryLearning}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
