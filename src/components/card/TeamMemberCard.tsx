import { Facebook, Twitter } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";

interface TTeamMember {
  name: string;
  role: string;
  bio: string;
  social_links: {
    twitter?: string;
    linkedin?: string;
  };
  image: string;
  post: string;
}

export default function TeamMemberCard({ item }: { item: TTeamMember }) {
  const { name, role, image } = item;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Grid item xs={12} md={3}>
      <Card
        sx={{
          height: "100%",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box component={"div"}>
          <img
            src={image}
            alt={`${name} image`}
            style={{ width: "100%", height: "100%" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {role}
            </Typography>
          </CardContent>
        </Box>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
            transition: "opacity 0.3s, transform 0.3s",
          }}
        >
          <Box
            component={"div"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              gap: 1,
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "70px",
                width: "70px",
              }}
            >
              <Twitter />
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                height: "70px",
                width: "70px",
              }}
            >
              <Facebook />
            </Button>
          </Box>
        </div>
      </Card>
    </Grid>
  );
}
