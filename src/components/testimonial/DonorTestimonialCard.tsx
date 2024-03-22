import { Avatar, Card, Typography } from "@mui/material";
import { TDonorTestimonialItem } from "../../types";

export default function DonorTestimonialCard({
  item,
}: {
  item: TDonorTestimonialItem;
}) {
  const { name, location, testimonial, image } = item;

  return (
    <Card
      sx={{
        p: 4,
        borderRadius: 8,
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {testimonial}
      </Typography>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 10,
          gap: 2,
        }}
      >
        <Avatar
          alt={`${name} image`}
          src={image}
          sx={{ width: 60, height: 60 }}
        />
        <div>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
