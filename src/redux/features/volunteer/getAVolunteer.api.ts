import { baseApi } from "../../api/baseApi";

const getAVolunteer = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAVolunteer: builder.query({
      query: (id) => ({ url: `/volunteer/${id}`, method: "GET" }),
    }),
  }),
});

export const { useGetAVolunteerQuery } = getAVolunteer;
