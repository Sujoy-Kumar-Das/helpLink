import { baseApi } from "../../api/baseApi";

const updateDonation = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateDonation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/all-donation/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["donation"],
    }),
  }),
});

export const { useUpdateDonationMutation } = updateDonation;
