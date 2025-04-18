import React from "react";
import IntroSection from "./IntroSection";
import EducationSection from "./EducationSection";
import { Separator } from "../ui/separator";
import ExperienceSection from "./ExperienceSection";

const Main = () => {
  return (
    <main className="p-2 md:p-8 flex flex-col gap-4">
      <h1>Note: Personal site unfinished. This is a work in progress (WIP).</h1>
      <IntroSection />
      <Separator />
      <EducationSection />
      <Separator />
      <ExperienceSection />
    </main>
  );
};

export default Main;
