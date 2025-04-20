import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profile } from "@/data/content";

const SocialTray = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 rounded bg-white px-0.5">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="bg-white text-4xl text-[#0077B5]"
                />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Linkedin</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 rounded px-1">
                <FontAwesomeIcon icon={faGithub} className="text-4xl" />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href={`mailto:${profile.email}`}>
              <div className="w-12 rounded px-1">
                <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Email</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default SocialTray;
