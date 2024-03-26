import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FaCrown, FaMedal } from "react-icons/fa";
import { TDonationItem } from "../../types";

export default function LeaderBoardTable({ data }: { data: TDonationItem[] }) {
  return (
    <Box
      sx={{ backgroundColor: "background.default" }}
      overflow={"auto"}
      width={{ xs: "100%", md: "60%" }}
      mx={"auto"}
    >
      <TableContainer component={"table"}>
        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ textAlign: "center" }}>
            {data.map((item, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={item._id}
              >
                <TableCell component="th" scope="row">
                  {" "}
                  {index + 1}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1rem" }}>
                  {" "}
                  <p style={{ display: "flex", alignItems: "center" }}>
                    {index === 0 ? (
                      <p
                        style={{
                          color: "gold",
                          fontSize: "1.5rem",
                          margin: "0 5px 0 0",
                        }}
                      >
                        <FaCrown />
                      </p>
                    ) : (
                      <p
                        style={{
                          color: "silver",
                          fontSize: "1.5rem",
                          margin: "0 5px 0 0",
                        }}
                      >
                        <FaMedal />
                      </p>
                    )}
                    <p>{item?.user?.name}</p>
                  </p>
                </TableCell>
                <TableCell align="center">{item?.user?.email}</TableCell>{" "}
                <TableCell align="center">${item?.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
