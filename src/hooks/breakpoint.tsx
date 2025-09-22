import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return width;
}

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export function useBreakpoint() {
  const width = useWindowWidth();
  let current: string = "base";

  for (const [name, minWidth] of Object.entries(breakpoints)) {
    if (width >= minWidth) current = name;
  }

  return current;
}

type Device = "mobile" | "tablet" | "desktop";

export function useDevice(): Device {
  const width = useWindowWidth();

  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}
