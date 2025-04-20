import { experiences } from "@/data/content";
import React from "react";
import ExperienceItem from "../general/ExperienceItem";

const ExperienceSection = () => {
  return (
    <section
      id="experience-section"
      className="flex scroll-mt-26 flex-col gap-4 md:scroll-mt-8"
    >
      <h1>Experience</h1>
      <div className="flex flex-col gap-4">
        {experiences.map((item, idx) => {
          return (
            <ExperienceItem
              key={`experience-${idx}`}
              item={item}
              itemIdx={idx}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
