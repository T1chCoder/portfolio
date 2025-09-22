interface ReviewType {
  id: string;
  name: string;
  discordHandle: string;
  role: string;
  company: string;
  project: string;
  testimonial: string;
  rating: number;
  date: string;
  projectType: string;
  avatar?: string;
}

export { type ReviewType };