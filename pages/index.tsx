import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectSection,
  ServiceSection,
} from "../components/home";
import { EducationSection } from "../components/home/EducationSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
