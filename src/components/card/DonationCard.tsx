import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { TDonationItem } from "../../types";

type TDonationCard = {
  item: TDonationItem;
};

export default function DonationCard({ item }: TDonationCard) {
  const { _id, amount, category, image, title } = item;
  return (
    <Grid
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      item
      xs={12}
      md={4}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardMedia sx={{ height: 220 }} image={image} title={title} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Category</strong>:{category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Amount</strong>:${amount}
          </Typography>
        </CardContent>
        <CardActions sx={{ width: "100%" }}>
          <Link to={`/donation/${_id}`}>
            <Button variant="contained" size="medium" color="primary">
              View Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
