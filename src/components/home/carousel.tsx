"use client";

import {
  useRef,
  useState,
  useEffect,
  type ReactNode,
  useCallback,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export function Carousel({ children, className = "" }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrows = useCallback(() => {
    if (!carouselRef.current) return;

    setShowLeftArrow(carouselRef.current.scrollLeft > 0);
    setShowRightArrow(
      carouselRef.current.scrollLeft <
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
    );
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 300;
    const currentScroll = carouselRef.current.scrollLeft;
    const newScroll =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    carouselRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });

    setTimeout(updateArrows, 300);
  };

  return (
    <div className="relative">
      {showLeftArrow && (
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1.5 hover:bg-gray-100 cursor-pointer"
          aria-label="Défiler vers la gauche"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
      )}

      <div
        ref={carouselRef}
        className={`flex overflow-x-auto scrollbar-hide gap-3 pb-2 px-1 ${className}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={updateArrows}
      >
        {children}
      </div>

      {showRightArrow && (
        <button
          onClick={() => scrollCarousel("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1.5 hover:bg-gray-100 cursor-pointer"
          aria-label="Défiler vers la droite"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      )}
    </div>
  );
}
