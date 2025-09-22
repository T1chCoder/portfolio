import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Image } from "@/components/ui/image";
import { Card as UICard } from "@/components/ui/card";
import { type ProjectType } from "@/types/project";

function Card({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={item.featured ? "lg:col-span-2 xl:col-span-1" : ""}
    >
      <UICard className="overflow-hidden h-full bg-gradient-to-br from-card to-secondary/20 border-border/50 group">
        {/* Image */}
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

          {/* Project Links */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 -translate-y-5 group-hover:-translate-y-0 transition-transform duration-300">
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center hover:opacity-100 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center hover:opacity-100 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
        </div>

        <div className="p-6 pb-8">
          <motion.h3
            className="text-2xl font-bold mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {item.title}
          </motion.h3>

          <motion.p
            className="text-muted-foreground mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {item.description}
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {item.tech.map((tech: string, techIndex: number) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + techIndex * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </UICard>
    </motion.div>
  );
}

function Grid({ items }: { items: any }) {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {items.map((item: ProjectType, index: number) => (
        <Card item={item} index={index} />
      ))}
    </div>
  );
}

export { Grid, Card };
