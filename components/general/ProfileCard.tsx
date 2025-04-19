import React from "react";
import SocialTray from "./SocialTray";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProfileCard = () => {
  return (
    <Card className="flex flex-col items-center gap-4 p-8 min-w-64 sticky top-4">
      <img
        src="/profile-photo.jpg"
        alt="Felix Shen's profile photo"
        className="rounded w-60"
      />
      <h1>Felix Shen</h1>
      <SocialTray />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="default" className="w-full">
                View Resume <FontAwesomeIcon icon={faFile} />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>View Resume</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Card>
  );
};

export default ProfileCard;
