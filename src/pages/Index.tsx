import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAre } from "@/components/home/Whoweare";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { CertificationSection } from "@/components/home/CertificationSection";
import { MotivationalQuote } from "@/components/home/MotivationalQuote";
import { TrainersSection } from "@/components/home/TrainersSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { HowToRegister } from "@/components/home/HowToRegister";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhoWeAre />
      <RoadmapSection />
      <CoursesPreview />
      <CertificationSection />
      <MotivationalQuote />
      <TrainersSection />
      <ReviewsSection />
      <HowToRegister />
    </Layout>
  );
};

export default Index;
