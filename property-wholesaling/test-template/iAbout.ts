interface iAboutHero {
  title: string;
  subTitle: string;
  description: string;
  primaryCTA: string;
}

interface iAboutDetails {
  heading: string;
  description: string;
}

interface iAboutCTA {
  heading: string;
  subHeading: string;
  primaryCta: string;
  formHeading: string;
  formSubHeading: string;
  formButton: string;
}

export interface iAbout {
  seoTitle: string;
  seoDescription: string;
  hero: iAboutHero;
  about: iAboutDetails;
  CTA: iAboutCTA;
}
