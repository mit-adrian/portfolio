"use client";

import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = direction === "left" ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="about" className="pb-24">
      {/* ABOUT */}
      <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
        <div>
          <h2 className="text-3xl font-semibold mb-6">| About Me</h2>
          <p className="text-slate-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            aliquam reiciendis nostrum ab ratione facere provident iusto nisi
            accusamus corrupti, reprehenderit libero sed ipsa, neque rem amet
            pariatur quos itaque? Doloribus, voluptate. Voluptas, quisquam.
            Adipisci, voluptate. Voluptas, quisquam. Adipisci, voluptate.
            Voluptas, quisquam. Adipisci, voluptate. Voluptas, quisquam.
            Adipisci, voluptate. Voluptas, quisquam. Adipisci, voluptate.
            Voluptas, quisquam. Adipisci, voluptate. Voluptas, quisquam.
            Adipisci, voluptate. Voluptas, quisquam. Adipisci, voluptate.
            Voluptas, quisquam. Adipisci, voluptate. Voluptas, quisquam.
            Adipisci.
          </p>
        </div>

        {/* Image */}
        <div className="relative aspect-9/10 overflow-hidden border border-white/10">
          <Image
            src="/projects/me-.png"
            alt="Adrian Karlo working on software systems"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </div>

      {/* CAPABILITIES */}
      <div id="skills" className="relative">
        <h3 className="text-2xl font-semibold mb-4">More Ways to Hire Me</h3>
        <p className="text-slate-400 mb-6 max-w-xl">
          Areas where I consistently add value across projects and teams.
        </p>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="
          absolute left-2 top-1/2 -translate-y-1
          -translate-x-6
          h-24 w-9
          flex items-center justify-center
          rounded-lg
          bg-white/5
          border border-white/10
          hover:bg-white/10
          transition md:flex
        "
        >
          <span className="text-xl opacity-60 hover:opacity-100 transition">
            ←
          </span>
        </button>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="
          absolute right-2 top-1/2 -translate-y-1
          translate-x-6
          h-24 w-9
          flex items-center justify-center
          rounded-lg
          bg-white/5
          border border-white/10
          hover:bg-white/10
          transition md:flex
        "
        >
          <span className="text-xl opacity-60 hover:opacity-100 transition">
            →
          </span>
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 pr-2 no-scrollbar"
        >
          <SkillCard
            title="Frontend Engineering"
            desc="Building responsive, accessible interfaces with React, Next.js, and Tailwind CSS."
          />
          <SkillCard
            title="Backend Development"
            desc="Designing RESTful APIs using Node.js and Express."
          />
          <SkillCard
            title="Database Design"
            desc="Structuring relational data with PostgreSQL for scalability."
          />
          <SkillCard
            title="Application Security"
            desc="Implementing authentication, RBAC, and OWASP protections."
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="min-w-70 border border-white/10 p-6">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
