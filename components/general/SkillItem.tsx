import React from "react";
import { SkillType } from "@/types/types";
import { Card } from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SkillItem = ({ item, itemIdx }: { item: SkillType; itemIdx: number }) => {
  return (
    <Card className="bg-linear-to-r from-white via-neutral-100 to-white p-4 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center gap-2">
          <h2>{item.category}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {item.list.map((skill, idx) => (
              <TooltipProvider key={`skill-${itemIdx}-item-${idx}`}>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={skill.image}
                      alt={`${skill.name} Icon`}
                      className="h-20 w-20"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SkillItem;
