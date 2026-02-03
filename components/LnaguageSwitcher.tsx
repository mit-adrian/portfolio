"use client";

import { usePathname } from "next/navigation";

const languages = [
  { code: "en", label: "EN" },
  { code: "fil", label: "FIL" },
];

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: string;
}) {
  const pathname = usePathname();

  function switchLang(lang: string) {
    const segments = pathname.split("/");
    segments[1] = lang;
    window.location.href = segments.join("/");
  }

  return (
    <select
      value={currentLang}
      onChange={(e) => switchLang(e.target.value)}
      className="bg-slate-900/70 text-white border border-white/10 rounded-md px-2 py-1 text-sm backdrop-blur"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
