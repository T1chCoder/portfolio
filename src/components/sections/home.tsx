import { motion } from "framer-motion";
import { Download, Code2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { socialLinks } from "@/constants/home";

export default function Section() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden gradient-dark-bg"
      id="home"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.25 220 / 0.15), transparent)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.60 0.22 280 / 0.15), transparent)",
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, oklch(0.70 0.20 200 / 0.12), transparent)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="wrp relative z-10 pt-[7.5rem] pb-32 mt-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-8"
            >
              <span className="block text-xl text-muted-foreground mb-3">
                Hi, I'm T1chCoder
              </span>
              <span className="block text-6xl lg:text-6xl font-bold text-gradient-primary mb-3">
                Asadbek Jumabaev
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
            >
              Full-stack developer passionate about creating innovative web
              applications and mobile experiences. I specialize in modern
              technologies and love turning ideas into reality through clean,
              efficient code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden gradient-primary border-0"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <span className="relative z-10 flex items-center gap-2.5 text-black">
                  <Download className="w-4 h-4" />
                  Download CV
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-gradient"
                onClick={() => {
                  window.location.hash = "projects";
                }}
              >
                <span className="relative z-10 flex items-center gap-2.5 text-white">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  title={label}
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:shadow-lg group"
                  style={{
                    background: "oklch(0.12 0.015 240)",
                    borderColor: "rgba(255,255,255,0.3)",
                    ["--hover-color" as any]: color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <Icon className="w-6 h-6 transition-colors group-hover:text-[var(--hover-color)]" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-80 h-80 lg:w-[360px] lg:h-[360px] xl:w-[380px] xl:h-[380px] rounded-full overflow-hidden glow-primary">
              {/* Animated gradient ring */}
              <div
                className="absolute inset-0 rounded-full p-1"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.65 0.25 220), oklch(0.70 0.20 200), oklch(0.60 0.22 280), oklch(0.65 0.25 220))",
                }}
              >
                <div className="w-full h-full rounded-full gradient-dark-bg" />
              </div>

              <div className="absolute inset-2 rounded-full overflow-hidden border border-border/20">
                <Image
                  src="/portfolio/profile.png"
                  alt="Asadbek - t1chcoder"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Enhanced floating icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm border border-border/30 glow-accent"
                style={{ background: "oklch(0.65 0.25 220 / 0.2)" }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code2
                  className="w-7 h-7"
                  style={{ color: "oklch(0.75 0.25 220)" }}
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm border border-border/30"
                style={{ background: "oklch(0.60 0.22 280 / 0.2)" }}
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles
                  className="w-7 h-7"
                  style={{ color: "oklch(0.70 0.22 280)" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
