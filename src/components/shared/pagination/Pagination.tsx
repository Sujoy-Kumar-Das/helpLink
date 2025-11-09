import { Box, Card, Pagination } from "@mui/material";
const CustomPagination = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 6,
        mb: 4,
      }}
    >
      <Card
        sx={{
          p: 2,
          background: `linear-gradient(135deg,background.paper 0%, `,
          backdropFilter: "blur(10px)",
          borderWidth: `1px solid}`,
          borderColor: "primary.main",
        }}
      >
        <Pagination
          count={10}
          page={1}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              fontWeight: 600,
              borderColor: "primary.main",
              "&:hover": {
                background: "primary.main",
              },
              "&.Mui-selected": {
                background: `linear-gradient(135deg, primary.main 0%, secondary.main 100%)`,
                color: "white",
                borderColor: "transparent",
                boxShadow: `0 4px 12px primary.main`,
              },
            },
          }}
        />
      </Card>
    </Box>
  );
};

export default CustomPagination;
