import React from "react";
import SocialTray from "./SocialTray";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/content";

const ProfileCard = () => {
  return (
    <Card
      id="contact-section"
      className="shadow-muted-foreground flex min-w-64 scroll-mt-26 flex-col items-center gap-4 p-8 shadow-md"
    >
      <img
        src={profile.image}
        alt={profile.imageAlt}
        className="w-60 rounded"
      />
      <h1>{profile.name}</h1>
      <SocialTray />
      <Link
        href={profile.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <Button variant="default" className="w-full">
          View Resume <FontAwesomeIcon icon={faFile} />
        </Button>
      </Link>
    </Card>
  );
};

export default ProfileCard;
