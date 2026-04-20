"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export interface ShowcaseProject {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
}

interface ProjectShowcaseProps {
  projects: ShowcaseProject[];
  className?: string;
}

export function ProjectShowcase({ projects, className = "" }: ProjectShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  const rect = containerRef.current?.getBoundingClientRect();

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full ${className}`}
    >
      {/* Floating preview */}
      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-focus hidden md:block"
        style={{
          left: rect?.left ?? 0,
          top: rect?.top ?? 0,
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 120}px, 0) scale(${
            isVisible ? 1 : 0.85
          })`,
          opacity: isVisible ? 1 : 0,
          transition:
            "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s linear",
        }}
      >
        <div className="relative w-[320px] h-[220px] bg-charcoal-04 rounded-xl overflow-hidden border border-line">
          {projects.map((project, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                transform: `scale(${hoveredIndex === index ? 1 : 1.08})`,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-6 border-t border-line transition-all duration-300 ease-soft">
              {/* Background highlight on hover */}
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-charcoal-04 rounded-lg
                  transition-all duration-300 ease-soft
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-charcoal font-semibold text-xl md:text-2xl tracking-[-0.4px]">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-px bg-charcoal
                            transition-all duration-300 ease-soft
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>
                    <ArrowUpRight
                      className={`
                        w-4 h-4 text-muted
                        transition-all duration-300 ease-soft
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                    />
                  </div>

                  <p
                    className={`
                      text-sm mt-1.5 leading-[1.55]
                      transition-colors duration-300 ease-soft
                      ${hoveredIndex === index ? "text-charcoal/80" : "text-muted"}
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                <span
                  className={`
                    text-xs font-mono text-muted tabular-nums mt-2
                    transition-colors duration-300 ease-soft
                    ${hoveredIndex === index ? "text-charcoal/70" : ""}
                  `}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}
        <div className="border-t border-line" />
      </div>
    </div>
  );
}
