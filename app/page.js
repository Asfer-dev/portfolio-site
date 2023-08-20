import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import SkillsSection from "./SkillsSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
