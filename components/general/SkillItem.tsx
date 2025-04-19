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
    <Card className="p-4 bg-linear-to-r from-white via-neutral-100 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center">
          <h2>{item.category}</h2>
          <div className="flex justify-center flex-wrap gap-4">
            {item.list.map((skill, idx) => (
              <TooltipProvider key={`skill-${itemIdx}-item-${idx}`}>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={skill.image}
                      alt={`${skill.name} Icon`}
                      className="w-20 h-20"
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
