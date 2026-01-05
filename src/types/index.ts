export interface PricingTier {
  name: string;
  price: number | null;
  period?: string;
  features: string[];
}

export interface Pricing {
  free?: PricingTier;
  pro?: PricingTier;
  enterprise?: PricingTier;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  website: string;
  logo: string;
  features: string[];
  pricing: Pricing;
  tags: string[];
  founded: string;
  company: string;
  funding?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ToolsData {
  lastUpdated: string;
  categories: Category[];
  tools: Tool[];
}
