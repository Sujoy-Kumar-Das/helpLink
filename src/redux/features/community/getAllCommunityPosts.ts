import { baseApi } from "../../api/baseApi";

const getAllCommunity = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCommunity: builder.query({
      query: () => ({ url: "/community", method: "GET" }),
      providesTags: ["community"],
    }),
  }),
});

export const { useGetAllCommunityQuery } = getAllCommunity;
