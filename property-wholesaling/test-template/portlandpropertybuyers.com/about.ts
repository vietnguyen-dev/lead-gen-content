import type { iAbout } from "../iAbout.js";

export const about: iAbout = {
  seoTitle: 'About Portland Property Buyers | Portland Home Buyer Team',
  seoDescription:
    'Learn how Portland Property Buyers helps local homeowners connect with Portland cash buyers.',
  hero: {
    title: 'A Portland Team Focused On Simple Home Sales',
    subTitle:
      'We help homeowners who want a simpler way to sell without the delays and work of listing.',
    description:
      'We help homeowners understand their options and move at a pace that fits their needs.',
    primaryCTA: 'Talk With Us',
  },
  about: {
    heading: 'What We Focus On',
    description:
      'Some homes are a better fit for a direct sale. We work with owners dealing with repairs, inherited homes, tenants, foreclosure, divorce, moving, or other hard situations.',
    formButton: 'Review My Options',
  },
  howWeWork: {
    heading: 'How We Help Portland Sellers',
    subHeading:
      'We keep the process simple and focused on your timeline.',
    steps: [
      {
        id: 1,
        title: 'Share The Situation',
        description:
          'Tell us about the house, its condition, and what you need.',
      },
      {
        id: 2,
        title: 'Compare Buyer Options',
        description:
          'We review possible buyer interest and your next steps.',
      },
      {
        id: 3,
        title: 'Choose A Path',
        description:
          'You decide if the offer and timeline work for you.',
      },
    ],
    formButton: 'Start My Review',
  },
  CTA: {
    heading: 'See What Your Portland Property May Be Worth',
    subHeading:
      'Share a few details and we will review the property with local buyers.',
    primaryCta: 'Get My Offer',
    formHeading: 'Start With A Few Property Details',
    formSubHeading:
      'A short talk is enough for us to get started.',
    formButton: 'Request My Offer',
  },
};

export default about;
