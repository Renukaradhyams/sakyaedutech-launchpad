import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Quote } from "lucide-react";
import { fadeUp, staggerContainer } from "@/config/motion";
import trainersData from "@/data/trainers.json";
import trainersBg from "@/assets/trainers-bg.jpg";

export const TrainersSection = () => {
  const featuredTrainers = trainersData.slice(0, 4);

  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Background Image – moved up & cropped top */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${trainersBg})`,
          backgroundPosition: "center -80px", // move image up and crop top
        }}
      />

      {/* Overlay (already lightened earlier) */}
      <div className="absolute inset-0 bg-muted/85" />

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
            Meet Our Mentors
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Learn From Industry Professionals
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg"
          >
            Our trainers are currently working professionals who bring real
            industry experience to every session
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto"
        >
          {featuredTrainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-elevated hover:border-accent/30 transition-all duration-300 group"
            >
              {/* Photo Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">

                  {/* reduced photo size */}
                  <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center border-2 border-primary/20 group-hover:border-accent/40 transition-colors">
                    <GraduationCap className="w-7 h-7 text-primary/70" />
                  </div>

                </div>

                <div className="absolute bottom-3 right-3 bg-accent text-accent-foreground px-2.5 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {trainer.yearsOfExperience}+ Years
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground mb-1">
                  {trainer.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-accent mb-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{trainer.designation}</span>
                </div>
                <p className="text-[11px] text-muted-foreground mb-3">
                  at {trainer.company}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {trainer.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-[10px] font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Mentor Message */}
                <div className="bg-muted/70 rounded-lg p-3 relative border border-border/50">
                  <Quote className="w-3.5 h-3.5 text-accent absolute -top-1.5 left-2" />
                  <p className="text-[11px] text-muted-foreground italic pl-1 leading-relaxed">
                    "{trainer.mentorMessage}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
