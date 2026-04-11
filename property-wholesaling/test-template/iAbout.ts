interface iAboutHero {
  title: string;
  subTitle: string;
  description: string;
  primaryCTA: string;
}

interface iAboutDetails {
  heading: string;
  description: string;
  formButton: string;
}

interface iAboutCTA {
  heading: string;
  subHeading: string;
  primaryCta: string;
  formHeading: string;
  formSubHeading: string;
  formButton: string;
}

interface iStep {
  id: number;
  title: string;
  description: string;
}

interface iAboutHowWework {
  heading: string;
  subHeading: string;
  steps: iStep[];
  formButton: string;
}

export interface iAbout {
  seoTitle: string;
  seoDescription: string;
  hero: iAboutHero;
  about: iAboutDetails;
  howWeWork: iAboutHowWework;
  CTA: iAboutCTA;
}
