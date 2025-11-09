import { ICheckFilterOption, ISortOption } from "@/types/query.type";
import { LocalOffer, Schedule, TrendingUp } from "@mui/icons-material";

const sortOptions: ISortOption[] = [
  {
    id: crypto.randomUUID(),
    label: "Newest First",
    value: "newest",
    icon: Schedule,
  },
  {
    id: crypto.randomUUID(),
    label: "Most Funded",
    value: "most-funded",
    icon: TrendingUp,
  },
  {
    id: crypto.randomUUID(),
    label: "Most Urgent",
    value: "most-urgent",
    icon: LocalOffer,
  },
];

const categoryOptions: ICheckFilterOption[] = [
  {
    id: crypto.randomUUID(),
    label: "Medical",
    value: "medical",
  },
  {
    id: crypto.randomUUID(),
    label: "Education",
    value: "education",
  },
  {
    id: crypto.randomUUID(),
    label: "Emergency",
    value: "emergency",
  },
  {
    id: crypto.randomUUID(),
    label: "Environment",
    value: "environment",
  },
];

const statusOptions: ICheckFilterOption[] = [
  {
    id: crypto.randomUUID(),
    label: "Active",
    value: "active",
  },
  {
    id: crypto.randomUUID(),
    label: "Completed",
    value: "completed",
  },
  {
    id: crypto.randomUUID(),
    label: "Urgent",
    value: "urgent",
  },
];

export const campaignQuery = {
  sortOptions,
  statusOptions,
  categoryOptions,
};
