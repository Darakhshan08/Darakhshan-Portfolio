
import React from 'react';
import HeroSection from '@/app/components/HeroSection';
import TechStackSection from '@/app/components/TechStackSection';
import ProjectsSection from '@/app/components/ProjectsSection';
export default function Home() {
  return <main className="w-full max-w-7xl mx-auto px-4">
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
    </main>;
}

