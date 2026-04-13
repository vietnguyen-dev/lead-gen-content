import type { iFAQ } from "../iFAQ";

const faq: iFAQ = {
  seoTitle: "Portland Home Seller FAQ | Buy My House PDX",
  seoDescription:
    "Answers to common questions about connecting with local Portland investors through Buy My House PDX.",
  heading: "Frequently Asked Questions",
  subHeading:
    "What Portland homeowners usually ask before connecting with local investors.",
  intro:
    "If you are comparing investor offers to a traditional listing, these answers will help clarify how our process works.",
  categories: [
    {
      title: "The Process",
      description: "What to expect from first contact to closing.",
      items: [
        {
          question: "How do I get an offer?",
          answer:
            "Send us the property address and a few details. We review the home, ask any follow-up questions we need, and then connect you with local investors who may want to make an offer.",
        },
        {
          question: "Do you charge fees or commissions?",
          answer:
            "No. There are no agent commissions and no listing-related costs for using our service to connect with investors.",
        },
        {
          question: "How long does it take to close?",
          answer:
            "It depends on the investor and your timeline, but many direct sales close within 7 to 14 days.",
        },
      ],
    },
    {
      title: "Property Condition",
      description:
        "Questions about repairs, cleanup, and difficult properties.",
      items: [
        {
          question: "Will you buy a house that needs repairs?",
          answer:
            "Many investors we connect with buy properties in as-is condition, including houses with deferred maintenance or major repair needs.",
        },
        {
          question:
            "Can I sell if the house has tenants or is full of belongings?",
          answer:
            "Often, yes. We can talk through the tenant situation or property condition and help determine which local investors may still be interested.",
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
            "Yes. We regularly speak with families dealing with inherited homes and can connect them with investors familiar with those situations.",
        },
        {
          question:
            "Can you help if I am behind on payments or facing foreclosure?",
          answer:
            "Possibly. The sooner you reach out, the more time there may be to review investor options.",
        },
      ],
    },
  ],
  contactCtaHeading: "Still Have Questions About Selling Your House?",
  contactCtaSubHeading:
    "Reach out and we will walk through your property, timeline, and potential investor options.",
  contactCtaButton: "Contact Us",
};

export default faq;
