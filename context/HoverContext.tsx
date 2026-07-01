"use client";
import { createContext, useContext, useState } from "react";

const HoverContext = createContext<{
  isMenuHovering: boolean;
  setIsMenuHovering: (v: boolean) => void;
} | null>(null);

export function HoverProvider({ children }: { children: React.ReactNode }) {
  const [isMenuHovering, setIsMenuHovering] = useState(false);
  return (
    <HoverContext.Provider value={{ isMenuHovering, setIsMenuHovering }}>
      {children}
    </HoverContext.Provider>
  );
}

export function useHover() {
  const ctx = useContext(HoverContext);
  if (!ctx) throw new Error("useHover must be used within HoverProvider");
  return ctx;
}
