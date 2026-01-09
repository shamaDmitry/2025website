import { v4 as uuidv4 } from "uuid";

export interface FaqItem {
  id: string;
  title: string;
  content: string;
}

export const faqData: FaqItem[] = [
  {
    id: uuidv4(),
    title: "What types of properties does Green Hart Capital invest in?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: uuidv4(),
    title: "How can I start investing with Green Hart Capital?",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: uuidv4(),
    title: "Are your properties environmentally sustainable?",
    content:
      "Yes, we prioritize green technologies and energy-efficient solutions in all our properties, ensuring sustainability without compromising investor refunds.",
  },
  {
    id: uuidv4(),
    title:
      "How does Green Hart Capital use technology in real estate investing?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: uuidv4(),
    title:
      "What makes Green Hart Capital different from other real estate investment firms?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
