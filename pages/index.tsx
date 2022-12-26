import {
  AboutSection,
  ContactSection,
  EducationSection,
  HeroSection,
  ProjectSection,
  ServiceSection,
} from "../components/home";

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
