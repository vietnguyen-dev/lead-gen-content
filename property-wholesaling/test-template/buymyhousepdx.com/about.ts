import type { iAbout } from "../iAbout.js";

export const about: iAbout = {
  seoTitle: 'About Buy My House PDX | Local Portland Home Buyer',
  seoDescription:
    'Learn how Buy My House PDX helps Portland homeowners connect with local cash buyers.',
  hero: {
    title: 'A Local Team Focused On Simple Home Sales',
    subTitle:
      'We help Portland homeowners find local buyers without the long wait and work of listing.',
    description:
      'We keep the process clear and simple so you can understand your options.',
    primaryCTA: 'Talk To Our Team',
  },
  about: {
    heading: 'Why We Started',
    description:
      'Some homeowners do not want a normal listing. They want a faster way to find local buyers, especially when a house needs work or life feels stressful. We built Buy My House PDX to make that easier.',
    formButton: 'Review My Options',
  },
  howWeWork: {
    heading: 'How We Work With Sellers',
    subHeading:
      'We keep each step simple and clear.',
    steps: [
      {
        id: 1,
        title: 'Understand The Property',
        description:
          'We learn about the address, condition, and your timeline.',
      },
      {
        id: 2,
        title: 'Review Investor Interest',
        description:
          'We look for local buyers who may be a good fit.',
      },
      {
        id: 3,
        title: 'Discuss The Next Step',
        description:
          'You review your options and choose what feels right.',
      },
    ],
    formButton: 'Start The Process',
  },
  CTA: {
    heading: 'See What Your Portland House May Be Worth',
    subHeading:
      'Share a few details and we will follow up with local buyer options.',
    primaryCta: 'Get My Offer',
    formHeading: 'Tell Us About The Property',
    formSubHeading:
      'A short talk is enough for us to get started.',
    formButton: 'Request Offer',
  },
};

export default about;
