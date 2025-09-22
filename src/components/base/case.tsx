import {
  Card as UICard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  MessageCircle,
  Calendar,
  DollarSign,
} from "lucide-react";
import { type CaseType } from "@/types/case";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "In Progress":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Delivered":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

function Card({
  item,
  index,
  className,
}: {
  item: any;
  index: number;
  className?: any;
}) {
  return (
    <UICard
      key={index}
      className={`gradient-dark-card border-gradient glow-primary/10 hover:glow-primary/30 transition-all duration-300 ${
        className ? className : ""
      }`}
    >
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
          <Badge className={`${getStatusColor(item.status)} border`}>
            {item.status}
          </Badge>
        </div>
        <CardDescription className="text-base leading-relaxed">
          {item.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Client Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">
              <span className="text-muted-foreground">Client:</span>{" "}
              <span className="text-foreground">{item.clientName}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm">
              <span className="text-muted-foreground">Discord:</span>{" "}
              <span className="text-primary font-mono">
                {item.discordHandle}
              </span>
            </span>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" />
            <span>
              <span className="text-muted-foreground">Duration:</span>{" "}
              <span className="text-foreground">{item.duration}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span>
              <span className="text-muted-foreground">Budget:</span>{" "}
              <span className="text-foreground">{item.budget}</span>
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Type:</span>{" "}
            <span className="text-foreground">{item.projectType}</span>
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="mb-3 text-foreground">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div>
          <h4 className="mb-3 text-foreground">Key Features</h4>
          <ul className="space-y-1">
            {item.highlights.map((highlight: string, index: number) => (
              <li
                key={index}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary mt-1">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {item.liveUrl && (
            <Button
              size="sm"
              onClick={() => window.open(item.liveUrl, "_blank")}
              className="gradient-primary"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          {item.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(item.githubUrl, "_blank")}
              className="border-primary/30 hover:bg-primary/10"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Code
            </Button>
          )}
          {item.figmaUrl && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(item.figmaUrl, "_blank")}
              className="!bg-[#F24E1E] border-orange-500 hover:bg-[#FF7262]"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Design
            </Button>
          )}
        </div>

        {/* Delivery Info */}

        {item.deliveryDate && (
          <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
            <span>Delivered: {item.deliveryDate}</span>
          </div>
        )}
      </CardContent>
    </UICard>
  );
}

function Grid({ items }: { items: any }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {items.map((item: CaseType, index: number) => (
        <Card item={item} index={index} />
      ))}
    </div>
  );
}

export { Card, Grid };
