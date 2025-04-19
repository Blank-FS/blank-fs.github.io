import React from "react";
import IntroSection from "./IntroSection";
import EducationSection from "./EducationSection";
import { Separator } from "../ui/separator";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";

const Main = () => {
  return (
    <main className="p-2 md:p-8 md:pr-16 flex flex-col gap-4 relative">
      <IntroSection />
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
