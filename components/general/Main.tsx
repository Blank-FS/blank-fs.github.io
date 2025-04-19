import React from "react";
import EducationSection from "./EducationSection";
import { Separator } from "../ui/separator";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection";

const Main = () => {
  return (
    <main className="md:p-8 md:pr-16 flex flex-col gap-4 relative">
      <AboutSection />
      <Separator />
      <EducationSection />
      <Separator />
      <ExperienceSection />
      <Separator />
      <ProjectSection />
    </main>
  );
};

export default Main;
