import { baseApi } from "../../api/baseApi";

const loginUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({ url: "/login", method: "POST", body: data }),
    }),
  }),
});

export const { useLoginUserMutation } = loginUserApi;
