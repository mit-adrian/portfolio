"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "FIL">("EN");
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    setDarkMode(isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Branding */}
        <button>
          <Image src="/favicon.ico" alt="Brand Logo" width={64} height={64} />
        </button>

        <div className="flex items-center gap-4 relative">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((prev) => !prev)}
              className="
                text-sm
                text-white
                px-3 py-2
                rounded-md
                hover:bg-white/10
                transition
                flex items-center gap-1
              "
            >
              {language}
              <span className="text-xs">▾</span>
            </button>

            {langOpen && (
              <div
                className="
                  absolute
                  right-0
                  mt-2
                  w-28
                  rounded-md
                  bg-black/80
                  backdrop-blur
                  shadow-lg
                  overflow-hidden
                "
              >
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="
                    p-2
                    rounded-md
                    hover:bg-white/10
                    transition
                    text-white
                  "
                >
                  {darkMode ? "🌙" : "☀️"}
                </button>
                <button
                  onClick={() => {
                    setLanguage("EN");
                    setLangOpen(false);
                  }}
                  className={`
                    w-full px-4 py-2 text-left text-sm
                    hover:bg-white/10
                    ${language === "EN" ? "text-red-500" : "text-white"}
                  `}
                >
                  English
                </button>

                <button
                  onClick={() => {
                    setLanguage("FIL");
                    setLangOpen(false);
                  }}
                  className={`
                    w-full px-4 py-2 text-left text-sm
                    hover:bg-white/10
                    ${language === "FIL" ? "text-red-500" : "text-white"}
                  `}
                >
                  Filipino
                </button>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="
              bg-red-600
              hover:bg-red-500
              text-white 
              text-sm 
              px-5 py-2 
              rounded-md 
              font-semibold
              transition
              shadow-[0_0_8px_rgba(239,68,68,0.25)]
            "
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
