import { baseApi } from "../../api/baseApi";

const createUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({ url: "/register", method: "POST", body: data }),
    }),
  }),
});

export const { useCreateUserMutation } = createUserApi;
