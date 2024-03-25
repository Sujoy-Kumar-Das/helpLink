import { Box } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { useCreateCommentMutation } from "../../redux/features/community/createComment.api";
import { useAppSelector } from "../../redux/redux.hooks";
import toastMessage from "../../utils/toastMessage";
import { ToastErrorMessage } from "../../utils/toastmessage";
import From from "../from/From";
import FromSubmit from "../from/FromSubmit";
import FromTextArea from "../from/FromTextArea";

export default function AddComment({ id }: { id: string }) {
  // redux hooks
  const user = useAppSelector((state) => state.auth.user);
  const [createComment, { isLoading }] = useCreateCommentMutation();

  const handleComment = async (data: FieldValues) => {
    if (!user) {
      return ToastErrorMessage("Please, Login for comment.");
    }
    const commentData = {
      commenter: {
        username: user?.name,
        image_url: user?.image,
        location: user?.location,
      },
      comment: data.comment,
    };

    const res = await createComment({ commentData, id }).unwrap();
    toastMessage(res);
  };

  const commentSchema = z.object({
    comment: z
      .string()
      .min(10, { message: "Comment must be minimum 10 character long." }),
  });
  return (
    <Box sx={{ my: 4 }}>
      <From handler={handleComment} schema={commentSchema}>
        <FromTextArea label="Add Comment" name="comment" type="text" />
        <Box sx={{ width: { xs: "100%", md: "20%" } }}>
          <FromSubmit loading={isLoading} text="Add comment" />
        </Box>
      </From>
    </Box>
  );
}
