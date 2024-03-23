import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { logout } from "../../../../redux/features/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../../../redux/redux.hooks";
import ToggleButton from "./ToggleButton";

export default function NavToggleButton() {
  // user state
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 1 }}
      flexDirection={{ xs: "column", md: "row" }}
    >
      {!token ? (
        <Link to={"/auth/login"}>
          <Button
            variant="contained"
            color="primary"
            type="button"
            sx={{ boxShadow: "none" }}
          >
            Login
          </Button>
        </Link>
      ) : (
        <Button
          onClick={handleLogout}
          variant="contained"
          type="button"
          color="primary"
          sx={{ boxShadow: "none" }}
        >
          Logout
        </Button>
      )}
      <ToggleButton hide={true} />
    </Box>
  );
}
