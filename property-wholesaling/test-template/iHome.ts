interface iHomeHero {
  heading: string;
  subHeading: string;
  badges: string[];
  primaryCta: string;
  formHeading: string;
  formSubHeading: string;
  formButton: string;
}

interface iSteps {
  stepTitle: string;
  description: string;
}

interface iHomeSteps {
  title: string;
  steps: iSteps[];
  formButton: string;
}

interface iFAQ {
  question: string;
  answer: string;
}

interface iHomeFAQ {
  title: string;
  description: string;
  faq: iFAQ[];
}

interface iHomeCTA {
  heading: string;
  subHeading: string;
  primaryCta: string;
  formHeading: string;
  formSubHeading: string;
  formButton: string;
}

export interface iHome {
  seoTitle: string;
  seoDescription: string;
  offerButton: string;
  hero: iHomeHero;
  steps: iHomeSteps;
  FAQ: iHomeFAQ[];
  CTA: iHomeCTA;
}
