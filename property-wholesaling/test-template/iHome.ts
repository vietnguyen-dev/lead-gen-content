export interface iHomeHero {
  eyebrow: string;
  heading: string;
  subHeading: string;
  primaryCta: string;
  secondaryCta?: string;
  formHeading: string;
  formSubHeading: string;
}

export interface iHomeBenefit {
  title: string;
  description: string;
}

export interface iHomeStep {
  title: string;
  description: string;
}

export interface iHomeTestimonial {
  quote: string;
  author: string;
  location?: string;
}

export interface iHomeFaqPreview {
  question: string;
  answer: string;
}

export interface iHome {
  seoTitle: string;
  seoDescription: string;
  hero: iHomeHero;
  trustBadges: string[];
  benefitsHeading: string;
  benefits: iHomeBenefit[];
  processHeading: string;
  process: iHomeStep[];
  serviceAreasHeading: string;
  serviceAreas: string[];
  testimonialsHeading: string;
  testimonials: iHomeTestimonial[];
  faqHeading: string;
  faqPreview: iHomeFaqPreview[];
  finalCtaHeading: string;
  finalCtaSubHeading: string;
  finalCtaButton: string;
}
