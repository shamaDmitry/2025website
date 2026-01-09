import { v4 as uuidv4 } from "uuid";

interface StatsData {
  id: string;
  value: string;
  label: string;
}

export const statsData: StatsData[] = [
  { id: uuidv4(), value: "25+ Years", label: "IN BUSSINESS" },
  { id: uuidv4(), value: "3,000+", label: "MULTIFAMILY UNITS" },
  { id: uuidv4(), value: "2.79x", label: "AVERAGE EQUITY MULTIPLE" },
  { id: uuidv4(), value: "36.65%", label: "AVERAGE IRR" },
];
