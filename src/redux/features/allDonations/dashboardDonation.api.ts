import { baseApi } from "../../api/baseApi";

const getAllDashboardDonation = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDashboardDonation: builder.query({
      query: () => ({
        url: "/admin/donation",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),
  }),
});

export const { useGetAllDashboardDonationQuery } = getAllDashboardDonation;
