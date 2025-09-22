import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/app.tsx";
import { SplashProvider } from "@/contexts/splash";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SplashProvider>
      <App />
    </SplashProvider>
  </StrictMode>
);
