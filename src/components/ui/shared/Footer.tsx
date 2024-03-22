import { Email, LinkedIn } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{ backgroundColor: "background.paper", py: 15, mt: 10 }}
    >
      <Container>
        <Grid container textAlign={"center"}>
          <Grid xs={12} md={4} item component={"div"}>
            <Typography component={"h1"} variant="h5" color={"text.primary"}>
              HopeLink
            </Typography>
            <Typography
              component={"p"}
              variant="body1"
              my={2}
              color={"text.secondary"}
              textAlign={"justify"}
            >
              Bringing light to the homeless and hopeless. Together, we offer
              support and build a caring community, one act of kindness at a
              time.
            </Typography>
            <Box component={"div"}>
              <IconButton color="primary" size="large">
                <FaFacebook />
              </IconButton>
              <IconButton color="primary" size="large">
                <LinkedIn />
              </IconButton>
              <IconButton color="primary" size="large">
                <FaTwitter />
              </IconButton>
              <IconButton color="primary" size="large">
                <FaYoutube />
              </IconButton>
            </Box>
          </Grid>
          <Grid xs={12} md={4} item component={"div"}>
            <Typography component={"h1"} variant="h5" color={"text.primary"}>
              Useful Links
            </Typography>
            <Box component={"div"}>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography color={"text.secondary"}>Home</Typography>
              </Link>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography color={"text.secondary"}>About</Typography>
              </Link>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography color={"text.secondary"}>All Donation</Typography>
              </Link>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography color={"text.secondary"}>Blog</Typography>
              </Link>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography color={"text.secondary"}>Contact</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid xs={12} md={4} item component={"div"} color={"text.secondary"}>
            <Typography component={"h1"} variant="h5" color={"text.primary"}>
              Contact
            </Typography>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
              }}
              color={"text.secondary"}
            >
              <p>
                <BsFillTelephoneFill />
              </p>
              <p>+88 01319263016</p>
            </Box>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
              }}
              color={"text.secondary"}
            >
              <p>
                <Email />
              </p>
              <p>sujoykumardas75@gmail.com</p>
            </Box>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
              }}
              color={"text.secondary"}
            >
              <p>
                <FaLocationDot />
              </p>
              <p>Puran Bazar,Chandpur</p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
