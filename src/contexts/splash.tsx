import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

const splashKeys = ["page"] as const;
type SplashKeys = (typeof splashKeys)[number];

type SplashContextType = {
  loading: Record<SplashKeys, boolean>;
  setLoading: (key: SplashKeys, value: boolean) => void;
  allDone: boolean;
};

const SplashContext = createContext<SplashContextType | null>(null);

export function SplashProvider({ children }: { children: ReactNode }) {
  const initialState = splashKeys.reduce(
    (acc, key) => ({ ...acc, [key]: true }),
    {} as Record<SplashKeys, boolean>
  );

  const [loading, setLoadingState] = useState(initialState);

  const setLoading = (key: SplashKeys, value: boolean) => {
    setLoadingState((prev) => ({ ...prev, [key]: value }));
  };

  const allDone = Object.values(loading).every((val) => val === false);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (html) html.removeAttribute("style");

    if (allDone) {
      const splash = document.getElementById("splash");

      if (splash) {
        splash.style.transition = "opacity 0.3s ease";
        splash.style.opacity = "0";

        setTimeout(() => {
          splash.remove();
        }, 300);
      }
    }
  }, [allDone]);

  return (
    <SplashContext.Provider value={{ loading, setLoading, allDone }}>
      {children}
    </SplashContext.Provider>
  );
}

export function useSplash() {
  const ctx = useContext(SplashContext);
  if (!ctx) throw new Error("useSplash must be used inside SplashProvider");
  return ctx;
}
