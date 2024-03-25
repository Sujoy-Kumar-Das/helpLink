import { Grid } from "@mui/material";
import Loader from "../components/Loader";
import CommunityCard from "../components/community/CommunityCard";
import CustomContainer from "../components/ui/shared/CustomContainer";
import Header from "../components/ui/shared/Header";
import { useGetAllCommunityQuery } from "../redux/features/community/getAllCommunityPosts";
import { TCommunityPost } from "../types/comment.type";

export default function Community() {
  // redux hooks
  const { data, isLoading } = useGetAllCommunityQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <CustomContainer margin={false}>
      <Header
        title="Community Gratitude Wall"
        subTitle="Expressing Appreciation and Support Amidst Adversity"
      />

      <Grid container spacing={4}>
        {data.data.map((item: TCommunityPost) => (
          <CommunityCard key={item._id} item={item} />
        ))}
      </Grid>
    </CustomContainer>
  );
}
