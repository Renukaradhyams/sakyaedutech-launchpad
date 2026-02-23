import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  User,
  Mail,
  Phone,
  BookOpen,
  GraduationCap,
  MapPin,
  MessageSquare,
  Loader2,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";
import { fadeUp, staggerContainer } from "@/config/motion";
import { useToast } from "@/hooks/use-toast";
import coursesData from "@/data/courses.json";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvnpgoy";

const Register = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    userType: "",
    qualification: "",
    city: "",
    resumeLink: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = new FormData();

      form.append("fullName", formData.fullName);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("course", formData.course);
      form.append("userType", formData.userType);
      form.append("qualification", formData.qualification);
      form.append("city", formData.city);
      form.append("resumeLink", formData.resumeLink);
      form.append("message", formData.message);
      form.append("_subject", `New Registration: ${formData.course}`);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Registration Submitted!",
          description: "Our team will contact you shortly.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-24 md:py-36 bg-background min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-10 h-10 text-accent" />
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Thank You for Registering!
              </h1>
              <p className="text-base text-muted-foreground mb-6">
                Our team will contact you shortly with batch details and training
                mode options.
              </p>
              <Button
                variant="gradient"
                onClick={() => setIsSubmitted(false)}
              >
                Register for Another Course
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent/80 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-medium mb-4 border border-primary-foreground/20">
              Start Your Journey
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Register for a <span className="text-accent">Course</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80">
              Fill in your details and our training team will contact you within
              24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-elevated border border-border"
            >
              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Course */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Course Interested *
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      required
                    >
                      <option value="">Select a course</option>
                      {coursesData.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* User Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Are you a Student or Working Professional? *
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                      required
                    >
                      <option value="">Select your status</option>
                      <option value="student">Student / Fresher</option>
                      <option value="professional">
                        Working Professional
                      </option>
                    </select>
                  </div>
                </div>

                {/* Qualification */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Current Qualification / Experience *
                  </label>
                  <Input
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="e.g., B.Tech CSE, 2 years in Java development"
                    required
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    City *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Resume link */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Resume Google Drive Link *
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="url"
                      name="resumeLink"
                      value={formData.resumeLink}
                      onChange={handleChange}
                      placeholder="https://drive.google.com/..."
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Make sure the link access is set to “Anyone with the link
                    can view”.
                  </p>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific questions or requirements?"
                      className="pl-10 min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Registration <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </motion.form>

            <motion.p
              variants={fadeUp}
              className="text-center text-muted-foreground text-sm mt-5"
            >
              No payment required at registration. Our team will discuss course
              fees and batch details with you.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
