import React from "react";
import { ProjectType } from "@/types/types";

const ProjectItem = ({
  item,
  itemIdx,
}: {
  item: ProjectType;
  itemIdx: number;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2>{item.title}</h2>
          <p>| {item.stack}</p>
        </div>
        <p>{item.date}</p>
      </div>
      <ul className="list-disc ml-8">
        {item.points.map((str, idx) => {
          return <li key={`project-${itemIdx}-${idx}`}>{str}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProjectItem;
