import { BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with AI Automation",
    excerpt: "Learn the basics of implementing AI automation in your workflow",
    content: "Full article content here...",
    date: "March 15, 2024",
    imageUrl: "/placeholder.svg",
    author: {
      name: "John Doe",
      role: "AI Specialist",
      avatar: "/placeholder.svg"
    },
    category: "Tutorials"
  },
  {
    id: "2",
    title: "Best Practices for AI Integration",
    excerpt: "Discover the most effective ways to integrate AI into your business",
    content: "Full article content here...",
    date: "March 14, 2024",
    imageUrl: "/placeholder.svg",
    author: {
      name: "Jane Smith",
      role: "Technical Lead",
      avatar: "/placeholder.svg"
    },
    category: "Best Practices"
  },
  {
    id: "3",
    title: "The Future of AI Automation",
    excerpt: "Exploring upcoming trends in AI automation technology",
    content: "Full article content here...",
    date: "March 13, 2024",
    imageUrl: "/placeholder.svg",
    author: {
      name: "Mike Johnson",
      role: "Innovation Director",
      avatar: "/placeholder.svg"
    },
    category: "Trends"
  }
];