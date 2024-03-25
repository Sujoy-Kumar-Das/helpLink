import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { TVolunteerItem } from "../../types";

export default function VolunteerCard({ item }: { item: TVolunteerItem }) {
  const { name, image, summery, _id } = item;
  console.log(item);
  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <img
          src={image}
          alt={`${name} image`}
          style={{ height: "100%", width: "100%" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summery}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link to={`/volunteer/${_id}`}>
            <Button variant="contained" size="medium" color="primary">
              Contact
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
