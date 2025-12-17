export interface PricingTier {
  name: string;
  price: number | string;
  description: string;
  fit: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  savings?: string;
}

export interface CaseStudy {
  title: string;
  industry: string;
  revenue: string;
  before: { label: string; value: string }[];
  after: { label: string; value: string }[];
  quote: string;
  metrics: { label: string; value: string; trend: 'up' | 'down' }[];
}

export interface Alert {
  type: 'urgent' | 'opportunity' | 'watch';
  title: string;
  impact: string;
  value: string;
  action: string;
}