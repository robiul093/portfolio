import AboutMe from "@/components/home/AboutMe";
import Banner from "@/components/home/Banner";
import ProjectSection from "@/components/home/ProjectSection";
import Skills from "@/components/home/Skills";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skills />
      <ProjectSection />
    </div>
  );
}
