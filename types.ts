
export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
  serviceUrl?: string;
  images?: string[];
  videoUrl?: string;
  companyLogo?: string;
  domain: 'Fintech' | 'Research' | 'EdTech' | 'Finance';
  tags: string[];
  color: string;
}

export type ViewType = 'Overview' | 'Experience' | 'About';
