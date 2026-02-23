import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { appConfig } from "@/config/appConfig";
import coursesData from "@/data/courses.json";

type SeoMetadata = {
  title: string;
  description: string;
  keywords: string;
  type?: "website" | "article";
  noIndex?: boolean;
  structuredData?: Record<string, unknown>;
};

const FALLBACK_IMAGE = "https://www.sakyaedutech.com/Logo_main.png";
const STRUCTURED_DATA_SCRIPT_ID = "seo-structured-data";

const ROUTE_SEO: Record<string, SeoMetadata> = {
  "/": {
    title: "SakyaEduTech | Industry-Ready IT & Software Training with Real Projects",
    description:
      "SakyaEduTech provides industry-ready IT, software and SAP training with real company projects, expert mentors and career-focused learning programs.",
    keywords:
      "SakyaEduTech, IT training institute, software training, SAP training, full stack developer course, data science training, career training, industry ready courses",
    type: "website",
  },
  "/about": {
    title: "About SakyaEduTech | Our Mission, Vision & Student Success",
    description:
      "Learn about SakyaEduTech's mission, values, and approach to practical, job-ready software and SAP training led by industry professionals.",
    keywords: "about sakyaedutech, edtech mission, IT training experts, career focused learning",
    type: "article",
  },
  "/courses": {
    title: "Courses | Software, Data, Cloud & SAP Programs | SakyaEduTech",
    description:
      "Explore SakyaEduTech's industry-aligned courses in software development, cloud, data, testing, and SAP with real-world project exposure.",
    keywords: "software courses, SAP training, full stack course, cloud training, data analytics training",
    type: "website",
  },
  "/register": {
    title: "Register for Training Programs | SakyaEduTech",
    description:
      "Register with SakyaEduTech to begin your professional training journey in software and enterprise technologies.",
    keywords: "course registration, sakyaedutech admission, IT training enrollment",
    type: "website",
  },
  "/why-us": {
    title: "Why Choose SakyaEduTech | Practical Learning & Career Support",
    description:
      "Discover what sets SakyaEduTech apart: project-based learning, expert trainers, personalized mentoring, and job-oriented outcomes.",
    keywords: "why sakyaedutech, practical training, career support, project based learning",
    type: "article",
  },
  "/contact": {
    title: "Contact SakyaEduTech | Get Guidance for the Right Course",
    description:
      "Connect with SakyaEduTech for course counseling, admissions support, and training guidance from our team.",
    keywords: "contact sakyaedutech, IT course counseling, training support",
    type: "website",
  },
};

const normalizeBaseUrl = (website: string) => {
  if (website.startsWith("http://") || website.startsWith("https://")) {
    return website.replace(/\/$/, "");
  }

  return `https://${website}`.replace(/\/$/, "");
};

const durationToIso8601 = (duration: string) => {
  const match = duration.match(/(\d+)\s*week/i);
  if (!match) {
    return undefined;
  }

  return `P${match[1]}W`;
};

const setOrCreateMeta = (selector: string, attributes: Record<string, string>, content: string) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonical = (url: string) => {
  let link = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
};

const setStructuredData = (schema: Record<string, unknown>) => {
  let script = document.head.querySelector(`#${STRUCTURED_DATA_SCRIPT_ID}`) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.id = STRUCTURED_DATA_SCRIPT_ID;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

export const SeoManager = () => {
  const location = useLocation();

  const seo = useMemo(() => {
    if (location.pathname.startsWith("/courses/")) {
      const courseId = location.pathname.replace("/courses/", "");
      const course = coursesData.find(item => item.id === courseId);

      if (course) {
        const isoDuration = durationToIso8601(course.duration);

        return {
          title: `${course.title} Course | SakyaEduTech`,
          description: `${course.shortDescription} Learn with real-time projects, expert mentorship, and placement-focused guidance at SakyaEduTech.`,
          keywords: `${course.title}, ${course.skillsCovered.join(", ")}, SakyaEduTech course`,
          type: "article" as const,
          structuredData: {
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.title,
            description: course.shortDescription,
            provider: {
              "@type": "Organization",
              name: appConfig.companyName,
              sameAs: normalizeBaseUrl(appConfig.website),
            },
            courseMode: course.mode,
            educationalLevel: course.level,
            ...(isoDuration ? { timeRequired: isoDuration } : {}),
          },
        };
      }

      return {
        title: "Course Not Found | SakyaEduTech",
        description: "This course page does not exist. Browse all available SakyaEduTech courses.",
        keywords: "course not found, sakyaedutech courses",
        type: "website" as const,
        noIndex: true,
      };
    }

    return (
      ROUTE_SEO[location.pathname] ?? {
        title: "Page Not Found | SakyaEduTech",
        description: "The page you are looking for does not exist. Visit SakyaEduTech home to explore our training programs.",
        keywords: "404, page not found, sakyaedutech",
        noIndex: true,
        type: "website" as const,
      }
    );
  }, [location.pathname]);

  useEffect(() => {
    const baseUrl = normalizeBaseUrl(appConfig.website);
    const pageUrl = `${baseUrl}${location.pathname}`;

    document.title = seo.title;

    setOrCreateMeta("meta[name='description']", { name: "description" }, seo.description);
    setOrCreateMeta("meta[name='keywords']", { name: "keywords" }, seo.keywords);
    setOrCreateMeta("meta[name='robots']", { name: "robots" }, seo.noIndex ? "noindex, nofollow" : "index, follow");

    setOrCreateMeta("meta[property='og:type']", { property: "og:type" }, seo.type ?? "website");
    setOrCreateMeta("meta[property='og:site_name']", { property: "og:site_name" }, appConfig.companyName);
    setOrCreateMeta("meta[property='og:title']", { property: "og:title" }, seo.title);
    setOrCreateMeta("meta[property='og:description']", { property: "og:description" }, seo.description);
    setOrCreateMeta("meta[property='og:url']", { property: "og:url" }, pageUrl);
    setOrCreateMeta("meta[property='og:image']", { property: "og:image" }, FALLBACK_IMAGE);
    setOrCreateMeta("meta[property='og:image:alt']", { property: "og:image:alt" }, `${appConfig.companyName} logo`);

    setOrCreateMeta("meta[name='twitter:card']", { name: "twitter:card" }, "summary_large_image");
    setOrCreateMeta("meta[name='twitter:title']", { name: "twitter:title" }, seo.title);
    setOrCreateMeta("meta[name='twitter:description']", { name: "twitter:description" }, seo.description);
    setOrCreateMeta("meta[name='twitter:image']", { name: "twitter:image" }, FALLBACK_IMAGE);
    setOrCreateMeta("meta[name='twitter:image:alt']", { name: "twitter:image:alt" }, `${appConfig.companyName} logo`);

    setCanonical(pageUrl);

    setStructuredData(
      seo.structuredData ?? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: appConfig.companyName,
        url: baseUrl,
      },
    );
  }, [location.pathname, seo]);

  return null;
};
