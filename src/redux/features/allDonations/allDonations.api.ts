import { baseApi } from "../../api/baseApi";

const getAllDonation = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonation: builder.query({
      query: (limit) => {
        const params = new URLSearchParams();
        if (limit) {
          params.append("limit", limit);
        }
        return { url: "/all-donation", method: "GET", params: params };
      },
      providesTags: ["donation"],
    }),
  }),
});

export const { useGetAllDonationQuery } = getAllDonation;
