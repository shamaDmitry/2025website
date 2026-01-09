import { v4 as uuidv4 } from "uuid";

interface AboutData {
  id: string;
  text: string;
  isSubHeading?: boolean;
}

export const aboutData: AboutData[] = [
  {
    id: uuidv4(),
    text: `Our focus is on providing exceptional asset management while fostering community development, ensuring stable, long-term growth for our investors, and high living standards for our residentsr our investors, and high living standards for our residents.`,
    isSubHeading: true,
  },
  {
    id: uuidv4(),
    text: `Vestibulum tincidunt enim nec ante venenatis, eget sodales ante ullamcorper. Morbi fringilla finibus nibh, sed accumsan eros cursus quis. Suspendisse dolor ante, accumsan congue eros iaculis, vehicula commodo orci. Suspendisse vehicula nisl orci, sed gravida massa pellentesque a. Sed laoreet nec tortor ut tincidunt. Proin ut gravida purus.`,
    isSubHeading: false,
  },
  {
    id: uuidv4(),
    text: `Fusce sed varius arcu. Donec a molestie mi. Sed dapibus arcu tincidunt augue facilisis viverra. Praesent ullamcorper nisl eget pharetra fringilla. . Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    isSubHeading: false,
  },
];
