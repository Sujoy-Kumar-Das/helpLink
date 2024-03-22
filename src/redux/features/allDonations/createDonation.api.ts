import { baseApi } from "../../api/baseApi";

const createDonation = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDonation: builder.mutation({
      query: (data) => {
        return {
          url: `/create-donation`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["donation"],
    }),
  }),
});

export const { useCreateDonationMutation } = createDonation;
