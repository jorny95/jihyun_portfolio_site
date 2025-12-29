
export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  domain: 'Fintech' | 'Research' | 'EdTech';
  tags: string[];
  color: string;
}

export type ViewType = 'Overview' | 'Experience' | 'Projects' | 'About';
