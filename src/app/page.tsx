
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { TestimonialsSection } from "@/components/portfolio/testimonials-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
