interface iFAQItem {
  question: string;
  answer: string;
}

interface iFAQCategory {
  title: string;
  description?: string;
  items: iFAQItem[];
}

export interface iFAQ {
  seoTitle: string;
  seoDescription: string;
  heading: string;
  subHeading: string;
  intro?: string;
  categories: iFAQCategory[];
  contactCtaHeading: string;
  contactCtaSubHeading: string;
  contactCtaButton: string;
}
