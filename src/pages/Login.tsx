/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import From from "../components/from/From";
import FromHeader from "../components/from/FromHeader";
import FromSubmit from "../components/from/FromSubmit";
import InputField from "../components/from/InputField";
import { useLoginUserMutation } from "../redux/features/auth";
import { setUser } from "../redux/features/auth/auth.slice";
import { useAppDispatch } from "../redux/redux.hooks";
import { registerBox, registerContainer } from "../styles";
import { TLoginSchema } from "../types/login.type";
import { ToastErrorMessage, ToastSuccessMessage } from "../utils/toastmessage";

export default function Login() {
  // hooks
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // handler login function
  const handleLoginUser = async (data: FieldValues) => {
    try {
      const res = await loginUser(data).unwrap();
      ToastSuccessMessage(res.message);
      dispatch(setUser(res));
      navigate("/");
    } catch (error: any) {
      ToastErrorMessage(error?.data?.message);
    }
  };

  return (
    <Container component={"section"} sx={registerContainer}>
      <Box sx={registerBox}>
        <FromHeader>Login Now</FromHeader>
        <From handler={handleLoginUser} schema={TLoginSchema}>
          <InputField name="email" label="Email" type="email" />
          <InputField name="password" label="password" type="password" />
          <Typography color={"text.primary"} mt={2}>
            New in HelpLink ?{" "}
            <Link style={{ color: "blue" }} to={"/auth/register"}>
              Register now
            </Link>
          </Typography>
          <FromSubmit text="Login" loading={isLoading} />
        </From>
      </Box>
    </Container>
  );
}
