import { v4 as uuidv4 } from "uuid";

export interface InvestData {
  id: string;
  title: string;
  description: string;
}

export const investData: InvestData[] = [
  {
    id: uuidv4(),
    title: "Request Invitation",
    description:
      "There’s an incredible demand for these institutional grade commercial real estate investments and, unfortunately, we can’t serve everybody.",
  },
  {
    id: uuidv4(),
    title: "Schedule a Call",
    description:
      "We only work with investors we KNOW we can serve exceptionally.",
  },
  {
    id: uuidv4(),
    title: "Access Opportunities",
    description:
      "Once you’re in the Investor Club, you can expect access to exclusive opportunities delivered to your inbox 5-6 times per year.",
  },
  {
    id: uuidv4(),
    title: "Invest",
    description:
      "We go to great lengths to ensure funding a deal is as easy as possible.",
  },
  {
    id: uuidv4(),
    title: "Prosper",
    description:
      "Green Hart investment opportunities typically generate quarterly cashflow with strong equity growth.",
  },
];
