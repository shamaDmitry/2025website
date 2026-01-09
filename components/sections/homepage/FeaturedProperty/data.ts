import { v4 as uuidv4 } from "uuid";

export interface FeaturedProperty {
  id: string;
  title: string;
  image: string;
  specs?: { [key: string]: string | number }[];
}

export const featuredPropertyData: FeaturedProperty[] = [
  {
    id: uuidv4(),
    title: "The Village at Union Mills",
    image: "/images/homepage/featured-property/featured-property-01.jpg",
    specs: [
      {
        name: "Location",
        value: "Lacey, WA",
      },
      {
        name: "Acquired",
        value: "2024",
      },
      {
        name: "Units",
        value: 182,
      },
      {
        name: "Acquired Price",
        value: "$N/A",
      },
      {
        name: "Status",
        value: "Holding",
      },
      {
        name: "Gross Area",
        value: "52,5 m2",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Roosevelt Ridge",
    image: "/images/homepage/featured-property/featured-property-02.jpg",
    specs: [
      {
        name: "Location",
        value: "Seattle, WA",
      },
      {
        name: "Acquired",
        value: "2023",
      },
      {
        name: "Units",
        value: 75,
      },
      {
        name: "Acquired Price",
        value: "$N/A",
      },
      {
        name: "Status",
        value: "Holding",
      },
      {
        name: "Gross Area",
        value: "100 m2",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Big Trout Lodge",
    image: "/images/homepage/featured-property/featured-property-03.jpg",
    specs: [
      {
        name: "Location",
        value: "Liberty Lake, WA",
      },
      {
        name: "Acquired",
        value: "2023",
      },
      {
        name: "Units",
        value: 266,
      },
      {
        name: "Acquired Price",
        value: "$N/A",
      },
      {
        name: "Status",
        value: "Holding",
      },
      {
        name: "Gross Area",
        value: "150 m2",
      },
    ],
  },
];
