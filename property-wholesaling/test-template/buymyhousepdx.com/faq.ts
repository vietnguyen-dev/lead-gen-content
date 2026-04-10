import type { iFAQ } from '../iFAQ';

export const faq: iFAQ = {
  seoTitle: 'Portland Home Seller FAQ | Buy My House PDX',
  seoDescription:
    'Answers to common questions about selling your Portland house for cash with Buy My House PDX.',
  heading: 'Frequently Asked Questions',
  subHeading: 'What Portland homeowners usually ask before selling directly.',
  intro:
    'If you are comparing a direct cash sale to a traditional listing, these answers will help clarify how the process works.',
  categories: [
    {
      title: 'The Process',
      description: 'What to expect from first contact to closing.',
      items: [
        {
          question: 'How do I get an offer?',
          answer:
            'Send us the property address and a few details. We review the home, ask any follow-up questions we need, and then present a cash offer.',
        },
        {
          question: 'Do you charge fees or commissions?',
          answer:
            'No. We buy directly, so there are no agent commissions and no listing-related costs.',
        },
        {
          question: 'How long does it take to close?',
          answer:
            'It depends on your timeline, but many sellers choose to close within 7 to 14 days.',
        },
      ],
    },
    {
      title: 'Property Condition',
      description: 'Questions about repairs, cleanup, and difficult properties.',
      items: [
        {
          question: 'Will you buy a house that needs repairs?',
          answer:
            'Yes. We buy properties in as-is condition, including houses with deferred maintenance or major repair needs.',
        },
        {
          question: 'Can I sell if the house has tenants or is full of belongings?',
          answer:
            'Often, yes. We can talk through the tenant situation or property condition and explain what is possible.',
        },
      ],
    },
    {
      title: 'Situations We Help With',
      items: [
        {
          question: 'Do you work with inherited properties or probate situations?',
          answer:
            'Yes. We regularly speak with families dealing with inherited homes and can adapt to the timing and documentation involved.',
        },
        {
          question: 'Can you help if I am behind on payments or facing foreclosure?',
          answer:
            'Possibly. The sooner you reach out, the more options there may be to review.',
        },
      ],
    },
  ],
  contactCtaHeading: 'Still Have Questions About Selling Your House?',
  contactCtaSubHeading:
    'Reach out and we will walk through your property, timeline, and options.',
  contactCtaButton: 'Contact Us',
};

export default faq;
