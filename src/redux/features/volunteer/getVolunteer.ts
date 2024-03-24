import { baseApi } from "../../api/baseApi";

const getAllVolunteers = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVolunteers: builder.query({
      query: (limit) => {
        const query = new URLSearchParams();
        if (query) {
          query.append("limit", limit);
        }
        return { url: "/volunteer", method: "GET", params: query };
      },
    }),
  }),
});

export const { useGetAllVolunteersQuery } = getAllVolunteers;
