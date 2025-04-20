import { about } from "@/data/content";
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="flex scroll-mt-26 flex-col gap-4 md:scroll-mt-8"
    >
      <h1>About</h1>
      <h2>{about.greeting}</h2>
      {about.paragraphs.map((str, idx) => (
        <p key={`about-paragraph-${idx}`}>{str}</p>
      ))}
    </section>
  );
};

export default AboutSection;
