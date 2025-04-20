"use client";
import React, { useState } from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { sectionIds } from "@/data/content";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-muted sticky top-0 z-50 flex w-[100vw] items-center justify-between py-4 md:hidden">
      <Button
        variant="outline"
        onClick={toggleMenu}
        className="shadow-muted-foreground ml-4 shadow-md"
      >
        <span className="sr-only">Open Menu</span>
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faXmark} className="text-4xl" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="text-4xl" />
        )}
      </Button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } bg-card border-foreground absolute top-17 z-10 flex w-[100vw] gap-4 border p-4`}
        id="mobile-menu"
      >
        <div>
          <Separator orientation="vertical" className="bg-primary" />
        </div>
        <nav className="flex flex-col gap-4 py-2">
          {sectionIds.map((id) => {
            const label = id.replace("-section", "").replace("-", " ");
            return (
              <Link
                key={`mobile-${id}`}
                href={`#${id}`}
                className="hover:text-cyan-700 dark:hover:text-cyan-500"
                onClick={toggleMenu}
              >
                <h3>{label.charAt(0).toUpperCase() + label.slice(1)}</h3>
              </Link>
            );
          })}
        </nav>
      </div>
      <ModeToggle className="shadow-muted-foreground mr-4 shadow-md" />
    </header>
  );
};

export default MobileHeader;
