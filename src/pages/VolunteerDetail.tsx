import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Header from "../components/ui/shared/Header";
import { useGetAVolunteerQuery } from "../redux/features/volunteer/getAVolunteer.api";
export default function VolunteerDetail() {
  const { id } = useParams();

  const { data, isLoading } = useGetAVolunteerQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  console.log(data);

  return (
    <Container sx={{ mt: 10 }} component={"section"}>
      <Header
        title={`Meet Our Team Member `}
        subTitle={`Learn More About Our Amazing Volunteers`}
      />

      <Box sx={{ width: { xs: "100%", md: "50%" }, mx: "auto" }}>
        <img
          src={data.data.image}
          alt={`${data.data.name} image`}
          style={{ width: "100%", height: "100%", marginTop: "10px" }}
        />
        <Box color={"text.secondary"} overflow={"auto"}>
          <TableContainer>
            <Table sx={{ minWidth: "50%", my: 5 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Name
                  </TableCell>
                  <TableCell align="right">{data.data.name}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Email
                  </TableCell>
                  <TableCell align="right">{data.data.email}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Contact
                  </TableCell>
                  <TableCell align="right">{data.data.phone}</TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Emergency Phone
                  </TableCell>
                  <TableCell align="right">
                    {data.data.emergencyPhone}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" sx={{ my: 3, textAlign: "justify" }}>
            {data.data.summery}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
