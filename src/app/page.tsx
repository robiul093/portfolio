import AboutMe from "@/components/home/AboutMe";
import Banner from "@/components/home/Banner";
import BlogSection from "@/components/home/Blog";
import Contact from "@/components/home/Contact";
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
      <BlogSection />
      <Contact />
    </div>
  );
}
