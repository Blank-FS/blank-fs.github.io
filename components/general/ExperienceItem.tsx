import { ExperienceType } from "@/types/types";
import React from "react";
import ImageWrapper from "../ui/image-wrapper";

const ExperienceItem = ({
  item,
  itemIdx,
}: {
  item: ExperienceType;
  itemIdx: number;
}) => {
  return (
    <div className="flex gap-4">
      <ImageWrapper
        src={item.image}
        alt={item.imageAlt}
        fallback={"/experience/fallback.jpg"}
        className="w-16 h-16 rounded"
      />
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <h2>{item.title}</h2>
          <p className="italic flex items-center gap-1">
            <img src="/location.svg" alt="Location Icon" className="w-5 h-5" />
            <span>{item.location}</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <p className="italic">{item.organization}</p>
          <p className="italic flex items-center gap-1">
            <img src="/calendar.png" alt="Calendar Icon" className="w-5 h-5" />
            <span>{item.date}</span>
          </p>
        </div>
        <ul className="list-disc ml-8">
          {item.points.map((str, idx) => {
            return <li key={`experience-${itemIdx}-point-${idx}`}>{str}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
