export interface Service {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  image?: string;
}

export type ServiceData = Record<string, Service>;