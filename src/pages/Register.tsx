/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import From from "../components/from/From";
import FromHeader from "../components/from/FromHeader";
import FromSubmit from "../components/from/FromSubmit";
import InputField from "../components/from/InputField";
import InputFile from "../components/from/InputFile";
import { useCreateUserMutation } from "../redux/features/auth";
import { setUser } from "../redux/features/auth/auth.slice";
import { useAppDispatch } from "../redux/redux.hooks";
import { registerBox, registerContainer } from "../styles";
import { TCreateUserSchema } from "../types";
import { ToastErrorMessage, ToastSuccessMessage } from "../utils/toastmessage";
import { uploadImage } from "../utils/uploadImage";

export default function Register() {
  // hooks
  const [createUser, { isLoading }] = useCreateUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // handle create user function
  const handleCreateUser = async (data: FieldValues) => {
    try {
      data.image = await uploadImage(data.image);
      const res = await createUser(data).unwrap();
      dispatch(setUser(res));
      ToastSuccessMessage(res.message);
      navigate("/");
    } catch (error: any) {
      ToastErrorMessage(error.data.message);
    }
  };

  return (
    <Container component={"section"} sx={registerContainer}>
      <Box sx={registerBox}>
        <FromHeader>Create Account Now</FromHeader>
        <From handler={handleCreateUser} schema={TCreateUserSchema}>
          <InputField name="name" label="Name" type="text" />
          <InputField name="location" label="Location" type="address" />
          <InputFile name="image" />
          <InputField name="email" label="Email" type="email" />
          <InputField name="password" label="password" type="password" />
          <FromSubmit text="Create Account" loading={isLoading} />
        </From>
      </Box>
    </Container>
  );
}
