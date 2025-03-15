"use client";

import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import JourneySection from "@/components/sections/JourneySection";
import ContactSection from "@/components/sections/ContactSection";
import GitHubSection from "@/components/sections/GitHubSection";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Portfolio() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <HeroSection />
      <GitHubSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <ContactSection />
    </>
  );
}