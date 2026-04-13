import type { iContact } from '../iContact';

const contact: iContact = {
  seoTitle: 'Contact Portland Property Buyers | Request An Offer',
  seoDescription:
    'Contact Portland Property Buyers to discuss your home, timeline, and possible investor offers in the Portland area.',
  hero: {
    title: 'Contact Portland Property Buyers',
    subTitle:
      'Reach out for a quick review of your property and your selling timeline.',
    description:
      'If you need to sell a house in Portland or nearby communities, we can review the property details and help connect you with local investor buyers.',
  },
  details: {
    title: 'Reach Our Team',
    description:
      'Use the form or contact us directly if you want to talk through the property before taking the next step.',
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
      'Send the address and basic property details. We will follow up quickly with possible next steps.',
    buttonText: 'Send Property Details',
  },
  FAQ: {
    title: 'Before You Contact Us',
    description: 'A few common questions from local homeowners.',
    faq: [
      {
        question: 'Is there any pressure to accept an offer?',
        answer:
          'No. Reaching out only starts a conversation so you can review your options before making any decision.',
      },
      {
        question: 'Can you still help if the house needs major work?',
        answer:
          'Yes. We often review houses with repairs, cleanup issues, code concerns, or deferred maintenance.',
      },
    ],
  },
  CTA: {
    heading: 'Need To Move Quickly?',
    subHeading:
      'We can help you review local investor options that may fit a faster closing timeline.',
    primaryCTA: 'Get My Cash Offer',
  },
};

export default contact;
