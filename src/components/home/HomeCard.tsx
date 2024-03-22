import { Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { title, titleChildren } from "../../animation/HomeAnimation";
export default function HomeCard() {
  return (
    <Container component={"div"}>
      <motion.div variants={title} initial="hidden" animate="visible">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <motion.div variants={titleChildren}>
              <Typography
                sx={{
                  color: "text.primary",
                  textAlign: "start",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
                variant="h5"
              >
                Raising Hope
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div variants={titleChildren}>
              <Typography
                variant="h3"
                sx={{
                  color: "text.primary",
                  textAlign: "start",
                  fontSize: { xs: "40px", sm: "50px", md: "60px" },
                }}
              >
                Raising Hope To the Homeless &
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div variants={titleChildren}>
              <Typography
                variant="h3"
                sx={{
                  color: "text.primary",
                  textAlign: "start",
                  fontSize: { xs: "40px", sm: "50px", md: "60px" },
                }}
              >
                Hopeless People
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <motion.div variants={titleChildren}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="medium"
              >
                Join Us
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <motion.div variants={titleChildren}>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                size="medium"
              >
                Donate Now
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
