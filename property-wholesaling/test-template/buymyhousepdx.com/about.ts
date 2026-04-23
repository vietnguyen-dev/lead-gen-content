import type { iAbout } from "../iAbout.js";

export const about: iAbout = {
  seoTitle: 'About Buy My House PDX | Local Portland Home Buyer',
  seoDescription:
    'Learn how Buy My House PDX connects Portland-area homeowners with local real estate investors for simple as-is sale options.',
  hero: {
    title: 'A Local Home Buyer Focused On Simple, Fair Closings',
    subTitle:
      'Buy My House PDX works with homeowners across Portland who want local investor options without the usual delays and costs of listing.',
    description:
      'We help homeowners navigate a direct-sale path by connecting them with local investors and keeping the process clear, respectful, and easy to understand.',
    primaryCTA: 'Talk To Our Team',
  },
  about: {
    heading: 'Why We Started',
    description:
      'Many homeowners do not need a traditional listing. They need a faster way to find serious local investors when a property has repairs, inherited complications, problem tenants, foreclosure pressure, or a tight relocation timeline. Buy My House PDX was built to make those connections easier, with honest communication and a straightforward process.',
    formButton: 'Review My Options',
  },
  howWeWork: {
    heading: 'How We Work With Sellers',
    subHeading:
      'Our process is designed to keep the next step clear from the first conversation through closing.',
    steps: [
      {
        id: 1,
        title: 'Understand The Property',
        description:
          'We gather the address, condition, and sale timeline so we can understand what kind of buyer may fit.',
      },
      {
        id: 2,
        title: 'Review Investor Interest',
        description:
          'We look for local investor options that match the property and the seller situation.',
      },
      {
        id: 3,
        title: 'Discuss The Next Step',
        description:
          'You can review any available options and decide whether a direct sale makes sense.',
      },
    ],
    formButton: 'Start The Process',
  },
  CTA: {
    heading: 'See What Your Portland House Could Sell For',
    subHeading:
      'Share a few details and we will follow up with local investor options for your property.',
    primaryCta: 'Get My Offer',
    formHeading: 'Tell Us About The Property',
    formSubHeading:
      'A quick conversation is enough for us to start reviewing which local investors may be a fit.',
    formButton: 'Request Offer',
  },
};

export default about;
