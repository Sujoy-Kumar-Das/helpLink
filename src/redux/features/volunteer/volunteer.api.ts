import { baseApi } from "../../api/baseApi";

const createVolunteer = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVolunteer: builder.mutation({
      query: (data) => {
        return {
          url: `volunteer`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["volunteer"],
    }),
  }),
});

export const { useCreateVolunteerMutation } = createVolunteer;
