import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Loader from "../components/Loader";
import { useGetAllDonationQuery } from "../redux/features/allDonations/allDonations.api";
import { TDonationItem } from "../types";

export default function Dashboard() {
  const { data, isLoading } = useGetAllDonationQuery(5);

  const pieData = data?.data?.map((item: TDonationItem) => ({
    name: item.title,
    value: Number(item.amount),
  }));

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Box
        height={"100vh"}
        width={"100%"}
        component={"div"}
        display={"flex"}
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <TableContainer component={"table"} sx={{ overflow: "auto" }}>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data.map((item: TDonationItem) => (
                <TableRow
                  key={item._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="center">{item.category}</TableCell>
                  <TableCell align="center">{item.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              dataKey="value"
              data={pieData}
              isAnimationActive={true}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
}
