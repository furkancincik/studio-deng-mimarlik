export interface Project {
  id: string;
  name: string;
  location: string;
  year: string;
  category: string;
  description: string;
  images: string[];
  materials: string;
  squareMeters: string;
  teamMembers: string[];
  isOngoing: boolean;
  progress?: number;
  estimatedCompletion?: string;
  processDescription?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  expertise: string;
  biography: string;
  photo: string;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  projectIds: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface ContactForm {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
}
