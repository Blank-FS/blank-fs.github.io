import React from "react";
import EducationSection from "../sections/EducationSection";
import { Separator } from "../ui/separator";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectSection from "../sections/ProjectSection";
import AboutSection from "../sections/AboutSection";
import SkillSection from "../sections/SkillSection";

const Main = () => {
  return (
    <main className="relative flex flex-col gap-4 md:p-8">
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
