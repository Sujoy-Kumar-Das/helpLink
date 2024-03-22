import { baseApi } from "../../api/baseApi";

const deleteDonation = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteDonation: builder.mutation({
      query: (id) => ({ url: `/all-donation/${id}`, method: "DELETE" }),
      invalidatesTags: ["donation"],
    }),
  }),
});

export const { useDeleteDonationMutation } = deleteDonation;
