import { EditCalendarOutlined } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Box, Button, Container, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import Loader from "../components/Loader";
import CreateDonationModal from "../components/modal/donation/CreateDonationModal";
import EditDonationModal from "../components/modal/donation/EditDonationModal";
import { useGetAllDonationQuery } from "../redux/features/allDonations/allDonations.api";
import { useDeleteDonationMutation } from "../redux/features/allDonations/deleteDonationPost";
import { TDonationItem } from "../types";
import toastMessage from "../utils/toastMessage";

export default function AllDonationsDashboard() {
  // react hooks
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [donation, setDonation] = useState<TDonationItem | null>(null);

  // redux hooks
  const { data, isLoading } = useGetAllDonationQuery(undefined);
  const [deleteDonation] = useDeleteDonationMutation();

  // event handlers
  const handleDelete = async (id: string) => {
    const res = await deleteDonation(id).unwrap();
    toastMessage(res);
  };

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleOpenEditModal = (item: TDonationItem) => {
    setDonation(item);
    setOpenEditModal(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container component={"section"} sx={{ mt: 3 }}>
      <Box display={"flex"} justifyContent={"end"} mb={1} component={"div"}>
        <Button
          onClick={handleOpenCreateModal}
          variant="contained"
          color="primary"
        >
          Donation Now
        </Button>
      </Box>
      {/* table for show donation data */}
      <Box overflow={"auto"}>
        <TableContainer component={"table"}>
          <Table sx={{ minWidth: "100%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
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
                  <TableCell align="center">
                    <IconButton
                      size="large"
                      color="info"
                      onClick={() => handleOpenEditModal(item)}
                    >
                      <EditCalendarOutlined fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={() => handleDelete(item._id)}
                      aria-label="delete"
                      color="error"
                      size="large"
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* create donation modal */}
      <CreateDonationModal
        open={openCreateModal}
        setOpen={setOpenCreateModal}
      />
      {/* edit modal */}
      <EditDonationModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        donation={donation}
      />
    </Container>
  );
}
