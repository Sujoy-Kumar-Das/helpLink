import { baseApi } from "../../api/baseApi";

const getAllTestimonialsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTestimonials: builder.query({
      query: (limit) => {
        const query = new URLSearchParams();
        if (query) {
          query.append("limit", limit);
        }
        return { url: "/testimonials", method: "GET", params: query };
      },
    }),
  }),
});

export const { useGetAllTestimonialsQuery } = getAllTestimonialsApi;
