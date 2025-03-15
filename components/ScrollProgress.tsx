"use client";

import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-background z-50">
      <div
        className="h-full bg-primary transition-all"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}
