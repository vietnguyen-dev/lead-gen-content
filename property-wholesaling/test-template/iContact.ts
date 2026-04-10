interface iContactHero {
  title: string;
  subTitle: string;
  description: string;
}

interface iContactDetail {
  label: string;
  value: string;
}

interface iContactDetails {
  title: string;
  description: string;
  details: iContactDetail[];
}

interface iContactForm {
  heading: string;
  subHeading: string;
  buttonText: string;
}

interface iContactFAQ {
  question: string;
  answer: string;
}

interface iContactFAQs {
  title: string;
  description: string;
  faq: iContactFAQ[];
}

interface iContactCTA {
  heading: string;
  subHeading: string;
  primaryCTA: string;
}

export interface iContact {
  seoTitle: string;
  seoDescription: string;
  hero: iContactHero;
  details: iContactDetails;
  form: iContactForm;
  FAQ: iContactFAQs;
  CTA: iContactCTA;
}
