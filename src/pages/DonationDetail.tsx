import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useGetDonationDetailQuery } from "../redux/features/allDonations/donationDetail.api";

export default function DonationDetail() {
  const { id } = useParams();

  const { isLoading, data } = useGetDonationDetailQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  const { title, image, description, category, amount } = data?.data;

  return (
    <Container
      sx={{ width: { xs: "100%", md: "50%" }, mx: "auto", mt: 5, pb: 5 }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <img
          src={image}
          style={{ height: "100%", width: "100%" }}
          alt={`${title} image`}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Category</strong>:{category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Amount</strong>:${amount}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Link to={"/dashboard/create-donation"}>
            <Button variant="contained" color="primary" size="large">
              Donate Now
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}
