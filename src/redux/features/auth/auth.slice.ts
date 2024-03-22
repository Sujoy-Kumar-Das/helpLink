import { createSlice } from "@reduxjs/toolkit";

type TUser = {
  name: string;
  email: string;
};

type TAuthInitialState = {
  token: null | string;
  user: null | TUser;
};
const initialState: TAuthInitialState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
