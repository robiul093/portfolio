import AboutMe from "@/components/home/AboutMe";
import Banner from "@/components/home/Banner";
import Skills from "@/components/home/Skills";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skills />
    </div>
  );
}
