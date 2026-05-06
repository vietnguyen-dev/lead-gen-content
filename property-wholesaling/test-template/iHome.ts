interface iHomeHero {
  title: string;
  subTitle: string;
  badges: string[];
  primaryCTA: string;
  formHeading: string;
  formSubHeading: string;
  formButton: string;
}

interface iHomeReasons {
  title: string;
  description: string;
  reasons: string[];
  formButton: string;
}
interface iSteps {
  stepTitle: string;
  description: string;
}

interface iHomeSteps {
  title: string;
  description: string;
  steps: iSteps[];
  formButton: string;
}

interface iHomeProsAndCons {
  title: string;
  description: string;
  prosTitle: string;
  pros: string[];
  consTitle: string;
  cons: string[];
  formButton: string;
}

interface iHomeQuickContact {
  title: string;
  subHeading: string;
  button: string;
}

interface iFAQ {
  question: string;
  answer: string;
}

interface iHomeFAQ {
  title: string;
  description: string;
  faq: iFAQ[];
  formButton: string;
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
  reasons: iHomeReasons;
  prosAndCons: iHomeProsAndCons;
  quickContact: iHomeQuickContact;
  FAQ: iHomeFAQ[];
  CTA: iHomeCTA;
}
