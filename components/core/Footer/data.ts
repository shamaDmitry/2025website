import { v4 as uuidv4 } from "uuid";

export interface FooterLink {
  id: string;
  label: string;
  href: string;
  isVisible: boolean;
}

export interface FooterSocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
  isVisible: boolean;
}

export interface ContactItem {
  id: string;
  icon: string;
  type: "address" | "phone" | "email";
  label: string;
  value: string;
  text: string;
}

export const menu: FooterLink[] = [
  { id: uuidv4(), label: "Home", href: "#", isVisible: true },
  { id: uuidv4(), label: "About us", href: "#", isVisible: true },
  { id: uuidv4(), label: "Portfolio", href: "#", isVisible: true },
  { id: uuidv4(), label: "News", href: "#", isVisible: true },
  { id: uuidv4(), label: "Contact us", href: "#", isVisible: true },
];

export const bottomMenu: FooterLink[] = [
  { id: uuidv4(), label: "Terms and conditions", href: "#", isVisible: true },
  { id: uuidv4(), label: "Privacy policy", href: "#", isVisible: true },
  { id: uuidv4(), label: "Disclaimer", href: "#", isVisible: true },
  { id: uuidv4(), label: "Sitemap", href: "#", isVisible: true },
];

export const socialMenu: FooterSocialLink[] = [
  {
    id: uuidv4(),
    label: "Facebook",
    href: "#",
    icon: "FacebookIcon",
    isVisible: true,
  },
  {
    id: uuidv4(),
    label: "Instagram",
    href: "#",
    icon: "InstaIcon",
    isVisible: true,
  },
  {
    id: uuidv4(),
    label: "Youtube",
    href: "#",
    icon: "YoutubeIcon",
    isVisible: true,
  },
  {
    id: uuidv4(),
    label: "LinkedIn",
    href: "#",
    icon: "LinkedinIcon",
    isVisible: true,
  },
  { id: uuidv4(), label: "X", href: "#", icon: "TwitterIcon", isVisible: true },
];

export const contactInfo: ContactItem[] = [
  {
    id: uuidv4(),
    label: "Visit us",
    type: "address",
    value: "201 N Civic Drive, Suite 130 Walnut Creek, California 94596",
    text: "201 N Civic Drive, Suite 130 Walnut Creek, California 94596",
    icon: "PinIcon",
  },
  {
    id: uuidv4(),
    label: "Call us",
    type: "phone",
    value: "tel:123-456-7890",
    text: "123-456-7890",
    icon: "PhoneIcon",
  },
  {
    id: uuidv4(),
    label: "Email us",
    type: "email",
    value: "mailTo:hello@greenhart.com",
    text: "hello@greenhart.com",
    icon: "MailIcon",
  },
];
