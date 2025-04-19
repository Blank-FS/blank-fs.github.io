import React from "react";

const IntroSection = () => {
  return (
    <section id="intro-section" className="flex flex-col gap-4">
      <h1>About Me</h1>
      <h2>{"Hi, I'm Felix!👋"}</h2>
      <p>
        {
          "I'm currently a student at the University of Michigan studying Computer Science. I am excited about opportunities to gain practical experience and contribute to a dynamic organization. I am eager to develop essential skills, including but not limited to teamwork, critical thinking, and problem-solving, while making a positive impact on the community."
        }
      </p>
    </section>
  );
};

export default IntroSection;
