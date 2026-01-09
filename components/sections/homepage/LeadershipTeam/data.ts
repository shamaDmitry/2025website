import { v4 as uuidv4 } from "uuid";

export interface LeadershipData {
  id: string;
  name: string;
  position: string;
  description: string;
  link: string;
  image: string;
  socials: {
    id: string;
    icon: string;
    link: string;
    title: string;
  }[];
}

export const leadershipData: LeadershipData[] = [
  {
    id: uuidv4(),
    name: "Jhon Smith",
    position: "Founder",
    description:
      "Proin rutrum commodo augue, egestas imperdiet ex faucibus nec. Nunc lobortis metus lectus, id pellentesque mi vehicula eu. Nulla enim ante, posuere sit amet nisi vitae, vehicula bibendum elit. Praesent gravida nunc volutpat eros suscipit, quis cursus lectus hendrerit.",
    link: "#",
    image: "/images/homepage/leadership-team/leadership-team-01.jpg",
    socials: [
      {
        id: uuidv4(),
        icon: "LinkedinIcon", // icons in icons folder
        link: "https://linkedin.com",
        title: "LinkedIn",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Alden Dale",
    position: "Vice President",
    description:
      "Proin rutrum commodo augue, egestas imperdiet ex faucibus nec. Nunc lobortis metus lectus, id pellentesque mi vehicula eu. Nulla enim ante, posuere sit amet nisi vitae, vehicula bibendum elit. Praesent gravida nunc volutpat eros suscipit, quis cursus lectus hendrerit.",
    link: "#",
    image: "/images/homepage/leadership-team/leadership-team-02.jpg",
    socials: [
      {
        id: uuidv4(),
        icon: "LinkedinIcon", // icons in icons folder
        link: "https://linkedin.com",
        title: "LinkedIn",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Kaley Deneen",
    position: "Strategy & Service",
    description:
      "Proin rutrum commodo augue, egestas imperdiet ex faucibus nec. Nunc lobortis metus lectus, id pellentesque mi vehicula eu. Nulla enim ante, posuere sit amet nisi vitae, vehicula bibendum elit. Praesent gravida nunc volutpat eros suscipit, quis cursus lectus hendrerit.",
    link: "#",
    image: "/images/homepage/leadership-team/leadership-team-03.jpg",
    socials: [
      {
        id: uuidv4(),
        icon: "LinkedinIcon", // icons in icons folder
        link: "https://linkedin.com",
        title: "LinkedIn",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Scott Agnew",
    position: "Client Services",
    description:
      "Proin rutrum commodo augue, egestas imperdiet ex faucibus nec. Nunc lobortis metus lectus, id pellentesque mi vehicula eu. Nulla enim ante, posuere sit amet nisi vitae, vehicula bibendum elit. Praesent gravida nunc volutpat eros suscipit, quis cursus lectus hendrerit.",
    link: "#",
    image: "/images/homepage/leadership-team/leadership-team-04.jpg",
    socials: [
      {
        id: uuidv4(),
        icon: "LinkedinIcon", // icons in icons folder
        link: "https://linkedin.com",
        title: "LinkedIn",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Krista Middleton",
    position: "Strategy & Service",
    description:
      "Proin rutrum commodo augue, egestas imperdiet ex faucibus nec. Nunc lobortis metus lectus, id pellentesque mi vehicula eu. Nulla enim ante, posuere sit amet nisi vitae, vehicula bibendum elit. Praesent gravida nunc volutpat eros suscipit, quis cursus lectus hendrerit.",
    link: "#",
    image: "/images/homepage/leadership-team/leadership-team-05.jpg",
    socials: [
      {
        id: uuidv4(),
        icon: "LinkedinIcon", // icons in icons folder
        link: "https://linkedin.com",
        title: "LinkedIn",
      },
    ],
  },
];
