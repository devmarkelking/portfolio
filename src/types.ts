export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Backend' | 'Frontend' | 'E-commerce' | 'Full-stack';
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  stats?: { label: string; value: string }[];
  keyFeatures: string[];
  architectureDetails: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  icon: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  text: string;
}
