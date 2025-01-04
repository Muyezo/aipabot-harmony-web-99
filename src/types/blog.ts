export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  featured_image?: string | null;
  category: string;
  status: string;
  published_at?: string | null;
  created_at: string;
  updated_at: string;
  author_id: string;
}