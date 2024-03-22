import { baseApi } from "../../api/baseApi";

const getDonationDetail = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDonationDetail: builder.query({
      query: (id) => ({ url: `/all-donation/${id}`, method: "GET" }),
      providesTags: ["donation"],
    }),
  }),
});

export const { useGetDonationDetailQuery } = getDonationDetail;
