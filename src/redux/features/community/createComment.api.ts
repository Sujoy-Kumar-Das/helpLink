import { baseApi } from "../../api/baseApi";

const createComment = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: ({ id, commentData }) => {
        console.log({ url: `/community/${id}`, commentData });
        return {
          url: `/community/${id}`,
          method: "PUT",
          body: commentData,
        };
      },
      invalidatesTags: ["community"],
    }),
  }),
});

export const { useCreateCommentMutation } = createComment;
