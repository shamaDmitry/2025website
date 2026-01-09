import { v4 as uuidv4 } from "uuid";

interface WhyGreenHartData {
  id: string;
  media: string;
  title: string;
  description: string;
}

export const whyGreenHartData: WhyGreenHartData[] = [
  {
    id: uuidv4(),
    media: "/images/homepage/why-green-hart/why-green-hart-01.png",
    title: "Strategic Acquisition",
    description:
      "Morbi fringilla finibus nibh, sed accumsan eros cursus quis. Suspendisse dolor ante, accumsan congue eros iaculis, vehicula commodo orci.",
  },
  {
    id: uuidv4(),
    media: "/images/homepage/why-green-hart/why-green-hart-02.png",
    title: "Proven Managements",
    description:
      "Fusce non nisi sed ante pellentesque lacinia sit amet eu enim. Nullam quis nisl risus. Ut ex sapien, ornare et pharetra sit amet, cursus eu neque lorem ipsum dolor sitamet",
  },
  {
    id: uuidv4(),
    media: "/images/homepage/why-green-hart/why-green-hart-03.png",
    title: "Sustainable Practices",
    description:
      "Morbi venenatis posuere sapien quis convallis. Nulla ullamcorper dapibus quam ac fringilla. Suspendisse convallis congue dignissim",
  },
];
