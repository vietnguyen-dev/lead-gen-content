import type { iContact } from "../iContact.js";

const contact: iContact = {
  seoTitle: 'Contact Portland Property Buyers | Request An Offer',
  seoDescription:
    'Contact Portland Property Buyers to talk about your home, your timeline, and local buyer offers.',
  hero: {
    title: 'Contact Portland Property Buyers',
    subTitle:
      'Reach out for a quick review of your house and timeline.',
    description:
      'If you need to sell a house in Portland or nearby, we can review it and help you find local buyers.',
  },
  details: {
    title: 'Reach Our Team',
    description:
      'Use the form or contact us directly if you want to talk first.',
    details: [
      {
        label: 'Phone',
        value: '(503) 555-0182',
      },
      {
        label: 'Email',
        value: 'info@portlandpropertybuyers.com',
      },
      {
        label: 'Service Area',
        value:
          'Portland, Milwaukie, Tigard, Beaverton, Gresham, Vancouver, and surrounding areas',
      },
    ],
  },
  form: {
    heading: 'Request Your Property Review',
    subHeading:
      'Send the address and basic details. We will follow up soon.',
    buttonText: 'Send Property Details',
  },
  FAQ: {
    title: 'Before You Contact Us',
    description: 'A few common questions.',
    faq: [
      {
        question: 'Is there any pressure to accept an offer?',
        answer:
          'No. Reaching out just starts a conversation. You can decide later.',
      },
      {
        question: 'Can you still help if the house needs major work?',
        answer:
          'Yes. We often review houses that need repairs, cleanup, or big fixes.',
      },
    ],
  },
  CTA: {
    heading: 'Need To Move Quickly?',
    subHeading:
      'We can help you review local buyer options for a faster closing.',
    primaryCTA: 'Get My Cash Offer',
  },
};

export default contact;
