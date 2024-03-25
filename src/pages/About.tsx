import { Grid } from "@mui/material";
import Loader from "../components/Loader";
import CustomContainer from "../components/ui/shared/CustomContainer";
import Header from "../components/ui/shared/Header";
import VolunteerCard from "../components/volunteer/VolunteerCard";
import { useGetAllVolunteersQuery } from "../redux/features/volunteer/getVolunteer";
import { TVolunteerItem } from "../types";

export default function About() {
  const { data, isLoading } = useGetAllVolunteersQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <CustomContainer margin={false}>
      <Header
        title="Meet Our Dedicated Volunteers"
        subTitle=" Discover the Heart and Soul Behind Our Mission"
        animation={false}
      />
      <Grid container spacing={4}>
        {data.data.map((item: TVolunteerItem) => (
          <VolunteerCard key={item._id} item={item} />
        ))}
      </Grid>
    </CustomContainer>
  );
}
