"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ChatBot from "./ChatBot";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
      const savedTheme = localStorage.getItem("theme");
  
      let newTheme: "light" | "dark";
      if (savedTheme === "light" || savedTheme === "dark") {
        newTheme = savedTheme;
      } else {
        newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
  
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  }, []);
  

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen bg-background text-foreground transition-colors duration-300`}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Footer />
      <ChatBot />
    </div>
  );
}
