import { education } from "@/data/content";
import React from "react";
import ImageWrapper from "../ui/image-wrapper";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const EducationSection = () => {
  return (
    <section
      id="education-section"
      className="flex scroll-mt-26 flex-col gap-4 md:scroll-mt-8"
    >
      <h1>Education</h1>
      <div className="p-4">
        <div className="flex gap-4">
          <ImageWrapper
            src={education.image}
            alt={education.imageAlt}
            fallback={"/experience/fallback.jpg"}
            className="h-16 w-16 rounded"
          />
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h2>{education.school}</h2>
              <p className="flex items-center gap-1 italic">
                <img
                  src="/location.svg"
                  alt="Location Icon"
                  className="h-5 w-5"
                />
                <span>{education.location}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="italic">{education.overview}</p>
              <p className="flex items-center gap-1 italic">
                <img
                  src="/calendar.png"
                  alt="Calendar Icon"
                  className="h-5 w-5"
                />
                <span>{education.date}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h2>Relevant Coursework</h2>
                <Link
                  href={education.courseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLink} className="w-5" />
                </Link>
              </div>
              <ul className="ml-8 list-disc">
                {education.courseworks.map((str, idx) => (
                  <li key={`coursework-${idx}`}>{str}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
