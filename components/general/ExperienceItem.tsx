import { ExperienceType } from "@/types/types";
import React from "react";
import ImageWrapper from "../ui/image-wrapper";
import { Card } from "../ui/card";

const ExperienceItem = ({
  item,
  itemIdx,
}: {
  item: ExperienceType;
  itemIdx: number;
}) => {
  return (
    <Card className="bg-linear-to-r from-white via-neutral-100 to-white p-4 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="flex gap-4">
        <ImageWrapper
          src={item.image}
          alt={item.imageAlt}
          fallback={"/experience/fallback.jpg"}
          className="h-16 w-16 rounded"
        />
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2>{item.title}</h2>
            <p className="flex items-center gap-1 italic">
              <img
                src="/location.svg"
                alt="Location Icon"
                className="h-5 w-5"
              />
              <span>{item.location}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-1 italic">
              <img
                src="/office-building.png"
                alt="Office Building Icon"
                className="h-5 w-5"
              />
              <span>{item.organization}</span>
            </p>
            <p className="flex items-center gap-1 italic">
              <img
                src="/calendar.png"
                alt="Calendar Icon"
                className="h-5 w-5"
              />
              <span>{item.date}</span>
            </p>
          </div>
          <ul className="ml-8 list-disc">
            {item.points.map((str, idx) => {
              return <li key={`experience-${itemIdx}-point-${idx}`}>{str}</li>;
            })}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ExperienceItem;
