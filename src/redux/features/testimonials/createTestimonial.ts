import { baseApi } from "../../api/baseApi";

const createTestimonial = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTestimonial: builder.mutation({
      query: (data) => {
        return {
          url: `testimonial`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["testimonial"],
    }),
  }),
});

export const { useCreateTestimonialMutation } = createTestimonial;
