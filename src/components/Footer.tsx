import { Link } from "react-router-dom";
import {
  Mail,
  Globe,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  Instagram,
  X
} from "lucide-react";
import { appConfig } from "@/config/appConfig";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="SakyaEduTech"
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold">
                Sakya<span className="text-accent">EduTech</span>
              </span>
            </Link>

            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Industry-ready software and SAP training with real company experience. Learn from working professionals and build real-time projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Why Us", path: "/why-us" },
                { name: "Register", path: "/register" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Popular Courses</h4>
            <ul className="space-y-2">
              {[
                "Python Full Stack",
                "Java Full Stack",
                "MERN Stack",
                "Data Science & ML",
                "SAP S/4HANA FICO",
                "Cloud & DevOps",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/courses"
                    className="text-primary-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>

            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href={`mailto:${appConfig.contactEmail}`}
                  className="hover:text-accent transition-colors"
                >
                  {appConfig.contactEmail}
                </a>
              </li>

              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href={`tel:${appConfig.phoneNumber}`}
                  className="hover:text-accent transition-colors"
                >
                  {appConfig.phoneNumber}
                </a>
              </li>

              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                {appConfig.address}
              </li>

              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
                <Globe className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href={`https://${appConfig.website}`}
                  className="hover:text-accent transition-colors"
                >
                  {appConfig.website}
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-2 mt-5">
              {[
                {
                  Icon: Linkedin,
                  url: appConfig.socialLinks.linkedin,
                  label: "LinkedIn",
                },
                {
                  Icon: X,
                  url: appConfig.socialLinks.twitter, // reused twitter link for X
                  label: "X",
                },
                {
                  Icon: Youtube,
                  url: appConfig.socialLinks.youtube,
                  label: "YouTube",
                },
                {
                  Icon: Instagram,
                  url: appConfig.socialLinks.instagram,
                  label: "Instagram",
                },
              ].map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} {appConfig.companyName}. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
