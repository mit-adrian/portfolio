"use client";

import { useEffect, useState } from "react";

const sections = ["projects", "skills", "about", "contact"];

export default function SideIndicator() {
  const [active, setActive] = useState<string>("projects");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="group flex items-center justify-end"
        >
          <span
            className={`
              h-0.75
              rounded-full
              transition-all
              duration-300
              ${
                active === section
                  ? "w-8 bg-red-500"
                  : "w-4 bg-white/40 group-hover:w-6"
              }
            `}
          />
        </a>
      ))}
    </div>
  );
}
