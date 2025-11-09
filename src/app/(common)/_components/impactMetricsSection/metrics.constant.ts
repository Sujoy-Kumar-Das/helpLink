import { IMetrics } from "@/types/metrics.type";
import { Favorite, Groups, Restaurant, School } from "@mui/icons-material";

const metrics: IMetrics[] = [
  {
    id: crypto.randomUUID(),
    icon: Restaurant,
    value: 1250000,
    label: "Meals Served",
    color: "primary.main",
  },
  {
    id: crypto.randomUUID(),
    icon: School,
    value: 25000,
    label: "Education",
    color: "secondary.main",
  },
  {
    id: crypto.randomUUID(),
    icon: Favorite,
    value: 250000,
    label: "Funds Raised",
    color: "success.main",
  },
  {
    id: crypto.randomUUID(),
    icon: Groups,
    value: 5000,
    label: "Volunteers",
    color: "info.main",
  },
];

export default metrics;
