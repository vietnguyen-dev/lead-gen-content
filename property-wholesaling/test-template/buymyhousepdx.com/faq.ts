import type { iFAQ } from "../iFAQ.js";

const faq: iFAQ = {
  seoTitle: "Portland Home Seller FAQ | Buy My House PDX",
  seoDescription:
    "Answers to common questions about working with Buy My House PDX and local Portland buyers.",
  heading: "Frequently Asked Questions",
  subHeading:
    "What Portland homeowners often ask first.",
  intro:
    "These answers explain how our process works.",
  categories: [
    {
      title: "The Process",
      description: "What happens from start to finish.",
      items: [
        {
          question: "How do I get an offer?",
          answer:
            "Send us the address and a few details. We review the home and connect you with local buyers who may want to make an offer.",
        },
        {
          question: "Do you charge fees or commissions?",
          answer:
            "No. There are no agent fees or listing costs for using our service.",
        },
        {
          question: "How long does it take to close?",
          answer:
            "It depends on the buyer and your timeline, but many sales close in 7 to 14 days.",
        },
      ],
    },
    {
      title: "Property Condition",
      description:
        "Questions about repairs and cleanup.",
      items: [
        {
          question: "Will you buy a house that needs repairs?",
          answer:
            "Many buyers will buy homes as-is, even if they need repairs.",
        },
        {
          question:
            "Can I sell if the house has tenants or is full of belongings?",
          answer:
            "Often, yes. We can talk about the tenants or the condition and see which buyers may still be interested.",
        },
      ],
    },
    {
      title: "Situations We Help With",
      items: [
        {
          question:
            "Do you work with inherited properties or probate situations?",
          answer:
            "Yes. We often help families with inherited homes and probate situations.",
        },
        {
          question:
            "Can you help if I am behind on payments or facing foreclosure?",
          answer:
            "Maybe. The sooner you reach out, the more time we may have to review your options.",
        },
      ],
    },
  ],
  contactCtaHeading: "Still Have Questions About Selling Your House?",
  contactCtaSubHeading:
    "Reach out and we will talk through your house, your timeline, and your options.",
  contactCtaButton: "Contact Us",
};

export default faq;
