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

const SocialTray = () => {
  return (
    <div className="flex items-center gap-8 justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href="https://www.linkedin.com/in/felix-shen-a40195299"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="px-0.5 rounded bg-white w-10">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-8xl text-[#0077B5] bg-white"
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
              href="https://github.com/Blank-FS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="px-1 rounded w-12">
                <FontAwesomeIcon icon={faGithub} className="text-8xl" />
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
            <Link href="mailto:felixshn@umich.edu">
              <div className="px-1 rounded w-12">
                <FontAwesomeIcon icon={faEnvelope} className="text-8xl" />
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
