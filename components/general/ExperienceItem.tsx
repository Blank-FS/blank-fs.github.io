import { ExperienceType } from "@/types/types";
import React from "react";

const ExperienceItem = ({
  item,
  itemIdx,
}: {
  item: ExperienceType;
  itemIdx: number;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl">{item.title}</h2>
        <p>{item.date}</p>
      </div>
      <div className="flex justify-between">
        <p className="italic">{item.organization}</p>
        <p className="italic">{item.location}</p>
      </div>
      <ul className="list-disc ml-8">
        {item.points.map((str, idx) => {
          return <li key={`experience-${itemIdx}-${idx}`}>{str}</li>;
        })}
      </ul>
    </div>
  );
};

export default ExperienceItem;
