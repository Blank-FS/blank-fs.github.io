import { courseworks } from "@/data/content";
import React from "react";

const EducationSection = () => {
  return (
    <section id="education-section" className="flex flex-col gap-4">
      <h1>Education</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <h2>University of Michigan</h2>
          <p className="italic flex items-center gap-1">
            <img src="/location.svg" alt="Location Icon" className="w-5 h-5" />
            <span>Ann Arbor, MI, United States</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <p className="italic">
            BSE in Computer Science (Sophomore) - GPA: 4.0
          </p>
          <p className="italic flex items-center gap-1">
            <img src="/calendar.png" alt="Calendar Icon" className="w-5 h-5" />
            <span>Aug 2024 - May 2028</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Relevent Coursework</h2>
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
