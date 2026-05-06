import type { iFAQ } from "../iFAQ.js";

const faq: iFAQ = {
  seoTitle: 'Portland Property Buyers FAQ | Sell A House Fast In Portland',
  seoDescription:
    'Answers to common questions about selling your house as-is with Portland Property Buyers.',
  heading: 'Frequently Asked Questions',
  subHeading:
    'What Portland-area homeowners often want to know first.',
  intro:
    'These answers explain how the process usually works.',
  categories: [
    {
      title: 'Getting Started',
      description: 'What happens after you contact us.',
      items: [
        {
          question: 'How do I request an offer?',
          answer:
            'Send us the address and a few details about the house and your timeline. We review it and look for local buyers who may be a fit.',
        },
        {
          question: 'Do I have to clean or repair the house first?',
          answer:
            'Usually no. Many buyers want to see the house as-is, even if it needs work.',
        },
        {
          question: 'How long can the process take?',
          answer:
            'It depends on the home and buyer, but some sales can close in 7 to 21 days.',
        },
      ],
    },
    {
      title: 'Costs And Terms',
      description: 'Questions about fees and timing.',
      items: [
        {
          question: 'Do you charge commissions or hidden fees?',
          answer:
            'No. There are no listing fees, and you can review any offer before you decide.',
        },
        {
          question: 'Can I choose my closing date?',
          answer:
            'In many cases, yes. Some buyers can work with your timeline.',
        },
      ],
    },
    {
      title: 'Situations We Handle',
      items: [
        {
          question: 'Do you work with inherited houses or probate properties?',
          answer:
            'Yes. We often help families with inherited homes and probate situations.',
        },
        {
          question: 'Can you help if there are tenants, liens, or foreclosure pressure?',
          answer:
            'Often, yes. We can talk about the details and see whether a local buyer may still be interested.',
        },
      ],
    },
  ],
  contactCtaHeading: 'Still Comparing Your Selling Options?',
  contactCtaSubHeading:
    'Reach out and we will talk through your house, your timeline, and your options.',
  contactCtaButton: 'Contact Us',
};

export default faq;
