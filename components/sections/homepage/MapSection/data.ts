import { v4 as uuidv4 } from "uuid";

interface MapStatsData {
  id: string;
  value: string;
  label: string;
}

export const title = "Our Market Cover";
export const description = `Pellentesque lacinia sit amet eu enim. Nullam quis nisl risus. Ut ex sapien, ornare et pharetra sit amet, cursus eu neque lorem ipsum dolor sit`;

export const mapStatsData: MapStatsData[] = [
  { id: uuidv4(), value: "1,500+", label: "TOTAL INVESTORS" },
  { id: uuidv4(), value: "$3,1B+", label: "MARKET INVESTED" },
  { id: uuidv4(), value: "430", label: "FAMILY" },
  { id: uuidv4(), value: "30.7M", label: "SQUARE FEET" },
];

export interface StateData {
  id: string;
  name: string;
  isActive: boolean;
  body: { [key: string]: string };
}

export const activeState: StateData[] = [
  {
    id: "Washington",
    name: "Washington",
    isActive: true,
    body: {
      "equity invested": "$600M",
      properties: "550",
      units: "2,000+",
    },
  },
  {
    id: "Kansas",
    name: "Kansas",
    isActive: true,
    body: {
      equityInvested: "$600M",
      properties: "550",
      units: "2,000+",
    },
  },
  {
    id: "Arizona",
    name: "Arizona",
    isActive: true,
    body: {
      equityInvested: "$600M",
      properties: "550",
      units: "2,000+",
    },
  },
  {
    id: "Texas",
    name: "Texas",
    isActive: true,
    body: {
      equityInvested: "$600M",
      properties: "550",
      units: "2,000+",
    },
  },
  {
    id: "North_Carolina",
    name: "North_Carolina",
    isActive: true,
    body: {
      equityInvested: "$600M",
      properties: "550",
      units: "2,000+",
    },
  },
  {
    id: "Florida",
    name: "Florida",
    isActive: true,
    body: {
      equityInvested: "$600M",
      properties: "550",
      units: "2,000+",
    },
  },
];
