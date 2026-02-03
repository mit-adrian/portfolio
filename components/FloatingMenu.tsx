"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="fixed top-6 right-6 z-9999 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 backdrop-blur border border-white/10 text-white hover:bg-slate-800 transition"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm">
          <nav className="absolute top-24 right-6 bg-slate-900 border border-white/10 rounded-xl p-6 w-56 shadow-xl">
            <ul className="space-y-4 text-slate-200">
              <li>
                <a
                  href="#projects"
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
