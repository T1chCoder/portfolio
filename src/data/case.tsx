interface Case {
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

const items: Case[] = [
  {
    id: "1",
    title: "HomeOut Website Design",
    description:
      "UI/UX design for the website, focused on minimalism, intuitive navigation, and full responsiveness.",
    discordHandle: "@blossom_falls",
    clientName: "Blossom",
    projectType: "Website Design",
    technologies: ["Figma"],
    duration: "1-2 weeks",
    budget: "Free",
    status: "Completed",
    deliveryDate: "August 2025",
    highlights: [
      "Modern minimalist UI",
      "Fully responsive design",
      "Interactive prototypes",
    ],
    figmaUrl: "https://www.figma.com/design/3qgdiAj2aWl6JVGJxWYeFC/HomeOut?m=auto&t=1sVlao0T8OPOWqcd-1",
  },
  {
    id: "2",
    title: "Portfolio Website",
    description:
      "Personal website showcasing projects, skills, and contact information with a modern, responsive design.",
    discordHandle: "@akash06202",
    clientName: "Raunak Designer",
    projectType: "Website",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    duration: "2-3 days",
    budget: "Free",
    status: "Completed",
    deliveryDate: "August 2025",
    highlights: [
      "Responsive and mobile-friendly design",
      "Project showcase with filtering",
      "Modern visual design",
      "Testimonials carousel",
    ],
    liveUrl: "https://t1chcoder.github.io/raunak-raj/",
    githubUrl: "https://github.com/T1chCoder/raunak-raj",
  },
  {
    id: "4",
    title: "Mindflow Website",
    description:
      "A productivity-focused website designed to help users organize tasks, track goals, and improve daily efficiency with an intuitive and minimalistic interface.",
    discordHandle: "@na.dez",
    clientName: "Ashen",
    projectType: "Web Application",
    technologies: [
      "Vite",
      "React",
      "TailwindCSS",
      "Django",
      "Supabase",
    ],
    duration: "1-2 months",
    budget: "Free",
    status: "In Progress",
    highlights: [
      "Task and goal management dashboard",
      "Progress visualization with charts",
      "Calendar and daily planner integration",
      "Minimalist design for focus and clarity",
    ],
  },
];

export default items;
