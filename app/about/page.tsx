"use client";

import { HeroSection } from "@/app/src/components//about/HeroSection";
import { StatsGrid } from "@/app/src/components//about/StatsGrid";
import { PhilosophySection } from "@/app/src/components//about/PhilosophySection";
import { TechStackSection } from "@/app/src/components//about/TechStackSection";
import { CTASection } from "@/app/src/components//about/CTASection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
      <HeroSection />
      
      {/* Stats */}
      <div className="container mx-auto px-4 max-w-6xl -mt-8">
        <StatsGrid />
      </div>

      <PhilosophySection />
      <TechStackSection />
      <CTASection />
    </main>
  );
}