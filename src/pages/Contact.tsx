import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, MessageSquare, Linkedin, Twitter, Facebook, Youtube, Instagram, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "@/config/motion";
import { appConfig } from "@/config/appConfig";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvnpgoy"; // Replace with your Formspree form ID

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Contact Form: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    { icon: Linkedin, href: appConfig.socialLinks.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: appConfig.socialLinks.twitter, label: "Twitter" },
    { icon: Facebook, href: appConfig.socialLinks.facebook, label: "Facebook" },
    { icon: Youtube, href: appConfig.socialLinks.youtube, label: "YouTube" },
    { icon: Instagram, href: appConfig.socialLinks.instagram, label: "Instagram" },
  ];

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
              Get in Touch
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/80">
              Have questions? We're here to help. For course registrations, use the <a href="/register" className="text-accent underline hover:text-accent/80">Register page</a>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto"
          >
            {/* Contact Info */}
            <motion.div variants={slideLeft} className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Let's Connect</h2>
                <p className="text-muted-foreground text-sm">
                  Reach out for general enquiries. For course registration, please use our registration page.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                    <a href={`mailto:${appConfig.contactEmail}`} className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                      {appConfig.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Phone</p>
                    <a href={`tel:${appConfig.phoneNumber}`} className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                      {appConfig.phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-foreground text-sm font-medium">{appConfig.address}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={slideRight} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-border">
                <h3 className="text-lg font-bold text-foreground mb-5">Send us a Message</h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Your Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="pl-10" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="pl-10" required />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" className="pl-10" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                      <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" className="pl-10 min-h-[120px]" required />
                    </div>
                  </div>

                  <Button type="submit" variant="gradient" size="lg" className="w-full sm:w-auto" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
