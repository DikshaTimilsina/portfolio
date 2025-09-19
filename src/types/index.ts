// Project type
export interface Project {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  link: string;
}

// Blog type
export interface Blog {
  title: string;
  excerpt: string;
  date: string;       // format: YYYY-MM-DD
  readTime: string;
  slug: string;       // for routing, e.g., /blog/[slug]
}

// Social link type
export interface SocialLink {
  name: string;
  url: string;
  icon?: string;      // optional: you can store icon name or path
}
