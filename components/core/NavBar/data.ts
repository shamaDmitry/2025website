import { v4 as uuidv4 } from "uuid";

interface NavBarData {
  id: string;
  label: string;
  link: string;
  isVisible: boolean;
}

export const navBarData: NavBarData[] = [
  {
    id: uuidv4(),
    label: "ABOUT",
    link: "#about",
    isVisible: true,
  },
  {
    id: uuidv4(),
    label: "PORTFOLIO",
    link: "#portfolio",
    isVisible: true,
  },
  {
    id: uuidv4(),
    label: "FAQ",
    link: "#faq",
    isVisible: true,
  },
  {
    id: uuidv4(),
    label: "NEWS",
    link: "#news",
    isVisible: true,
  },
  {
    id: uuidv4(),
    label: "CONTACT US",
    link: "#contact-us",
    isVisible: true,
  },
];
