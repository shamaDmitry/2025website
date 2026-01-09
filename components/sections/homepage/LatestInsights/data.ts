import { v4 as uuidv4 } from "uuid";

export interface PostData {
  id: string;
  link: string;
  title: string;
  image: string;
  date: string;
  category: {
    id: string;
    name: string;
  };
}

export const latestInsightsData: PostData[] = [
  {
    id: uuidv4(),
    link: "#",
    title:
      "Aenean sit amet ultrices dolor proin tincidunt porta purus quis feugiat",
    image: "/images/homepage/latest-insights/latest-insights-01.jpg",
    date: "2016-06-01T09:46:22",
    category: {
      id: uuidv4(),
      name: "Investment Strategy",
    },
  },
  {
    id: uuidv4(),
    link: "#",
    title: "Praesent vehicula arcu at nulla interdum efficitur",
    image: "/images/homepage/latest-insights/latest-insights-02.jpg",
    date: "2025-03-02T09:46:22",
    category: {
      id: uuidv4(),
      name: "Market Views",
    },
  },
  {
    id: uuidv4(),
    link: "#",
    title:
      "Fusce ac nisl nisi. Fusce vitae dolor placerat eleifend nibh quis lorem ipsum",
    image: "/images/homepage/latest-insights/latest-insights-03.jpg",
    date: "2024-02-02T09:46:22",
    category: {
      id: uuidv4(),
      name: "Market Views",
    },
  },
  {
    id: uuidv4(),
    link: "#",
    title:
      "Aenean sit amet ultrices dolor proin tincidunt porta purus quis feugiat",
    image: "/images/homepage/latest-insights/latest-insights-04.jpg",
    date: "2023-02-02T09:46:22",
    category: {
      id: uuidv4(),
      name: "Investment Strategy",
    },
  },
];
