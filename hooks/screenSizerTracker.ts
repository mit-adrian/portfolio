"use client";

import { useState, useEffect } from "react";

export function useScreenSize() {
  const getBreakpoint = (width: number) => {
    if (width < 640) return "sm";
    if (width < 768) return "md";
    if (width < 1024) return "lg";
    if (width < 1280) return "xl";
    return "2xl";
  };

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [breakpoint, setBreakpoint] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setWidth(w);
      setHeight(h);
      setBreakpoint(getBreakpoint(w));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, height, breakpoint };
}
