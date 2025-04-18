import { courseworks } from "@/data/content";
import React from "react";

const EducationSection = () => {
  return (
    <section id="education-section" className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Education</h1>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">University of Michigan</h2>
          <p>Ann Arbor, MI, United States</p>
        </div>
        <div className="flex justify-between">
          <p className="italic">
            BSE in Computer Science (Sophomore)- GPA: 4.0
          </p>
          <p className="italic">Aug 2024 - May 2028</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl">Relevent Coursework</h2>
        <ul className="list-disc ml-8">
          {courseworks.map((str, idx) => (
            <li key={`coursework-${idx}`}>{str}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EducationSection;
