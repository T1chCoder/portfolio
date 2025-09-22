import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench, Star } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "oklch(0.65 0.25 220)",
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.25 220), oklch(0.70 0.20 200))",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "React Native", level: 85 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "oklch(0.60 0.22 280)",
    gradient:
      "linear-gradient(135deg, oklch(0.60 0.22 280), oklch(0.65 0.18 300))",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 83 },
      { name: "GraphQL", level: 80 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    title: "Dev Kit",
    icon: Wrench,
    color: "oklch(0.70 0.20 160)",
    gradient:
      "linear-gradient(135deg, oklch(0.70 0.20 160), oklch(0.75 0.18 180))",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "Arch Linux", level: 80 },
      { name: "Vercel", level: 90 },
      { name: "Blender", level: 83 },
      { name: "Figma", level: 88 },
    ],
  },
];

export default function Section() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center top, oklch(0.60 0.22 280 / 0.1), transparent 50%), radial-gradient(ellipse at center bottom, oklch(0.65 0.25 220 / 0.1), transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-secondary !leading-tight">
            Technologies I Love Working With
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Constantly learning new technologies and keeping up with modern web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full gradient-dark-card border-border/30 relative overflow-hidden hover:border-primary/20 transition-all duration-300 group">
                {/* Background glow effect */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: category.gradient }}
                />

                <div className="relative z-10">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden"
                    style={{ background: category.gradient }}
                  >
                    <category.icon className="w-10 h-10 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3
                    className="text-2xl font-bold mb-8"
                    style={{ color: category.color }}
                  >
                    {category.title}
                  </h3>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-foreground">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay:
                                    categoryIndex * 0.2 +
                                    skillIndex * 0.1 +
                                    i * 0.05,
                                }}
                                viewport={{ once: true }}
                              >
                                <Star
                                  className={`w-4 h-4 ${
                                    i < Math.floor(skill.level / 20)
                                      ? "fill-current"
                                      : "text-muted-foreground"
                                  }`}
                                  style={{
                                    color:
                                      i < Math.floor(skill.level / 20)
                                        ? category.color
                                        : undefined,
                                  }}
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="absolute top-0 left-0 h-full rounded-full"
                            style={{ background: category.gradient }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-gradient-accent">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript",
              "HTML5",
              "CSS3",
              "Sass",
              "Webpack",
              "Vite",
              "Express.js",
              "FastAPI",
              "PHP",
              "Supabase",
              "C++",
              "Squalchemy",
              "WebSockets",
              "RESTful APIs",
              "Aiogram",
              "Laravel",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="px-6 py-3 text-sm gradient-dark-card border-border/30 hover:border-primary/20 transition-all duration-300 hover:glow-primary"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
