import React from "react";
import { ProjectType } from "@/types/types";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../ui/card";

const ProjectItem = ({
  item,
  itemIdx,
}: {
  item: ProjectType;
  itemIdx: number;
}) => {
  return (
    <Card className="p-4 bg-linear-to-r from-white via-neutral-100 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 ">
            <div className="flex gap-2 items-center">
              <h2>{item.title}</h2>
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLink} className="w-5" />
              </Link>
            </div>

            <p className="italic flex items-center gap-1">
              <img
                src="/calendar.png"
                alt="Calendar Icon"
                className="w-5 h-5"
              />
              <span>{item.date}</span>
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {item.stack.map((str, idx) => (
              <Badge variant="default" key={`project-${itemIdx}-badge-${idx}`}>
                {str}
              </Badge>
            ))}
          </div>
        </div>
        <ul className="list-disc ml-8">
          {item.points.map((str, idx) => {
            return <li key={`project-${itemIdx}-point-${idx}`}>{str}</li>;
          })}
        </ul>
      </div>
    </Card>
  );
};

export default ProjectItem;
