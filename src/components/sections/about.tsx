import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { stats, journey } from "@/constants/about";
import { useDevice } from "@/hooks/breakpoint";

function calculateAgeFromIso(isoDate: string) {
  if (!isoDate) return "";
  const birth = new Date(isoDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

export default function Section() {
  const [dob] = useState("2008-06-09");
  const device = useDevice();

  const isDesktop = device === "desktop";

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-dark-bg opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top right, oklch(0.65 0.25 220 / 0.1), transparent 70%), radial-gradient(ellipse at bottom left, oklch(0.60 0.22 280 / 0.1), transparent 70%)",
        }}
      />

      <div className="wrp relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-primary !leading-tight">
            Passionate Developer & Problem Solver
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full-stack developer focused on building innovative, impactful
            applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 h-full gradient-dark-card border-border/30 hover:border-primary/20 transition-all duration-300 glow-primary">
              <h3 className="text-2xl font-bold mb-8 text-gradient-accent">
                Get to Know Me
              </h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.65 0.25 220 / 0.2)" }}
                  >
                    <Calendar
                      className="w-5 h-5"
                      style={{ color: "oklch(0.65 0.25 220)" }}
                    />
                  </div>
                  <span className="text-foreground">
                    Born in {new Date(dob).getFullYear()},{" "}
                    {calculateAgeFromIso(dob)} years old
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.70 0.20 200 / 0.2)" }}
                  >
                    <MapPin
                      className="w-5 h-5"
                      style={{ color: "oklch(0.70 0.20 200)" }}
                    />
                  </div>
                  <span className="text-foreground">Based in Uzbekistan</span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm a self-taught developer who believes in the power of
                  continuous learning. When I'm not coding, you'll find me
                  exploring new technologies, contributing to open-source
                  projects, or mentoring aspiring developers in my community.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  My approach to development is centered around clean code, user
                  experience, and scalable solutions. I enjoy tackling complex
                  problems and turning innovative ideas into reality.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center gradient-dark-card border-border/30 h-full hover:border-primary/20 transition-all duration-300">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mt-5 mx-auto mb-4 relative overflow-hidden"
                    style={{ background: `${stat.color}20` }}
                  >
                    <stat.icon
                      className="w-8 h-8"
                      style={{ color: stat.color }}
                    />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-5"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-center mb-16 text-gradient-secondary">
            My Journey
          </h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Enhanced Timeline line */}
            <div
              className={`absolute transform ${ isDesktop ? "left-1/2 -translate-x-1/2" : "right-0 -translate-x-3.5"} w-1 h-full rounded-full`}
              style={{
                background:
                  "linear-gradient(to bottom, oklch(0.65 0.25 220), oklch(0.70 0.20 200), oklch(0.60 0.22 280))",
              }}
            />

            <div className="space-y-16">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <Card
                      className={`p-6 gradient-dark-card border-border/30 hover:border-primary/20 transition-all duration-300 ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div
                        className="text-sm font-semibold mb-3 px-3 py-1 rounded-full inline-block"
                        style={{
                          background: "oklch(0.65 0.25 220 / 0.2)",
                          color: "oklch(0.65 0.25 220)",
                        }}
                      >
                        {item.year}
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </div>

                  {/* Enhanced Timeline dot */}
                  <motion.div
                    className="w-8 h-8 rounded-full border-4 border-background relative z-10"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.65 0.25 220), oklch(0.70 0.20 200))",
                      boxShadow: "0 0 20px oklch(0.65 0.25 220 / 0.3)",
                    }}
                    whileHover={{ scale: 1.5 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  />

                  {isDesktop && <div className="flex-1" />}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
