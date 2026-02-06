"use client";

import { useEffect, useRef } from "react";
import styles from "../styles/scroller.module.css";

export default function InfiniteScroller() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(
      ".scroller__inner",
    ) as HTMLElement;

    const items = Array.from(scrollerInner.children);

    items.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(clone);
    });
  }, []);

  return (
    <div className={styles.scroller} ref={scrollerRef}>
      <ul className={`scroller__inner ${styles.inner}`}>
        <li>React</li>
        <li>Next.js</li>
        <li>Laravel</li>
        <li>Node.js</li>
        <li>Docker</li>
        <li>Flutter</li>
      </ul>
    </div>
  );
}
