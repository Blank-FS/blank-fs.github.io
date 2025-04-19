import React from "react";
import EducationSection from "../sections/EducationSection";
import { Separator } from "../ui/separator";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectSection from "../sections/ProjectSection";
import AboutSection from "../sections/AboutSection";
import SkillSection from "../sections/SkillSection";

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
      <Separator />
      <SkillSection />
    </main>
  );
};

export default Main;
