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
    <div className="md:hidden w-[100vw] bg-muted py-4 sticky top-0 z-50 flex justify-between items-center relative">
      <Button
        variant="outline"
        onClick={toggleMenu}
        className="shadow-md shadow-muted-foreground ml-4"
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
        } absolute top-17 z-10  bg-card border border-foreground flex p-4 gap-4 w-[100vw]`}
        id="mobile-menu"
      >
        <div>
          <Separator orientation="vertical" className="bg-primary" />
        </div>
        <nav className="flex flex-col gap-4 py-2">
          <Link
            key="contact-section"
            href="#contact-section"
            className="dark:hover:text-cyan-500 hover:text-cyan-700"
            onClick={toggleMenu}
          >
            <h3>Contact</h3>
          </Link>
          {sectionIds.map((id) => {
            const label = id.replace("-section", "").replace("-", " ");
            return (
              <Link
                key={`mobile-${id}`}
                href={`#${id}`}
                className="dark:hover:text-cyan-500 hover:text-cyan-700"
                onClick={toggleMenu}
              >
                <h3>{label.charAt(0).toUpperCase() + label.slice(1)}</h3>
              </Link>
            );
          })}
        </nav>
      </div>
      <ModeToggle className="shadow-md shadow-muted-foreground mr-4" />
    </div>
  );
};

export default MobileHeader;
