interface CaseType {
  id: string;
  title: string;
  description: string;
  discordHandle: string;
  clientName: string;
  projectType: string;
  technologies: string[];
  duration: string;
  budget: string;
  status: "Completed" | "In Progress" | "Delivered";
  deliveryDate?: string;
  highlights: string[];
  testimonial?: string;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
}

export { type CaseType };
