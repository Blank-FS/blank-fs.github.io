"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 transition-opacity duration-300 md:hidden ${
        isVisible ? "opacity-80" : "pointer-events-none opacity-0"
      }`}
    >
      <Button onClick={scrollToTop} className="bg-primary p-4">
        <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    </div>
  );
};

export default ScrollToTopButton;
