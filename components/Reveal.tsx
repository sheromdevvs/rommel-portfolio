"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades + lifts its children into view the first time they scroll near the
 * viewport. `both` fill mode guarantees content ends fully visible even if the
 * observer never fires (JS disabled / reduced motion).
 */
export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={shown ? "reveal" : undefined}
      style={{ opacity: shown ? undefined : 0, animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
