import { Grid } from "@mui/material";
import { TDonationItem } from "../../types";
import DonationCard from "../card/DonationCard";

export default function DonationGrid({ data }: { data: TDonationItem[] }) {
  return (
    <Grid container spacing={5}>
      {data?.map((item: TDonationItem) => (
        <DonationCard item={item} key={item._id} />
      ))}
    </Grid>
  );
}
