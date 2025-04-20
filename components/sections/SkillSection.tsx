import { skills } from "@/data/content";
import React from "react";
import SkillItem from "../general/SkillItem";

const SkillSection = () => {
  return (
    <section
      id="skills-section"
      className="flex scroll-mt-26 flex-col gap-4 md:scroll-mt-8"
    >
      <h1>Skills</h1>
      <div className="flex flex-col gap-4">
        {skills.map((item, idx) => {
          return <SkillItem key={`skill-${idx}`} item={item} itemIdx={idx} />;
        })}
      </div>
    </section>
  );
};

export default SkillSection;
