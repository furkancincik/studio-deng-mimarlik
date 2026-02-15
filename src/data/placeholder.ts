import { Project, TeamMember, BlogPost } from "@/types/cms";

export const placeholderProjects: Project[] = Array.from({ length: 6 }, (_, i) => ({
  id: `project-${i + 1}`,
  name: "",
  location: "",
  year: "",
  category: "",
  description: "",
  images: [],
  materials: "",
  squareMeters: "",
  teamMembers: [],
  isOngoing: i >= 4,
  progress: i >= 4 ? 0 : undefined,
  estimatedCompletion: i >= 4 ? "" : undefined,
  processDescription: i >= 4 ? "" : undefined,
}));

export const placeholderTeam: TeamMember[] = Array.from({ length: 4 }, (_, i) => ({
  id: `member-${i + 1}`,
  name: "",
  title: "",
  expertise: "",
  biography: "",
  photo: "",
  socialLinks: {},
  projectIds: [],
}));

export const placeholderBlogPosts: BlogPost[] = Array.from({ length: 3 }, (_, i) => ({
  id: `post-${i + 1}`,
  title: "",
  excerpt: "",
  content: "",
  author: "",
  date: "",
  image: "",
  tags: [],
  seoTitle: "",
  seoDescription: "",
}));
