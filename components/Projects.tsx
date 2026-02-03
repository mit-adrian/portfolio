"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { projects } from "@/data/projects";

/* ================= Status Badge ================= */

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    completed: "bg-emerald-500/15 text-emerald-400",
    "in-progress": "bg-amber-500/15 text-amber-400",
    planned: "bg-slate-500/15 text-slate-300",
  };

  return (
    <span
      className={`text-[11px] px-2.5 py-1 rounded-full capitalize whitespace-nowrap bg-slate-950/70 ${styles[status]}`}
    >
      {status.replace("-", " ")}
    </span>
  );
}

/* ================= Meta Badge ================= */

function MetaBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px]">
      {children}
    </span>
  );
}

/* ================= Main ================= */

export default function Projects() {
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[number] | null
  >(null);

  // single source of truth for scroll position
  const scrollYRef = useRef(0);

  /* ===== Scroll lock + restore ===== */
  useEffect(() => {
    if (activeProject) {
      scrollYRef.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollYRef.current);
    }
  }, [activeProject]);

  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-semibold mb-12">| Projects</h2>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            onClick={() => setActiveProject(project)}
            className="
              border border-slate-800 rounded-xl overflow-hidden
              cursor-pointer
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl hover:border-sky-400
            "
          >
            {/* Thumbnail */}
            <div className="relative h-40 bg-slate-900 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="
                    absolute bottom-3 right-3
                    px-3 py-1.5
                    text-xs font-medium
                    rounded-md
                    bg-black/70 backdrop-blur
                    border border-white/20
                    hover:bg-black/90
                  "
                >
                  Live Demo →
                </a>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>

              <p className="text-sm text-slate-400">{project.description}</p>

              {project.package && (
                <div className="flex flex-wrap gap-2">
                  <MetaBadge>{project.package}</MetaBadge>
                  <MetaBadge>{project.priceRange}</MetaBadge>
                  <MetaBadge>Optimized: {project.optimization}</MetaBadge>
                </div>
              )}

              <p className="text-xs text-slate-500">
                Stack: {project.tech.join(" · ")}
              </p>

              <div className="flex justify-between items-center pt-2">
                <StatusBadge status={project.status} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SIDE PANEL */}
      {activeProject && (
        <ProjectOverlay
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

/* ================= Overlay ================= */

function ProjectOverlay({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  /* ===== ESC key close ===== */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Panel */}
      <div
        className="
          absolute right-0 top-0 h-full
          w-full lg:w-1/2
          bg-slate-950
          border-l border-slate-800
          overflow-y-auto overscroll-contain
          lg:shadow-[-20px_0_40px_rgba(0,0,0,0.4)]
        "
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-950 border-b border-slate-800 p-6 flex justify-between">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
            aria-label="Close project"
          >
            ✕
          </button>
        </div>

        {/* Content (intentionally long for scroll testing) */}
        <div className="p-6 space-y-8">
          <div className="relative h-48 rounded-lg overflow-hidden border border-slate-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i} className="text-slate-400 text-sm leading-relaxed">
              This extended content exists to validate that scrolling is fully
              isolated to the side panel. The main page remains frozen while
              this panel scrolls independently.
            </p>
          ))}

          <div className="flex gap-4 pt-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/20 hover:bg-white/10"
            >
              View Live Demo
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/20 hover:bg-white/10"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
