import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Grid as ProjectGrid } from "@/components/base/project";
import projects from "@/data/project";

export default function Section() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-secondary/20 to-background overflow-hidden"
    >
      <div className="wrp">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Projects I'm Proud Of
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Work demonstrating experience in full-stack development.
          </p>
        </motion.div>

        <ProjectGrid items={projects} />

        {/* View More Projects */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="group relative overflow-hidden"
            asChild
          >
            <a
              href="https://github.com/T1chCoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
