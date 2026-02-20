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

  const scrollYRef = useRef(0);

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

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            onClick={() => setActiveProject(project)}
            className="border border-slate-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-sky-400"
          >
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
                  className="absolute bottom-3 right-3 px-3 py-1.5 text-xs font-medium rounded-md bg-black/70 backdrop-blur border border-white/20 hover:bg-black/90"
                >
                  Live Demo →
                </a>
              )}
            </div>

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
                Tech Stack: {project.tech.join(" · ")}
              </p>

              <div className="flex justify-between items-center pt-2">
                <StatusBadge status={project.status} />
              </div>
            </div>
          </div>
        ))}
      </div>

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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute right-0 top-0 h-full w-full lg:max-w-5xl xl:max-w-6xl bg-slate-950 border-l border-slate-800 overflow-y-auto overscroll-contain lg:shadow-[-20px_0_40px_rgba(0,0,0,0.4)]">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-slate-950 border-b border-slate-800 p-6 flex justify-between items-center">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
            aria-label="Close project"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            {/* LEFT COLUMN */}
            <div className="flex-1 min-w-0">
              <div className="relative h-56 rounded-lg overflow-hidden border border-slate-800 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line text-justify">
                {project.longDescription}
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="w-full lg:w-[320px] shrink-0 ">
              <div className="hidden lg:block lg:sticky lg:top-19 bg-slate-950 z-20 py-6 px-4 space-y-4">
                {/* PRIMARY BUTTON */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-emerald-500 hover:bg-emerald-600 text-black text-center py-3 rounded-lg font-medium transition"
                >
                  View Live Demo
                </a>

                {/* SECONDARY BUTTON */}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 text-center py-3 rounded-lg transition"
                >
                  Source Code
                </a>
              </div>
              <div className="pt-4 border-t border-slate-800"></div>
              <div className="space-y-8 lg:top-24">
                <div className="space-y-4">
                  <p className="text-sm text-slate-400">
                    <span className="text-white font-medium">Package:</span>{" "}
                    {project.package}
                  </p>

                  <p className="text-sm text-slate-400">
                    <span className="text-white font-medium">Price:</span>{" "}
                    {project.priceRange}
                  </p>

                  <p className="text-sm text-slate-400">
                    <span className="text-white font-medium">
                      Optimization:
                    </span>{" "}
                    {project.optimization}
                  </p>

                  <div className="pt-6 border-t border-slate-800 space-y-4">
                    <h4 className="font-semibold text-white">Tech Stack</h4>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <StatusBadge status={project.status} />
                </div>
                <div className="border-t border-slate-800"></div>
              </div>
            </aside>
          </div>
        </div>

        {/* Mobile Bottom Action Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-slate-800 p-4 flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-500 text-black text-center py-3 rounded-lg font-medium"
          >
            View Live
          </a>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-slate-700 text-center py-3 rounded-lg"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
