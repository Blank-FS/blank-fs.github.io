import { projects } from "@/data/content";
import React from "react";
import ProjectItem from "../general/ProjectItem";

const ProjectSection = () => {
  return (
    <section
      id="projects-section"
      className="flex flex-col gap-4 scroll-mt-26 md:scroll-mt-8"
    >
      <h1>Projects</h1>
      <div className="flex flex-col gap-4">
        {projects.map((item, idx) => {
          return (
            <ProjectItem key={`project-${idx}`} item={item} itemIdx={idx} />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
