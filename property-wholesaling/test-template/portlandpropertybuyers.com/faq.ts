import type { iFAQ } from "../iFAQ.js";

const faq: iFAQ = {
  seoTitle: 'Portland Property Buyers FAQ | Sell A House Fast In Portland',
  seoDescription:
    'Answers to common questions about selling your house as-is and connecting with Portland-area investors through Portland Property Buyers.',
  heading: 'Frequently Asked Questions',
  subHeading:
    'What Portland-area homeowners usually want to know before exploring investor offers.',
  intro:
    'If you are comparing a direct sale with a traditional listing, these answers will help clarify how the process usually works.',
  categories: [
    {
      title: 'Getting Started',
      description: 'What happens after you first reach out.',
      items: [
        {
          question: 'How do I request an offer?',
          answer:
            'Send us the property address and a few details about the condition, timeline, and situation. We review the information and help connect you with local investors who may be a fit.',
        },
        {
          question: 'Do I have to clean or repair the house first?',
          answer:
            'Usually no. Many investors prefer to evaluate the house as-is, even if it needs repairs, cleanup, or full renovation.',
        },
        {
          question: 'How long can the process take?',
          answer:
            'That depends on the property and buyer, but many direct sales can move from first contact to closing in as little as 7 to 21 days.',
        },
      ],
    },
    {
      title: 'Costs And Terms',
      description: 'Questions about fees, commissions, and flexibility.',
      items: [
        {
          question: 'Do you charge commissions or hidden fees?',
          answer:
            'No. There are no listing commissions for using our service, and you can review any offer directly before deciding whether it works for you.',
        },
        {
          question: 'Can I choose my closing date?',
          answer:
            'In many cases, yes. Investors often have flexibility, which can help if you need a fast close or extra time before moving.',
        },
      ],
    },
    {
      title: 'Situations We Handle',
      items: [
        {
          question: 'Do you work with inherited houses or probate properties?',
          answer:
            'Yes. We regularly speak with families handling inherited homes and can help review investor options for those situations.',
        },
        {
          question: 'Can you help if there are tenants, liens, or foreclosure pressure?',
          answer:
            'Often, yes. We can discuss the property details and determine whether a local investor may still be interested.',
        },
      ],
    },
  ],
  contactCtaHeading: 'Still Comparing Your Selling Options?',
  contactCtaSubHeading:
    'Reach out and we will walk through your property, your timeline, and whether an investor sale makes sense.',
  contactCtaButton: 'Contact Us',
};

export default faq;
