export interface Project {
  id: string;
  title: string;
  excerpt: string;
  tech: string[];
  image: string;
  repoUrl: string;
  demoUrl: string;
  tags: string[];
  content?: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
  tags?: string[];
}
