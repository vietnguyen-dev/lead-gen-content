import type { iAbout } from "../iAbout.js";

export const about: iAbout = {
  seoTitle: 'About Portland Property Buyers | Portland Home Buyer Team',
  seoDescription:
    'Learn how Portland Property Buyers helps local homeowners explore straightforward as-is sale options with Portland-area investors.',
  hero: {
    title: 'A Portland Team Built Around Straightforward Home Sales',
    subTitle:
      'Portland Property Buyers works with homeowners who want a simpler path to selling without the delays, prep work, or uncertainty of listing.',
    description:
      'We help homeowners connect with local investors, understand their options clearly, and move toward a closing timeline that fits their situation.',
    primaryCTA: 'Talk With Us',
  },
  about: {
    heading: 'What We Focus On',
    description:
      'Some properties are better suited for a direct sale than a traditional listing. We work with homeowners dealing with repairs, inherited property, landlord fatigue, foreclosure pressure, divorce, relocation, or other situations where speed and simplicity matter.',
    formButton: 'Review My Options',
  },
  howWeWork: {
    heading: 'How We Help Portland Sellers',
    subHeading:
      'We keep the process direct, local, and focused on the seller timeline.',
    steps: [
      {
        id: 1,
        title: 'Share The Situation',
        description:
          'Tell us about the property, condition, and what you need from the sale.',
      },
      {
        id: 2,
        title: 'Compare Buyer Options',
        description:
          'We review possible investor interest for the property and prepare the next-step details.',
      },
      {
        id: 3,
        title: 'Choose A Path',
        description:
          'You decide whether the available terms and timeline work for your goals.',
      },
    ],
    formButton: 'Start My Review',
  },
  CTA: {
    heading: 'See What Your Portland Property Could Be Worth',
    subHeading:
      'Share a few details and we will review the property with local investors who buy in the area.',
    primaryCta: 'Get My Offer',
    formHeading: 'Start With A Few Property Details',
    formSubHeading:
      'A short conversation is enough for us to begin reviewing next-step options.',
    formButton: 'Request My Offer',
  },
};

export default about;
