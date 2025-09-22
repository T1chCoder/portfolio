import { useEffect } from "react";
import { Header } from "@/components/shell/header";
import Home from "@/components/sections/home";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Cases from "@/components/sections/cases";
import Contact from "@/components/sections/contact";
import { Footer } from "@/components/shell/footer";
import { Toaster } from "@/components/ui/sonner";
import { useSplash } from "@/contexts/splash";

export default function App() {
  const { setLoading } = useSplash();

  useEffect(() => {
    setLoading("page", false);
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Cases />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
