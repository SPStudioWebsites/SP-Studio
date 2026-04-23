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
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl hidden md:block"
        style={{
          left: rect?.left ?? 0,
          top: rect?.top ?? 0,
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 120}px, 0) scale(${
            isVisible ? 1 : 0.85
          })`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s linear",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(0,0,0,0.3)",
        }}
      >
        <div className="relative w-[320px] h-[220px] rounded-xl overflow-hidden border border-white/[0.12] backdrop-blur-md bg-white/[0.04]">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
            <div className="relative py-6 border-t border-white/[0.08] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <div
                className={`absolute inset-0 -mx-4 rounded-xl bg-white/[0.04] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="font-bold text-xl md:text-2xl tracking-[-0.4px] text-white">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`absolute left-0 -bottom-0.5 h-px bg-[#ff2d8f] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            hoveredIndex === index ? "w-full" : "w-0"
                          }`}
                        />
                      </span>
                    </h3>
                    <ArrowUpRight
                      className={`w-4 h-4 text-[#ff2d8f] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        hoveredIndex === index
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : "opacity-0 -translate-x-2 translate-y-2"
                      }`}
                    />
                  </div>

                  <p
                    className={`text-sm mt-1.5 leading-[1.55] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      hoveredIndex === index ? "text-white/70" : "text-white/40"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                <span
                  className={`text-xs font-mono tabular-nums mt-2 transition-colors duration-300 ${
                    hoveredIndex === index ? "text-white/60" : "text-white/30"
                  }`}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}
        <div className="border-t border-white/[0.08]" />
      </div>
    </div>
  );
}
